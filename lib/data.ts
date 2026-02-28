import {
  PersonalInfo,
  NavLink,
  SocialLink,
  SkillCategory,
  Experience,
  Project,
  BlogPost,
  Testimonial,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Vimukthi Jayasinghe",
  title: "Associate Technical Specialist",
  tagline: [
    "Full Stack Senior Software Engineer",
    "JavaScript Lover",
    "Frontend Development Expert",
    "React Enthusiast",
    "Cross Platform App Developer",
    "Cloud Computing Expert",
    "AI & LLM Integration Specialist"
  ],
  bio: "Associate Technical Specialist and Senior Full Stack Engineer dedicated to architecting AI-enhanced digital ecosystems. I bridge the gap between intelligent cloud infrastructure and intuitive user interfaces, transforming ambitious, data-driven ideas into scalable, production-ready software.",
  email: "viraj.vimu@gmail.com",
  location: "Mawanella, Sri Lanka",
  education: "B.Sc. in Computing and Information Systems",
  university: "Sabaragamuwa University of Sri Lanka",
  resumeUrl: "#",
  avatarUrl: "/images/avatar.jpg",
  learning: ["Agentic AI", "Cloud Computing", "React"],
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/v4irajvimu", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/v4irajvimu",
    icon: "linkedin",
  },
  { name: "Twitter", url: "https://twitter.com/v4irajvimu", icon: "twitter" },
  { name: "Medium", url: "https://medium.com/@viraj.vimu", icon: "medium" },
  { name: "Dev.to", url: "https://dev.to/v4irajvimu", icon: "devto" },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/11748563/vimukthi-jayasinghe",
    icon: "stackoverflow",
  },
  {
    name: "CodePen",
    url: "https://codepen.io/v4irajvimu",
    icon: "codepen",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/v4irajvimu",
    icon: "facebook",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Vue.js", icon: "vue" },
      { name: "Nuxt.js", icon: "nuxt" },
      { name: "Svelte", icon: "svelte" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Sass", icon: "sass" },
      { name: "Material UI", icon: "mui" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Redux", icon: "redux" },
      { name: "MobX", icon: "mobx" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "GraphQL", icon: "graphql" },
      { name: ".NET", icon: "dotnet" },
      { name: "Laravel", icon: "laravel" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    title: "Mobile & Cross-Platform",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Webpack", icon: "webpack" },
      { name: "Babel", icon: "babel" },
      { name: "Figma", icon: "figma" },
      { name: "Photoshop", icon: "photoshop" },
      { name: "Adobe XD", icon: "xd" },
      { name: "C#", icon: "csharp" },
      { name: "PHP", icon: "php" },
    ],
  },
  {
    title: "AI, LLM & Tools",
    skills: [
      { name: "OpenAI", icon: "openai" },
      { name: "Anthropic", icon: "anthropic" },
      { name: "Google Gemini", icon: "google" },
      { name: "Ollama", icon: "ollama" },
      { name: "LangChain", icon: "langchain" },
      { name: "Cursor", icon: "cursor" },
      { name: "Claude Code", icon: "claude" },
      { name: "Copilot", icon: "copilot" },
    ],
  }
];

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
          "Architected micro-frontend infrastructure serving 100K+ daily active users",
          "Led the integration of Generative AI and LLMs into product workflows",
          "Established coding standards and CI/CD pipelines for the frontend team",
        ],
        technologies: ["React", "TypeScript", "Next.js", "AWS", "GraphQL", "GenAI"],
      },
      {
        title: "Senior Software Engineer",
        from: { month: 3, year: 2022 },
        to: { month: 7, year: 2023 },
        description:
          "Led frontend development initiatives, architecting scalable web applications and mentoring junior developers.",
        achievements: [
          "Led the migration of a legacy application to React with TypeScript, improving performance by 40%",
          "Built reusable component libraries that accelerated development across teams",
          "Implemented responsive designs that improved mobile user engagement by 35%",
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
          "Developed and maintained multiple high-traffic web applications using React and modern JavaScript frameworks.",
        achievements: [
          "Built a real-time dashboard using React and WebSocket, reducing data latency by 60%",
          "Integrated third-party APIs and payment gateways for e-commerce platforms",
          "Mentored junior developers and conducted code reviews to ensure quality",
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
          "Architected and delivered a client-facing SPA that improved user retention by 30%",
          "Established frontend testing practices with unit and integration test coverage",
          "Collaborated with cross-functional teams to define technical roadmaps",
        ],
        technologies: ["React", "Vue.js", "Node.js", "GraphQL", "AWS"],
      },
      {
        title: "Software Engineer",
        from: { month: 4, year: 2019 },
        to: { month: 4, year: 2020 },
        description:
          "Developed and maintained multiple web applications using modern JavaScript frameworks.",
        achievements: [
          "Built responsive, accessible UIs for client projects using React and Vue.js",
          "Integrated RESTful APIs and optimized frontend performance",
          "Contributed to internal tooling that improved developer productivity",
        ],
        technologies: ["React", "Vue.js", "JavaScript", "Node.js", "MySQL"],
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
          "Built and maintained web applications for real-time sports data platforms, handling high-concurrency traffic.",
        achievements: [
          "Developed real-time data visualization features for live sports events",
          "Optimized database queries and API endpoints for high-traffic scenarios",
          "Created reusable component library that accelerated development across teams",
        ],
        technologies: ["JavaScript", "jQuery", "PHP", "Laravel", "MySQL"],
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
          "Started professional career building web applications and learning best practices in software development.",
        achievements: [
          "Developed RESTful APIs using Node.js and Express for multiple client projects",
          "Built responsive web interfaces following modern design principles",
          "Contributed to open-source projects and internal tooling",
        ],
        technologies: ["JavaScript", "PHP", "HTML5", "CSS3", "MySQL"],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js and Stripe integration, featuring server-side rendering and optimized performance.",
    image: "/images/projects/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A real-time messaging application with WebSocket support, featuring group chats, file sharing, and end-to-end encryption.",
    image: "/images/projects/project-2.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management Dashboard",
    description:
      "A collaborative project management tool with drag-and-drop boards, real-time updates, and analytics dashboard.",
    image: "/images/projects/project-3.jpg",
    tags: ["Vue.js", "GraphQL", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Mobile Fitness App",
    description:
      "A cross-platform fitness tracking application built with Flutter, featuring workout plans, progress tracking, and social features.",
    image: "/images/projects/project-4.jpg",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Micro Frontends with React",
    excerpt:
      "Explore how to architect and implement micro frontends using React, Module Federation, and modern build tools.",
    url: "https://medium.com/@viraj.vimu",
    date: "2024-12-15",
    readTime: "8 min read",
    platform: "Medium",
  },
  {
    title: "TypeScript Best Practices for Large-Scale Applications",
    excerpt:
      "A comprehensive guide to writing maintainable TypeScript code with advanced patterns and practical examples.",
    url: "https://dev.to/v4irajvimu",
    date: "2024-10-20",
    readTime: "12 min read",
    platform: "Dev.to",
  },
  {
    title: "Server-Side Rendering vs Static Generation in Next.js",
    excerpt:
      "Understanding when to use SSR, SSG, and ISR in Next.js applications for optimal performance and SEO.",
    url: "https://medium.com/@viraj.vimu",
    date: "2024-08-05",
    readTime: "6 min read",
    platform: "Medium",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "John Smith",
    role: "Engineering Manager",
    company: "Tech Corp",
    content:
      "Vimukthi is an exceptional frontend developer with a keen eye for detail. His ability to translate complex designs into pixel-perfect, performant code is remarkable. A true team player who consistently delivers beyond expectations.",
    avatar: "/images/testimonials/avatar-1.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "StartupXYZ",
    content:
      "Working with Vimukthi was a fantastic experience. He brought creative solutions to challenging problems and his deep understanding of modern web technologies helped us ship our product ahead of schedule.",
    avatar: "/images/testimonials/avatar-2.jpg",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    company: "Digital Agency",
    content:
      "Vimukthi's expertise in React and TypeScript is outstanding. He mentored our junior developers effectively and established coding practices that significantly improved our codebase quality.",
    avatar: "/images/testimonials/avatar-3.jpg",
  },
];
