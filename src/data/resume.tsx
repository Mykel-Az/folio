import { Icons } from "@/components/icons";
import { House, Icon, Library } from "lucide-react";
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
    "Software engineer building commercial web platforms, internal business systems, and API-driven products using Python, JavaScript, Django, React, and TypeScript.",
  summary:
    "I'm a software engineer working across backend architecture, frontend delivery, third-party integrations, QA, and deployment workflows, with a track record of shipping scalable features for retail, payments, operations, and business management systems. I'm comfortable owning a project end-to-end - from database schema and API design through to the React interfaces people actually use - with a focus on reliability, maintainability, and business impact, and I'm currently pursuing an M.Sc. in Software Engineering to sharpen that further. " +
    // "Most recently, I architected and shipped [PROJECT NAME] solo, from schema to deployment. " +
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
      text: "I've worked on a variety of full-stack products and backend systems, from POS platforms to real-time customisation tools. Here are a few of my favorites.",
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
    { name: "Django" }, // Pick your 1 main Python backend framework
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: Icons.github },
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
      company: "RetailBox",
      href: "https://retailbox.co",
      badges: ["Contract"],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=retailbox.co&sz=128", // TODO: swap for the real logo
      start: "December 2024",
      end: "April 2026",
      description:
        "Co-developed a modular retail POS and storefront platform using React, TypeScript, Next.js, and Django for multi-store business operations. Built and integrated features across inventory workflows, sales operations, storefront management, and API-connected business modules, including barcode-scanning and product lookup workflows tied to backend APIs. Contributed to payment and business process integrations supporting commercial rollout readiness, led QA efforts across frontend and backend flows to reduce release issues, and improved developer workflow through API documentation using Swagger and Postman.",
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
        "Independently designed, built, and deployed a business IT solutions web application using Django and Tailwind CSS, with media management via Cloudinary and hosting on Render. Built a secure staff dashboard for managing contact messages and updating the project portfolio, and integrated Google Calendar for consultation scheduling. Led the full development lifecycle - from design and backend logic through to deployment and performance optimisation.",
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
        "Enhanced core product functionality, resolved reported issues, and participated in team code reviews and technical documentation. Took part in debugging sessions and technical documentation processes within an engineering team.",
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
      start: "2023",
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
    {
      title: "RetailBox — POS App",
      href: "https://app.retailbox.co",
      dates: "December 2024 - Present",
      active: true,
      description:
        "All-in-one point-of-sale and business management platform for retail businesses, consolidating inventory, sales, staff, and customer management into a single fast, reliable product. Built the React + TypeScript frontend and the Python backend, including the multi-tenant PostgreSQL schema and Docker-based deployment setup.",
      technologies: ["React", "Python", "TypeScript", "Docker", "PostgreSQL"],
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
      dates: "December 2024 - Present",
      active: true,
      description:
        "The Django REST Framework backend powering the entire RetailBox ecosystem — POS app, storefront, and marketing site. Designed the data models, authentication and permissions layer, and auto-generated Swagger docs via drf-spectacular, and maintained the public Postman collection for developer integration.",
      technologies: ["Django", "PostgreSQL", "Postman", "Swagger / OpenAPI"],
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
        // {
        //   type: "github",
        //   href: "https://cafefausseplace.vercel.app/admin",
        //   icon: <Icons.github className="size-3" />,
        // },
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
        "A professional corporate website with service pages, project showcases, and consultation booking, with CMS-style content management through Django's built-in admin. Handled architecture, Tailwind-styled templates, Cloudinary media integration, and booking/contact forms as sole developer.",
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
    // {
    //   title: "Merch Visualizer",
    //   href: "https://bluediamondsolutions.org/services/graphics-design/visualizer/",
    //   dates: "2023", // TODO: replace with the actual timeframe
    //   active: false,
    //   description:
    //     "A real-time 2D product customisation tool that lets clients preview branded merchandise - colours, text, and logo placement - directly in the browser, cutting back-and-forth on design requests. Built as a standalone React + TypeScript app rendering entirely on an HTML Canvas, embedded in the BlueDiamond site.",
    //   technologies: ["React", "TypeScript", "Tailwind CSS"],
    //   links: [
    //     {
    //       type: "Live demo",
    //       href: "https://bluediamondsolutions.org/services/graphics-design/visualizer/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/images/merch-visualizer.png", // TODO: add screenshot to /public/images
    //   video: "",
    // },
  ],

  // TODO: fill in if/when you have hackathons to show, or leave empty and keep
  // sections.hackathons.enabled = false above
  hackathons: [],
} as const;