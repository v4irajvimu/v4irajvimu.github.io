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
  learning: ["Flutter", "Micro Frontends", "AWS"],
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
      { name: "jQuery", icon: "jquery" },
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
];

export const experiences: Experience[] = [
  {
    company: "Your Company Name",
    role: "Senior Software Engineer",
    duration: "2022 - Present",
    description:
      "Leading frontend development initiatives, architecting scalable web applications, and mentoring junior developers.",
    achievements: [
      "Led the migration of a legacy application to React with TypeScript, improving performance by 40%",
      "Architected micro-frontend infrastructure serving 100K+ daily active users",
      "Established coding standards and CI/CD pipelines for the frontend team",
    ],
    technologies: ["React", "TypeScript", "Next.js", "AWS", "GraphQL"],
  },
  {
    company: "Previous Company",
    role: "Software Engineer",
    duration: "2020 - 2022",
    description:
      "Developed and maintained multiple web applications using modern JavaScript frameworks.",
    achievements: [
      "Built a real-time dashboard using React and WebSocket, reducing data latency by 60%",
      "Implemented responsive designs that improved mobile user engagement by 35%",
      "Integrated third-party APIs and payment gateways for e-commerce platform",
    ],
    technologies: ["React", "Vue.js", "Node.js", "MongoDB", "Redux"],
  },
  {
    company: "First Company",
    role: "Junior Software Engineer",
    duration: "2018 - 2020",
    description:
      "Started professional career building web applications and learning best practices in software development.",
    achievements: [
      "Developed RESTful APIs using Node.js and Express for multiple client projects",
      "Created reusable component library that accelerated development across teams",
      "Contributed to open-source projects and internal tooling",
    ],
    technologies: ["JavaScript", "jQuery", "PHP", "Laravel", "MySQL"],
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
