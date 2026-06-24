import { Certificate } from "../types";

/**
 * Course completion certificates. Export each certificate as JPG/PNG/WebP and
 * place the file under public/images/certificates/ using the paths below.
 */
const certificatesData: Certificate[] = [
  {
    id: "claude-101-anthropic",
    title: "Claude 101",
    issuer: "Anthropic Education",
    completedDate: "2026-06-24",
    credentialUrl: "https://verify.skilljar.com/c/o5ho7k6byy8y",
    image: "/images/certificates/claude-101-certificate.jpg",
    provider: "anthropic",
    skills: ["Claude", "AI", "LLM", "Prompt Engineering"],
    featured: true,
  },
  {
    id: "gen-ai-asssistediengineer-virtusa",
    title: "Virtusa Certified Gen AI Assisted Engineer",
    issuer: "Virtusa",
    completedDate: "2026-05-26",
    credentialUrl: "https://www.virtusa.com/",
    image: "/images/certificates/gen-ai-assisted-engineer-virtusa.png",
    provider: "virtusa",
    skills: ["Copilot", "LLM", "AWS Bedrock", "Cursor", "Gemini"],
    featured: true,
  },
  {
    id: "python-essentials-linkedin-learning",
    title: "Python Essential Training",
    issuer: "LinkedIn Learning",
    completedDate: "2024-05-09",
    credentialUrl: "https://www.linkedin.com/learning/",
    image: "/images/certificates/python-essentials-linkedin-learning.jfif",
    provider: "linkedin",
    skills: ["Python", "Programming", "Essentials"],
    featured: true,
  },
  {
    id: "gitlab-cicd-linkedin-learning",
    title: "Continuous Integration and Continuous Delivery with GitLab",
    issuer: "LinkedIn Learning",
    completedDate: "2022-12-05",
    credentialUrl: "https://www.linkedin.com/learning/",
    image: "/images/certificates/gitlab-cicd-linkedin-learning.png",
    provider: "linkedin",
    skills: ["GitLab", "CI/CD"],
    featured: false,
  },
  {
    id: "figma-uz-design-linkedin-learning",
    title: "Figma UX Design",
    issuer: "LinkedIn Learning",
    completedDate: "2022-11-06",
    credentialUrl: "https://www.linkedin.com/learning/",
    image: "/images/certificates/figma-uz-design-linkedin-learning.png",
    provider: "linkedin",
    skills: ["Figma", "UX Design"],
    featured: false,
  },
  {
    id: "serverless-apps-aws-linkedin-learning",
    title: "Building Serverless Apps on AWS",
    issuer: "LinkedIn Learning",
    completedDate: "2022-07-26",
    credentialUrl: "https://www.linkedin.com/learning/",
    image: "/images/certificates/serverless-apps-aws-linkedin-learning.png",
    provider: "linkedin",
    skills: [
      "AWS",
      "Serverless",
      "Lambda",
      "API Gateway",
      "CloudFront",
      "CloudWatch",
    ],
    featured: true,
  },
  {
    id: "learning-graphql-linkedin-learning",
    title: "Learning GraphQL",
    issuer: "LinkedIn Learning",
    completedDate: "2022-07-07",
    credentialUrl: "https://www.linkedin.com/learning/",
    image: "/images/certificates/learning-graphql-linkedin-learning.png",
    provider: "linkedin",
    skills: [
      "GraphQL",
      "API",
      "GraphQL Schema",
      "GraphQL Query",
      "GraphQL Mutation",
    ],
    featured: false,
  },
  {
    id: "graphql-essesntials-linkedin-learning",
    title: "GraphQL Essentials Training",
    issuer: "LinkedIn Learning",
    completedDate: "2022-03-30",
    credentialUrl: "https://www.linkedin.com/learning/",
    image: "/images/certificates/graphql-essesntials-linkedin-learning.png",
    provider: "linkedin",
    skills: [
      "GraphQL",
      "API",
      "GraphQL Schema",
      "GraphQL Query",
      "GraphQL Mutation",
    ],
    featured: false,
  },
  {
    id: "cutting-edge-css-linkedin-learning",
    title: "Cutting Edge CSS",
    issuer: "LinkedIn Learning",
    completedDate: "2022-03-22",
    credentialUrl: "https://www.linkedin.com/learning/",
    image: "/images/certificates/cutting-edge-css-linkedin-learning.png",
    provider: "linkedin",
    skills: ["CSS", "HTML", "JavaScript", "Frontend"],
    featured: false,
  },
  {
    id: "react-testing-and-debugging",
    title: "React Testing and Debugging",
    issuer: "LinkedIn Learning",
    completedDate: "2022-03-23",
    credentialUrl: "https://www.linkedin.com/learning/",
    image: "/images/certificates/react-testing-and-debugging.png",
    provider: "linkedin",
    skills: ["React", "Testing", "Debugging"],
    featured: false,
  },
];

export const HOME_CERTIFICATES_COUNT = 3;

export const certificates = [...certificatesData].sort(
  (a, b) =>
    new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime(),
);

export const featuredCertificates = certificates
  .filter((certificate) => certificate.featured)
  .slice(0, HOME_CERTIFICATES_COUNT);
