import {
  PersonalInfo,
  NavLink,
  SocialLink,
  SkillCategory,
  Experience,
  Project,
  BlogPost,
  Testimonial,
  LinkedInRecommendation,
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
  phone: "+94 71 878 4949",
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
  // { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/v4irajvimu", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/virajvimu/",
    icon: "linkedin",
  },
  { name: "Twitter", url: "https://twitter.com/v4irajvimu", icon: "twitter" },
  { name: "Medium", url: "https://medium.com/@viraj.vimu", icon: "medium" },
  // { name: "Dev.to", url: "https://dev.to/v4irajvimu", icon: "devto" },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/11748563/vimukthi-jayasinghe",
    icon: "stackoverflow",
  },
  // {
  //   name: "CodePen",
  //   url: "https://codepen.io/v4irajvimu",
  //   icon: "codepen",
  // },
  // {
  //   name: "Facebook",
  //   url: "https://facebook.com/v4irajvimu",
  //   icon: "facebook",
  // },
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
    title: "Cloud Services",
    skills: [
      { name: "Lambda", icon: "lambda" },
      { name: "S3", icon: "s3" },
      { name: "CloudFormation", icon: "cloudformation" },
      { name: "DynamoDB", icon: "dynamodb" },
      { name: "AppSync", icon: "appsync" },
      { name: "API Gateway", icon: "apigateway" },
      { name: "CloudFront", icon: "cloudfront" },
      { name: "CloudWatch", icon: "cloudwatch" },
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "Cloudflare Workers", icon: "cloudflareworkers" },
      { name: "Step Functions", icon: "stepfunctions" },
      { name: "SQS", icon: "sqs" },
      { name: "SNS", icon: "sns" },
      { name: "EFS", icon: "efs" },
      { name: "ECR", icon: "ecr" },
      { name: "ECS", icon: "ecs" },
      { name: "IAM", icon: "iam" },
      { name: "EC2", icon: "ec2" },
      { name: "SFTP", icon: "sftp" },
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
    title: "React Context API vs Zustand State Manager",
    excerpt:
      "This article will show a practical performance comparison between the usage of React Context API and the Zustand State Manager library by solving one scenario with the above-mentioned approaches.",
    url: "https://medium.com/@viraj.vimu/react-context-api-vs-zustand-state-manager-98ca9ac76904",
    date: "2022-02-16",
    readTime: "5 min read",
    platform: "Medium",
  },
  {
    title: "Nano Stores: Share state among browser tabs, React.js guide.",
    excerpt:
      "A comprehensive guide to writing maintainable TypeScript code with advanced patterns and practical examples.",
    url: "https://medium.com/@viraj.vimu/nano-stores-share-state-among-browser-tabs-react-js-guide-d7402dd24772",
    date: "2023-03-12",
    readTime: "6 min read",
    platform: "Medium",
  },
  {
    title: "Mother of all JavaScript Array methods. Array.reduce() — Part 1",
    excerpt:
      "Understanding when to use SSR, SSG, and ISR in Next.js applications for optimal performance and SEO.",
    url: "https://medium.com/@viraj.vimu/mother-of-all-javascript-array-methods-array-reduce-part-1-62b17b171afe",
    date: "2022-02-25",
    readTime: "5 min read",
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

export const linkedInRecommendations: LinkedInRecommendation[] = [
  {
    id: "1",
    name: "Scott Allison",
    role: "Product Designer • Strategic Systems-Thinker • Web & Mobile",
    company: "",
    content:
      "I worked with Vimukthi for several years building and deploying higher education products. As a product designer, it is essential to have an effective, efficient, and communicative engineering partners. Vimukthi is all of those things. The products I built with him were true collaborations between design and engineering. He is truly a joy to work with. I would highly recommend him to any engineering team seeking a seasoned leader.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5603AQG14YdquOnTsw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685717898424?e=1774483200&v=beta&t=sve1WGIu92u-6dHfiXgwROgcp-KOiZ3pqoS2DvAVl9I",
    linkedInUrl: "https://www.linkedin.com/in/scottgallison/",
    date: "August 9, 2024",
    relationship: "Scott worked with Viraj Vimukthi but on different teams",
    connectionDegree: "1st",
  },
  {
    id: "2",
    name: "Neelaka Rupun",
    role: "JS | React, Node + TS | NestJS | AWS | Serverless",
    company: "",
    content: `I have worked closely with Vimukthi and have consistently been impressed by his dedication, expertise, and leadership qualities. One of Vimukthi's standout qualities is his ability to rapidly learn and adapt to new technologies. In our time working together, he has mastered the serverless framework and GraphQL with remarkable speed, always seeking out the latest advancements to ensure our projects are on the cutting edge.

He takes complete ownership of work, demonstrating a level of commitment and responsibility that sets a high standard for the entire team. His proficiency in frontend development is unparalleled, and he consistently provides invaluable guidance to team members, helping to elevate the overall quality of our output.

In addition to his technical skills, he excels in planning and executing solutions and has a collaborative approach, actively engaging with team members to incorporate their ideas and perspectives. This inclusive style not only fosters a positive team environment but also leads to innovative and effective solutions.

Vimukthi is an exceptional lead whose combination of rapid learning, ownership, technical expertise, and collaborative spirit makes him an invaluable asset to any team. I highly recommend Vimukthi for any role that requires a strong, knowledgeable, and inspiring leader.`,
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5603AQGplIPE8mtZ4Q/profile-displayphoto-shrink_800_800/B56ZZidz.SHsAc-/0/1745408704970?e=1774483200&v=beta&t=zsf4gfKmuGDjAtP6qHg_N3LbV4j4gVm0JuqXRoCkyBo",
    linkedInUrl: "https://www.linkedin.com/in/neelaka-rupun",
    date: "July 31, 2024",
    relationship: "Neelaka worked with Viraj Vimukthi on the same team",
    connectionDegree: "1st",
  },
  {
    id: "3",
    name: "Yasoma Jayasinghe",
    role: "Senior IT Leader | Business Development Expert | Driving Strategic Formulation, Market Growth, and Cross-Functional Alignment to Deliver Sustainable Competitive Advantage",
    company: "",
    content: `I worked with Vimukthi on several projects, and he is one of the best people to have as a team member. I highly recommend him for his dedication and commitment, as he is a very methodical and practical person.
His ability to adjust to evolving organizational needs helped us during hard times, and we were able to come up with innovative solutions to address the changing needs of the time.
His ability to analyze and understand the subordinates helped to build a successful team during the team-forming stage and get the best out of them.
Any team would be lucky to have Vimukthi in their organization.
I wish him all the very best!!`,
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5603AQEWBboDDvnAcA/profile-displayphoto-scale_200_200/B56ZfV0itZH8Ac-/0/1751639011000?e=1774483200&v=beta&t=kRqY2Rhtqkb3GWRRQZpaWxOTWbls2e-AT6tZdQe2208",
    linkedInUrl: "https://www.linkedin.com/in/yasoma/",
    date: "February 2, 2024",
    relationship: "Yasoma managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
  {
    id: "4",
    name: "Jitesh Vaswani",
    role: "Principal Engineer Specializing in AI Integration",
    company: "",
    content: `Vimukhti is one of those that can plug and play in any project, with any technology, at any point in time! Wherever you have need, you can plug in Vimukhti and he WILL give you the deliverables! Sharp! Dedicated! Team Player! To top that, he has excellent communications skills! He lead 2 different apps for us at different times as well as worked in several projects! He has no hangups! Vimukhti is someone everybody listen to! He is that special engineer who doesn't need a title to show his abilities! Everybody knows! You would be lucky to find him a place in your company!`,
    profilePhoto: "https://media.licdn.com/dms/image/v2/C4E03AQFq9XCguga-KQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1604947593197?e=1774483200&v=beta&t=YvR1BHVBT76-V2KSYzrVDdeKLNPn_bIRcBn1qycJQx8",
    linkedInUrl: "https://www.linkedin.com/in/vaswanijitesh/",
    date: "December 23, 2023",
    relationship: "Jitesh managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
  {
    id: "5",
    name: "Uthpala Heenatigala",
    role: "Senior Frontend Developer",
    company: "",
    content:
      "Viraj is a self learner. Impressed by how quickly and by how much he improved his skills. Javascript master.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/D4E03AQGrfLLfGKMjpQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1706778786430?e=1774483200&v=beta&t=lQv4gJeLixSAPE0OSezsP68LJOcMy9_vhUzK4MMOiQ0",
    linkedInUrl: "https://www.linkedin.com/in/uthpala-heenatigala/",
    date: "November 4, 2023",
    relationship: "Uthpala was Viraj Vimukthi's mentor",
    connectionDegree: "1st",
  },
  {
    id: "6",
    name: "Lasitha Konara",
    role: "Software Architect | Azure Cloud Developer | MSc Eng (Moratuwa) | BSc Eng (Hons) (Moratuwa)- First Class | CIMA (UK) Passed Finalist",
    company: "",
    content:
      "Viraj is a very hard working individual who always tries to give his 200% towards his company. He always tries to think outside the box and come up with novel things when he develops code. He uses latest technologies/languages and try to keep up with the latest technologies which gives him and edge over the other developers. Not only he develops on his own, but also he helps other developers to gain knowledge on new areas/shares knowhow and to resolve complex problems. Viraj is a very reliable developer, who always delivers on time in good quality. I highly recommend him for any company who seeks a talented and dedicated employee.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5603AQEas87ZhOpdCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727246008290?e=1774483200&v=beta&t=m4kNI9o06jpGkGY95h7hY4n3iSv6yPEEv4Jscc-jBTE",
    linkedInUrl: "https://www.linkedin.com/in/lasithakonara/",
    date: "December 6, 2021",
    relationship: "Lasitha managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
  {
    id: "7",
    name: "Charith Dissanayaka",
    role: "Senior Software Engineer @ DianaHR | BSc in Computing and Information Systems",
    company: "",
    content:
      "Viraj Vimukthi is one of the best among all people I have ever met and is a loyal colleague, understands complex matters. Vimukthi is a strong and goal-oriented team player; with every problem, there was a solution. Highly recommended.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/C4E03AQH6srcJHJmrXg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517546067941?e=1774483200&v=beta&t=dzUPQcQhLecEjFM9tDk1ZeT_I0-42C_cHsX9eP3UP74",
    linkedInUrl: "https://www.linkedin.com/in/cdissanayaka/",
    date: "November 22, 2021",
    relationship: "Charith managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
  {
    id: "8",
    name: "Nishad de Silva",
    role: "Project Manager | PGD in IT | MBCS",
    company: "",
    content:
      "Vimukthi was a colleague of mine at Villvay Systems. He and I have worked on a product for a German client. In this project we worked together Vimukthi showed exemplary product development skills and technical skills which helped in the success of the MVP release of the product.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5635AQHmUABzl9HvIg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1716376549430?e=1773558000&v=beta&t=6tOkR9ai4aHSmIZv4jc6zsmhZkXyGWUOiFXXTqn7J3k",
    linkedInUrl: "https://www.linkedin.com/in/nishaddesilva/",
    date: "November 21, 2021",
    relationship: "Nishad worked with Viraj Vimukthi on the same team",
    connectionDegree: "1st",
  },
  {
    id: "9",
    name: "Rasun Pinnawala",
    role: "Senior QA Lead and Test Automation Engineer | Driving Successful Initiatives with Precision & Collaboration | Experienced Project Manager",
    company: "",
    content:
      "Vimukthi was a fantastic person to work with and is not only a multi-skilled and insightful colleague but also an inspiring strategist. I was working with him for nearly about 1 year and he is a very good person and a great employee with very strong problem-solving skills. He is an asset to any company. Highly Recommended.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/C4E03AQFn5VI_g5mhFQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1563180534884?e=1774483200&v=beta&t=PoqbcBTfsIcsZNGzgRuUhqdoWgQK83De-8OaUFCHdm8",
    linkedInUrl: "https://www.linkedin.com/in/rasunpinnawala/",
    date: "November 8, 2021",
    relationship: "Rasun managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
  {
    id: "10",
    name: "Ryan Perera",
    role: "Founder & Solution Architect | IT Manager at Racing and Sports | Expertise in Cloud Solutions (Azure & AWS) | Experienced Technical Consultant",
    company: "",
    content:
      "Viraj is a solid engineer with very sharp analytical skills. also he's a very fast learner and has ability to adapt very quickly. he's really productive and come up with good solution for any deadlock we faced. his knowledge, positive attitude makes him a complete dependable resource.",
    profilePhoto: "https://media.licdn.com/dms/image/v2/D5603AQHKhAA310d9_w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724864495573?e=1774483200&v=beta&t=rkC7ZtOT5zVUIm6DQ4nyL6iGPOcFVeCMEgI-z2abdvc",
    linkedInUrl: "https://www.linkedin.com/in/ryanmperera/",
    date: "August 25, 2018",
    relationship: "Ryan managed Viraj Vimukthi directly",
    connectionDegree: "1st",
  },
];
