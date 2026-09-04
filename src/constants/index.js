import {
    car,
    contact,
    css,
    express,
    git,
    github,
    githubactions,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    postman,
    python,
    react,
    mysql,
    cplusplus,
    docker,
    jest,
    shopping,
    payment,
    university,
    typescript,
    coreNetwork,
    rioTinto,
    technova,
    codeCrafters,
    kalaMandir,
} from "../assets/icons";

export const skills = [
    // Programming Languages
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Programming Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Programming Language",
    },
    
    {
        imageUrl: cplusplus,
        name: "C/C++",
        type: "Programming Language",
    },

    // Frontend
    {
        imageUrl: html,
        name: "HTML5",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS3",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },

    // Backend
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend",
    },

    // Databases
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },

    // Cloud & DevOps
    {
        imageUrl: docker,
        name: "Docker",
        type: "Cloud & DevOps",
    },
    {
        imageUrl: githubactions,
        name: "GitHub Actions",
        type: "Cloud & DevOps",
    },

    // Tools & Testing
    {
        imageUrl: git,
        name: "Git",
        type: "Tools",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Tools",
    },
    {
        imageUrl: jest,
        name: "Jest",
        type: "Testing",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "API Testing",
    },
];

export const experiences = [
  {
    title: "Desktop Support Technician",
    company_name: "Core Network Solutions",
    icon: coreNetwork,
    iconBg: "#ffffff",
    date: "Nov 2025 - June 2026",
    points: [
      "Provided system, network, and application troubleshooting for end users.",
      "Supported Microsoft 365 environments, VPN connectivity, and Active Directory.",
      "Diagnosed and resolved hardware, software, and connectivity issues to maintain reliable IT operations.",
      "Assisted users with technical issues while maintaining clear documentation and efficient problem resolution.",
    ],
  },

  {
    title: "Desktop Support Technician - Contract",
    company_name: "Rio Tinto",
    icon: rioTinto,
    iconBg: "#ffffff",
    date: "Nov 2024 - Oct 2025",
    points: [
      "Provided Level 1 and Level 2 technical support for hardware, software, and user access issues.",
      "Troubleshot VPN, LAN, and Wi-Fi connectivity problems.",
      "Managed Active Directory tasks and supported system imaging and deployment.",
      "Assisted with IT asset management and maintained technical documentation.",
    ],
  },

  {
    title: "Technical Analyst",
    company_name: "Tech Nova Solutions",
    icon: technova,
    iconBg: "#ffffff",
    date: "Sep 2023 - Jun 2024",
    points: [
      "Troubleshot backend applications and services built with Node.js.",
      "Performed database queries and investigated application and data-related issues.",
      "Worked with AWS services including EC2, S3, and RDS.",
      "Created Python and Bash automation scripts and supported monitoring dashboards and technical documentation.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Code Crafters LLC",
    icon: codeCrafters,
    iconBg: "#ffffff",
    date: "Aug 2022 - Apr 2023",
    points: [
      "Developed web applications using React.js, Next.js, and Express.js.",
      "Built and integrated RESTful APIs for full-stack web applications.",
      "Implemented JWT-based authentication and backend functionality.",
      "Used Docker, GitHub Actions, and CI/CD pipelines to support application development and deployment.",
    ],
  },

  {
    title: "System Administrator",
    company_name: "Kala Mandir Solutions",
    icon: kalaMandir,
    iconBg: "#ffffff",
    date: "Jun 2021 - Jul 2022",
    points: [
      "Managed IT infrastructure, servers, and network environments.",
      "Administered Active Directory, VPN access, and network security controls.",
      "Performed system backups, access control, and patch management.",
      "Provided Tier 2 and Tier 3 technical support and resolved infrastructure-related issues.",
    ],
  },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/cgarg547',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/cgarg3',
    }
];

export const projects = [
    {
        iconUrl: shopping,
        theme: "btn-back-blue",
        name: "Garg Electronics",
        description:
            "A full-stack MERN e-commerce application for browsing products, managing shopping carts, and processing orders, with authentication, RESTful APIs, and online deployment.",
        link: "https://github.com/Cgarg547/Electronics-react",
    },
    {
        iconUrl: car,
        theme: "btn-back-green",
        name: "Car Rental System",
        description:
            "A full-stack car rental application designed to manage vehicles, customers, bookings, and rental operations through a user-friendly interface.",
        link: "https://github.com/Cgarg547/Car-Rental-System",
    },
    {
        iconUrl: payment,
        theme: "btn-back-yellow",
        name: "Supermarket Billing System",
        description:
            "A C++ application for managing supermarket billing and retail transactions using object-oriented programming to process purchases and generate customer invoices.",
        link: "https://github.com/Cgarg547/Supermarket-Billing",
    },
    {
        iconUrl: university,
        theme: "btn-back-red",
        name: "University Management System",
        description:
            "A Java and MySQL application for managing university information, including student records, courses, and academic data.",
        link: "https://github.com/Cgarg547/Java-Project/tree/main/University-Management-System",
    },
];