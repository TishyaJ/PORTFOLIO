import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/TishyaJ",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/tishya-j/",
  },
  {
    name: "Portfolio",
    icon: RxTwitterLogo,
    link: "https://tishyaj.github.io/PORTFOLIO/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Saaransh MCA E-Consultation Platform",
    description:
      "🚀 AI-powered platform for analyzing stakeholder feedback on MCA bills using sentiment analysis and ML. Built with FastAPI, PostgreSQL, BERT, and Gemini AI. Features real-time feedback processing with OCR and analytics dashboard.",
    image: "/projects/project-1.png",
    link: "https://github.com/TishyaJ/Saaransh_MCA_EConsutation_Backend",
    demoLink: "https://saaransh-mca-e-consutation.vercel.app/",
  },
  {
    title: "RentalPro",
    description:
      "A modern, full-stack rental platform connecting item owners with renters through a seamless booking experience. Built with React, TypeScript, Express.js, PostgreSQL, and features multi-factor authentication, dynamic product listings, and flexible pricing models. Finalist at Odoo Hackathon 2025.",
    image: "/projects/project-2.png",
    link: "https://github.com/TishyaJ/Odoo_Hackathon_Round2",
  },
  {
    title: "SkillSwap Hub",
    description:
      "A minimalist and elegant platform where users can exchange skills and knowledge with each other. Community-driven platform for seamless and secure peer-to-peer skill swapping. Built with React, TypeScript, Express.js, and PostgreSQL. Selected for Finals at Odoo Hackathon 2025.",
    image: "/projects/project-3.jpeg",
    link: "https://github.com/TishyaJ/SkillSwap-Hub",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/TishyaJ",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/tishya-j/",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "tishyajha04@gmail.com",
        icon: null,
        link: "mailto:tishyajha04@gmail.com",
      },
      {
        name: "23CD3049@rgipt.ac.in",
        icon: null,
        link: "mailto:23CD3049@rgipt.ac.in",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Achievements",
    link: "#achievements",
  },
  {
    title: "Certifications",
    link: "#special-links",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/TishyaJ/space-portfolio",
};
