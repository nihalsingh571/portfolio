import type {
  TNavLink,
  TService,
  TTechnology,
  TCertification,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cal,
  shop,
  ecom,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: docker,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const certifications: TCertification[] = [
  {
    title: "Data Structure and Algorithms - Self-Paced (Java)",
    provider: "GeeksforGeeks",
    date: "September 2024",
    points: [
      "Mastered core data structures like arrays, linked lists, trees, graphs, stacks, and queues.",
      "Implemented common algorithms such as sorting, searching, recursion, and hashing in Java.",
      "Solved industry-standard problems and participated in coding contests to build problem-solving skills.",
    ],
  },
  {
    title: "Cloud Computing",
    provider: "NPTEL",
    date: "November 2024",
    points: [
      "Understood fundamentals of cloud models: IaaS, PaaS, SaaS, and deployment types.",
      "Explored virtualization, distributed storage, and cloud security practices.",
      "Gained hands-on exposure to platforms like AWS and GCP through assignments and case studies.",
    ],
  },
  {
    title: "Java Programming - The Complete Basic to Advance Java",
    provider: "GeeksforGeeks",
    date: "March 2025",
    points: [
      "Built strong foundations in object-oriented programming concepts and Java syntax.",
      "Worked on exception handling, multithreading, file I/O, and JDBC connectivity.",
      "Developed real-world Java applications using core and advanced Java features.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects: TProject[] = [
  {
    name: "E-commerce Application",
    description:
      "Developed a fully functional e-commerce platform with customer login and secure checkout.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "jenkins",
        color: "yellow-text-gradient",
      },
    ],
    image: ecom, // Replace with the relevant image
    sourceCodeLink: "https://github.com/nihalsingh571/E-comm-MERN",
  },
  {
    name: "Fitness Tracker Website",
    description:
      "Designed a website to track calories and personalized workout plans.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "red-text-gradient",
      },
    ],
    image: cal, // Replace with the relevant image
    sourceCodeLink: "https://github.com/nihalsingh571/fitness-with-diet-",
  },
  {
    name: "Shopping E-commerce Web",
    description:
      "Developed a fully functional e-commerce platform with product listings and user features.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "yellow-text-gradient",
      },
    ],
    image: shop, // Replace with the relevant image
    sourceCodeLink: "https://github.com/nihalsingh571/E-comm-MERN",
  },
  {
    name: "Sudoku Solver",
    description:
      "Built a Sudoku solving application and implemented Jenkins and Docker for an optimized CI/CD workflow.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "jenkins",
        color: "yellow-text-gradient",
      },
    ],
    image: web, // Replace with the relevant image
    sourceCodeLink: "https://github.com/nihalsingh571/sudokusolver",
  },
];


// Exporting constants
export { services, technologies, certifications, testimonials, projects };
