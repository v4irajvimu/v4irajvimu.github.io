"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { HiSearch, HiSortDescending } from "react-icons/hi";
import { certificates } from "@/lib/data";
import type { Certificate } from "@/lib/types";
import CertificateCard from "./CertificateCard";
import CertificateDetailModal from "./CertificateDetailModal";

const SORT_OPTIONS = [
  { value: "date-desc", label: "Newest first" },
  { value: "date-asc", label: "Oldest first" },
  { value: "title-asc", label: "Title A–Z" },
  { value: "title-desc", label: "Title Z–A" },
] as const;

type SortValue = (typeof SORT_OPTIONS)[number]["value"];
type CertificateProvider = NonNullable<Certificate["provider"]>;
type ProviderFilter = "all" | CertificateProvider;

const PROVIDER_LABELS: Record<CertificateProvider, string> = {
  aws: "AWS",
  coursera: "Coursera",
  udemy: "Udemy",
  linkedin: "LinkedIn",
  google: "Google",
  anthropic: "Anthropic",
  virtusa: "Virtusa",
  other: "Other",
};

function getAvailableProviders(
  items: Certificate[],
): CertificateProvider[] {
  const providers = new Set<CertificateProvider>();
  for (const certificate of items) {
    providers.add(certificate.provider ?? "other");
  }
  return Array.from(providers).sort((a, b) =>
    PROVIDER_LABELS[a].localeCompare(PROVIDER_LABELS[b]),
  );
}

function sortCertificates(
  items: Certificate[],
  sort: SortValue,
): Certificate[] {
  const copy = [...items];
  switch (sort) {
    case "date-desc":
      return copy.sort(
        (a, b) =>
          new Date(b.completedDate).getTime() -
          new Date(a.completedDate).getTime(),
      );
    case "date-asc":
      return copy.sort(
        (a, b) =>
          new Date(a.completedDate).getTime() -
          new Date(b.completedDate).getTime(),
      );
    case "title-asc":
      return copy.sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { sensitivity: "base" }),
      );
    case "title-desc":
      return copy.sort((a, b) =>
        b.title.localeCompare(a.title, undefined, { sensitivity: "base" }),
      );
    default:
      return copy;
  }
}

function filterCertificates(
  items: Certificate[],
  query: string,
  provider: ProviderFilter,
): Certificate[] {
  let result = items;

  if (provider !== "all") {
    result = result.filter(
      (certificate) => (certificate.provider ?? "other") === provider,
    );
  }

  if (!query.trim()) return result;

  const q = query.trim().toLowerCase();
  return result.filter(
    (certificate) =>
      certificate.title.toLowerCase().includes(q) ||
      certificate.issuer.toLowerCase().includes(q) ||
      certificate.skills?.some((skill) => skill.toLowerCase().includes(q)),
  );
}

const chipBaseClass =
  "inline-flex shrink-0 items-center rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const chipActiveClass =
  "border-accent bg-accent text-white shadow-sm shadow-accent/25";
const chipInactiveClass =
  "border-muted bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground";

export default function CertificatesPageContent() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortValue>("date-desc");
  const [provider, setProvider] = useState<ProviderFilter>("all");
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const availableProviders = useMemo(
    () => getAvailableProviders(certificates),
    [],
  );

  const filteredAndSorted = useMemo(() => {
    const filtered = filterCertificates(certificates, search, provider);
    return sortCertificates(filtered, sort);
  }, [search, sort, provider]);

  const openDetail = useCallback(
    (certificate: Certificate) => setSelectedCertificate(certificate),
    [],
  );
  const closeDetail = useCallback(() => setSelectedCertificate(null), []);

  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            ← Back to home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">
            Course <span className="gradient-text">Certificates</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Course completions and certifications across cloud, frontend, and
            modern engineering practices.
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-md">
            <HiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={20}
              aria-hidden
            />
            <input
              type="search"
              placeholder="Search by title, issuer, or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-card-border bg-card py-2.5 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              aria-label="Search certificates"
            />
          </div>
          <div className="flex items-center gap-2">
            <HiSortDescending
              size={20}
              className="text-muted-foreground shrink-0"
              aria-hidden
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortValue)}
              className="w-full min-w-0 rounded-lg border border-card-border bg-card px-4 py-2.5 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:w-auto"
              aria-label="Sort certificates"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div
          role="group"
          aria-label="Filter by provider"
          className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          <button
            type="button"
            onClick={() => setProvider("all")}
            aria-pressed={provider === "all"}
            className={`${chipBaseClass} ${
              provider === "all" ? chipActiveClass : chipInactiveClass
            }`}
          >
            All
          </button>
          {availableProviders.map((providerKey) => {
            const isActive = provider === providerKey;
            return (
              <button
                key={providerKey}
                type="button"
                onClick={() => setProvider(providerKey)}
                aria-pressed={isActive}
                className={`${chipBaseClass} ${
                  isActive ? chipActiveClass : chipInactiveClass
                }`}
              >
                {PROVIDER_LABELS[providerKey]}
              </button>
            );
          })}
        </div>

        {filteredAndSorted.length === 0 ? (
          <p className="rounded-xl border border-card-border bg-card p-8 text-center text-muted-foreground">
            No certificates match your filters. Try a different search or
            provider.
          </p>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              Showing {filteredAndSorted.length} certificate
              {filteredAndSorted.length !== 1 ? "s" : ""}
              {provider !== "all"
                ? ` from ${PROVIDER_LABELS[provider]}`
                : ""}
            </p>
            <div className="grid auto-rows-min gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAndSorted.map((certificate, index) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  index={index}
                  onSelect={openDetail}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {selectedCertificate ? (
        <CertificateDetailModal
          certificate={selectedCertificate}
          onClose={closeDetail}
        />
      ) : null}
    </section>
  );
}
