import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    company: "Wiley Global Technology (PVT) LTD.",
    location: "Colombo 5, Sri Lanka",
    url: "https://www.wiley.com/en-sg",
    logo: "/images/companies/wiley-logo.png",

    from: { month: 3, year: 2022 },
    to: { month: 0, year: 0, isPresent: true },
    roles: [
      {
        title: "Associate Technical Specialist",
        from: { month: 7, year: 2023 },
        to: { month: 0, year: 0, isPresent: true },
        description:
          "Driving technical strategy and leading cross-functional engineering teams to deliver scalable, AI-enhanced web platforms.",
        achievements: [
          "Led feature delivery and architecture for the Wiley Reader platform",
          "Built scalable frontend solutions using React and modern state patterns",
          "Contributed to solutioning discussions, translating business requirements into technical designs",
          "Maintained internal React design system (Flint) and published reusable packages",
          "Leveraged AWS services to support CI/CD, deployment workflows, and frontend infrastructure improvements",
        ],
        technologies: ["React", "TypeScript", "Next.js", "AWS Services", "GraphQL", "GenAI", "GitHub Actions"],
      },
      {
        title: "Senior Software Engineer",
        from: { month: 3, year: 2022 },
        to: { month: 7, year: 2023 },
        description:
          "Built and optimized core features of the Wiley Reader platform with focus on performance and reusable UI architecture.",
        achievements: [
          "Delivered major features and performance improvements",
          "Improved application maintainability through modular React architecture and reusable component patterns",
          "Collaborated cross-functionally for high-quality releases",
          "Contributed to internal UI standardization efforts through early design system initiatives",
        ],
        technologies: ["React", "TypeScript", "Node.js", "AWS", "Redux"],
      },
    ],
  },
  {
    company: "Villvay",
    location: "Dehiwala, Sri Lanka",
    url: "https://villvay.com",
    logo: "/images/companies/villvay.jpeg",

    from: { month: 11, year: 2020 },
    to: { month: 3, year: 2022 },
    roles: [
      {
        title: "Senior Software Engineer - React JS",
        from: { month: 11, year: 2020 },
        to: { month: 3, year: 2022 },
        description:
          "Core React Native engineer building scalable mobile applications in cross-functional teams.",
        achievements: [
          "Contributed to mPokket app from architecture to production.",
          "Built multiple React applications across domains.",
          "Conducted code reviews and enforced best practices",
          "Delivered production-ready features on schedule",
        ],
        technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Redux"],
      },
    ],
  },
  {
    company: "Savantis Solutions LLC",
    location: "Nugegoda, Sri Lanka",
    url: "https://www.savantis.com",
    logo: "/images/companies/savantis.jfif",

    from: { month: 4, year: 2019 },
    to: { month: 11, year: 2020 },
    roles: [
      {
        title: "Senior Software Engineer",
        from: { month: 4, year: 2020 },
        to: { month: 11, year: 2020 },
        description:
          "Led development of enterprise-grade web applications and drove architectural decisions across projects.",
        achievements: [
          "Promoted to Senior based on technical and leadership impact.",
          "Led development of React Native Android Kitchen Development System application.",
          "Mentored junior developers and conducted reviews.",
        ],
        technologies: ["React Native", "React", "JavaScript", "RESTful APIs", "MySQL", "Git"],
      },
      {
        title: "Software Engineer",
        from: { month: 4, year: 2019 },
        to: { month: 4, year: 2020 },
        description:
          "Developed and maintained multiple web applications using React library for Arclight Cinema website.",
        achievements: [
          "Seat booking system for Arclight Cinema website.",
          "Developed reusable React components library for the project.",
        ],
        technologies: ["React", "JavaScript", "RESTful APIs", "MySQL", "Git"],
      },
    ],
  },
  {
    company: "Racing and Sports",
    location: "Mt. Lavinia, Sri Lanka",
    url: "https://www.racingandsports.com",
    logo: "/images/companies/racing-and-sports.jpeg",

    from: { month: 10, year: 2016 },
    to: { month: 3, year: 2019 },
    roles: [
      {
        title: "Software Engineer",
        from: { month: 10, year: 2016 },
        to: { month: 3, year: 2019 },
        description:
          "Developed high-traffic sports data applications while adapting to ASP.NET and C# ecosystem.",
        achievements: [
          "Adapted quickly to ASP.NET and C# stack.",
          "Built and maintained core website features",
          "Implemented backend data processing and scraping workflows",
          "Introduced Vue.js to improve frontend modularity",
          "Contributed to production performance optimizations"
        ],
        technologies: ["ASP.NET", "C#", "JavaScript", "jQuery", "MySQL", "Vue.js", "Git"],
      },
    ],
  },
  {
    company: "Prologics IT Solutions",
    location: "Colombo, Sri Lanka",
    url: "https://www.prologics.lk",
    logo: "/images/companies/prologics-it-solutions.png",

    from: { month: 11, year: 2015 },
    to: { month: 10, year: 2016 },
    roles: [
      {
        title: "Associate Software Engineer",
        from: { month: 11, year: 2015 },
        to: { month: 10, year: 2016 },
        description:
          "Developed ERP and HR web applications using PHP and Yii frameworks.",
        achievements: [
          "Built backend services and business workflow features",
          "Integrated databases and UI components",
          "Gathered requirements and translated to technical solutions",
          "Provided direct client support and issue resolution",
          "Applied clean coding practices early in career",
        ],
        technologies: ["PHP", "HTML5", "CSS3", "MySQL", "Yii/Yii2", "jQuery", "Bootstrap", "RESTful APIs", "Git"],
      },
    ],
  },
];
