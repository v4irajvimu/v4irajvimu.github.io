export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface DateFrom {
  month: number;
  year: number;
}

export interface DateTo {
  month: number;
  year: number;
  isPresent?: boolean;
}

export interface ExperienceRole {
  title: string;
  from: DateFrom;
  to: DateTo;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Experience {
  company: string;
  location: string;
  url: string;
  logo: string;
  from: DateFrom;
  to: DateTo;
  roles: ExperienceRole[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  readTime: string;
  platform: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string[];
  bio: string;
  email: string;
  location: string;
  education: string;
  university: string;
  resumeUrl: string;
  avatarUrl: string;
  learning: string[];
}
