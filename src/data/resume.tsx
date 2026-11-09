import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

export const DATA = {
  name: "Michael Azeez-Adekanmbi",
  initials: "MA",
  // NOTE: this is a Vercel domain, but Starfolio ships with the Cloudflare adapter
  // in astro.config.mjs. If you're deploying to Vercel, swap @astrojs/cloudflare
  // for @astrojs/vercel there - otherwise update this URL to wherever you deploy.
  url: "https://michaelazeez-adekanmbi.vercel.app",
  // location: "Alimosho, Lagos, Nigeria",
  // locationLink: "https://www.google.com/maps/place/alimosho+lagos",
  description:
    "Full-stack software engineer building production web applications and AI-agent tooling with Python (Django, FastAPI) and TypeScript/React.",
  summary:
    "I'm a full-stack software engineer who builds and ships production web applications and AI-agent tooling. My experience spans payments, third-party API integrations, MCP servers, and data-driven prediction services, backed by solid QA and API documentation practice. Most recently I built MCP tools for an AI marketplace, and before that I shipped payments and domain brokerage for a retail platform. I'm currently pursuing an M.Sc. in Software Engineering. " +
    "[Check out the projects below](/#projects) for the details, and [get in touch](/#contact) if you'd like to work together.",
  avatarUrl: "/Azz(1).jpeg", // TODO: add your headshot to /public/me.png
  ogImage: "/og_image.png", // TODO: add an OG image to /public/og_image.png
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5,
      enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on payments, third-party integrations, MCP servers for AI agents, and full-stack web apps. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7,
      enabled: false, // TODO: enable + fill in the `hackathons` array below if you have any to show
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons.",
    },
    photos: {
      order: 6,
      enabled: false, // TODO: enable once you have photos to add to /public/photos
      heading: "My Recent Travels",
    },
    contact: {
      order: 8,
      enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Open to fullstack and backend roles. Reach out on any of the channels below and I'll get back to you as soon as I can.",
    },
  },
  photos: [],
  // Icon-mapped where a Starfolio icon component exists; everything else renders
  // as a plain text chip (just omit the `icon` field).
  skills: [
    { name: "Python", icon: Python },
    { name: "Django" },
    { name: "FastAPI" },
    { name: "Flask" },
    { name: "MCP Servers" },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript" },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL" },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: Icons.github },
    { name: "Paystack" },
    { name: "Namecheap" },
    { name: "Google Calendar" },
    { name: "Cloudinary" },
    { name: "Render" },
    { name: "API Design" },
    { name: "QA Testing" },
    { name: "Technical Documentation" },
  ],

  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" }, // remove this line if you don't plan to use the blog
  ],
  contact: {
    email: "azeezadekanmbimichael@gmail.com",
    tel: "+234 803 884 7666",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mykel-Az",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/michael-azeez-adekanmbi-968b70267",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Michael_Azed",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:azeezadekanmbimichael@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Context Protocol (AI Marketplace)",
      href: "https://contextprotocol.org", // TODO: confirm the correct URL
      badges: ["Contract"],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://avatar.vercel.sh/contextprotocol?size=40", // TODO: swap for the real logo
      start: "March 2026",
      end: "May 2026",
      description:
        "Built a revenue intelligence MCP tool for SaaS companies that turns public signals (headcount growth, G2 reviews) into revenue-trajectory forecasts, with automated model retraining and a live prediction API. Also built an MCP server for commercial real estate investor discovery: searching by corridor and lot size returns owner contacts, entity profiles, and nationwide portfolios, a pay-per-query alternative to Reonomy's corridor-filter workflow.",
    },
    {
      company: "RetailBox",
      href: "https://retailbox.co",
      badges: ["Contract"],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=retailbox.co&sz=128", // TODO: swap for the real logo
      start: "December 2024",
      end: "December 2025",
      description:
        "Co-developed the POS App's Storefront in React, TypeScript, and Next.js, which creates an online store automatically from a merchant's inventory. Built the domain brokerage service with FastAPI and Namecheap, letting merchants find, buy, or transfer a domain, and integrated it into the storefront feature. Built the Paystack payment system that manages user subscriptions and integrated it into the main Django backend. Did QA and endpoint testing on the Engine API with Postman suites and wrote its API documentation (Swagger, Postman).",
    },
    {
      company: "Blue Diamond Solutions",
      href: "https://bluediamondsolutions.org",
      badges: ["Contract"],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=bluediamondsolutions.org&sz=128", // TODO: swap for the real logo
      start: "March 2025",
      end: "April 2025",
      description:
        "Designed and deployed a responsive business website using Django, Tailwind CSS, and Cloudinary. Built a secure staff dashboard, consultation forms, and Google Calendar integration, and managed the full development lifecycle from design to deployment on Render.",
    },
    {
      company: "Computer Warehouse Group (CWG)",
      href: "https://cwgplc.com", // TODO: confirm this is the right URL
      badges: ["Internship"],
      location: "Lagos, Nigeria",
      title: "Software Engineer Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=cwg-plc.com&sz=128", // TODO: swap for the real logo
      start: "April 2023",
      end: "June 2023",
      description:
        "Enhanced product functionality, participated in code reviews, and improved documentation.",
    },
  ],

  education: [
    {
      school: "Quantic School of Business and Technology",
      href: "https://quantic.edu",
      degree: "M.Sc. Software Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=quantic.edu&sz=128",
      start: "November 2025",
      end: undefined,
    },
    {
      school: "AltSchool Africa",
      href: "https://altschoolafrica.com", // TODO: confirm this is the right URL
      degree: "Certification - Backend Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=altschoolafrica.com&sz=128",
      start: "2024",
      end: "2024",
    },
    {
      school: "Anchor University, Ayobo, Lagos State",
      href: "https://aul.edu.ng",
      degree: "B.Sc. Microbiology",
      logoUrl: "https://www.google.com/s2/favicons?domain=aul.edu.ng&sz=128",
      start: "September 2019",
      end: "July 2022",
    },
    {
      school: "Utiva",
      href: "https://utiva.io", // TODO: confirm this is the right URL
      degree: "Certification - Data Science and Analytics",
      logoUrl: "https://www.google.com/s2/favicons?domain=utiva.io&sz=128",
      start: "2020",
      end: "2020",
    },
  ],

  projects: [
    // {
    //   title: "SaaS Revenue Intelligence MCP Tool",
    //   href: "", // TODO: add the repo or marketplace link
    //   dates: "March 2026 - May 2026",
    //   active: false,
    //   description:
    //     "An MCP tool for the Context Protocol marketplace that turns public signals for SaaS companies (headcount growth, G2 reviews) into revenue-trajectory forecasts. Includes automated model retraining and a live prediction API.",
    //   technologies: ["Python", "MCP", "ML Pipeline"], // TODO: confirm the stack
    //   links: [],
    //   image: "", // TODO: add screenshot to /public/images
    //   video: "",
    // },
    // {
    //   title: "CRE Investor Discovery MCP Server",
    //   href: "", // TODO: add the repo or marketplace link
    //   dates: "March 2026 - May 2026",
    //   active: false,
    //   description:
    //     "An MCP server for commercial real estate investor discovery. Searching by corridor and lot size returns owner contacts, entity profiles, and nationwide portfolios, as a pay-per-query alternative to Reonomy's corridor-filter workflow.",
    //   technologies: ["MCP", "Python"], // TODO: confirm the stack
    //   links: [],
    //   image: "", // TODO: add screenshot to /public/images
    //   video: "",
    // },
    {
      title: "RetailBox — POS App",
      href: "https://app.retailbox.co",
      dates: "December 2024 - December 2025",
      active: false,
      description:
        "A point-of-sale platform whose storefront feature automatically creates an online store from a merchant's POS inventory. Co-developed the Storefront in React, TypeScript, and Next.js. Built the domain brokerage separately with FastAPI and Namecheap (find, buy, or transfer a domain) and integrated it into the storefront so a domain can be acquired and activated for each store. Built the Paystack payment system that manages user subscriptions in the POS app.",
      technologies: ["React", "TypeScript", "Next.js", "FastAPI", "Paystack", "Namecheap API"],
      links: [
        {
          type: "Live app",
          href: "https://app.retailbox.co",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "https://retailbox.co",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/retailbox_app.png", // TODO: add screenshot to /public/images
      video: "",
    },
    {
      title: "RetailBox — Engine API",
      href: "https://postman.retailbox.co/",
      dates: "December 2024 - December 2025",
      active: false,
      description:
        "The Django backend behind the RetailBox POS ecosystem. Responsible for QA, endpoint testing with Postman suites, and the API documentation (Swagger and the public Postman collection) used for developer integration. The payment endpoints are not publicly exposed.",
      technologies: ["Django", "Postman", "Swagger / OpenAPI"],
      links: [
        {
          type: "Postman docs",
          href: "https://postman.retailbox.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/retailbox_engine.png", // TODO: add screenshot to /public/images
      video: "",
    },
    {
      title: "Cafe Fausse",
      href: "https://cafefausseplace.vercel.app",
      dates: "2026", // TODO: replace with the actual timeframe
      active: false,
      description:
        "A full-stack restaurant reservation platform with real-time table availability, customer validation, and a password-protected staff portal for managing bookings. Built end-to-end: the React frontend, Flask API, and PostgreSQL schema.",
      technologies: ["React", "Flask", "PostgreSQL"],
      links: [
        {
          type: "Live site",
          href: "https://cafefausseplace.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Staff portal",
          href: "https://cafefausseplace.vercel.app/admin",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/cafe_fausse.png", // TODO: add screenshot to /public/images
      video: "",
    },
    {
      title: "BlueDiamond Solutions",
      href: "https://bluediamondsolutions.org/",
      dates: "March 2025 - April 2025",
      active: false,
      description:
        "A responsive business website with service pages, project showcases, and consultation booking, with a secure staff dashboard and Google Calendar integration. Built with Django, Tailwind CSS, and Cloudinary, and deployed on Render.",
      technologies: ["Django", "Python", "Tailwind CSS", "Cloudinary"],
      links: [
        {
          type: "Live site",
          href: "https://bluediamondsolutions.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/bds.png", // TODO: add screenshot to /public/images
      video: "",
    },
  ],

  // TODO: fill in if/when you have hackathons to show, or leave empty and keep
  // sections.hackathons.enabled = false above
  hackathons: [],
} as const;