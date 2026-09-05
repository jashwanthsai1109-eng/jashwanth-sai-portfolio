// Edit this file to update portfolio content.

export const profile = {
  name: "Jashwanth Sai",
  title: "Aspiring Software Engineer & Full-Stack Developer",
  location: "Bengaluru, India",
  education: "B.Tech — Yenepoya NIAT",
  graduating: "2030",
  github: "https://github.com/jashwanthsai1109-eng",
  email: "jashwanthsai1109@gmail.com", // replace with preferred contact email
};

export type Project = {
  number: string;
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Project One",
    description:
      "Placeholder for a featured project. Replace this with a short summary of the problem, your approach, and the outcome.",
    tech: ["HTML", "CSS", "Python"],
    repo: profile.github,
  },
  {
    number: "02",
    title: "Project Two",
    description:
      "Placeholder for a second featured project. Describe the core feature set and what you learned while building it.",
    tech: ["React", "Tailwind CSS"],
    repo: profile.github,
  },
  {
    number: "03",
    title: "Project Three",
    description:
      "Placeholder for a third featured project. Add details on architecture, data handling, or the interface you designed.",
    tech: ["Supabase", "PostgreSQL"],
    repo: profile.github,
  },
];

export const coreSkills = [
  { name: "HTML", note: "Semantic structure and accessible markup" },
  { name: "CSS", note: "Responsive, mobile-first layouts" },
  { name: "Python", note: "Scripting, logic, and problem solving" },
];

export const exploringSkills = ["React", "Tailwind CSS", "Supabase", "PostgreSQL"];

export const interests = [
  { title: "Full-Stack Web Development", note: "End-to-end product thinking, from interface to data." },
  { title: "AI-Assisted Development", note: "Using modern tooling to build and iterate faster." },
  { title: "Prompt Engineering", note: "Designing precise prompts on platforms like Lovable.dev." },
  { title: "Real-Time Tracking Solutions", note: "Live location systems, including student transport." },
  { title: "Mobile-First Development", note: "Interfaces designed for small screens first." },
  { title: "Custom Image Editing", note: "Practical tooling for visual content workflows." },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
