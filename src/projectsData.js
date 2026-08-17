const projectsData = [
  {
    id: 1,
    title: "UnityMart E-Commerce Platform",
    status: "In Progress",
    description: "A full-stack e-commerce marketplace featuring user authentication, product management dashboards, and a robust cart system.",
    technologies: ["React.js", "Node.js", "MySQL", "Bootstrap", "JavaScript"],
    githubLink: "https://github.com/RainbowCodex/RainbowCodexPortfolio.git", 
    liveLink: "https://rainbow-codex-portfolio.vercel.app"   
  },
  {
    id: 2,
    title: "PizzaHub",
    status: "Completed",
    description: "An interactive web application for ordering pizzas online, complete with a responsive dynamic frontend menu and database integration.",
    technologies: ["React.js", "MySQL", "Bootstrap", "JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/RainbowCodex/RainbowCodexPortfolio.git",
    liveLink: "https://rainbow-codex-portfolio.vercel.app"
  },
  {
    id: 3,
    title: "Online TaxiStand Management System",
    status: "Completed",
    description: "A management portal built to handle taxi bookings, driver tracking, and admin controls efficiently.",
    technologies: ["PHP", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
    githubLink: "https://github.com/RainbowCodex/taxistand-management-system", // Your public repo URL
    liveLink: "#", 
    // Add this new property below to store your 26 image paths automatically
    images: Array.from({ length: 26 }, (_, i) => `/taxistand/taxistand-view${i + 1}.PNG`)
  },
  {
    id: 4,
    title: "Flask App for VU Sports Society",
    status: "Completed",
    description: "A specialized community portal for managing sports activities, member registries, and upcoming events schedules.",
    technologies: ["Python", "Flask", "HTML5", "CSS3"],
    githubLink: "https://github.com/RainbowCodex/RainbowCodexPortfolio.git",
    liveLink: "https://rainbow-codex-portfolio.vercel.app"
  },
  {
    id: 5,
    title: "Online Wallpaper & Ceiling Decoration Booking",
    status: "Completed",
    description: "An interior decoration booking platform featuring custom design catalogs, material cost estimation, and appointment scheduling.",
    technologies: ["PHP", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
    
    // 🔗 Repository URL:
    githubLink: "https://github.com/RainbowCodex/wallpaper-ceiling-decoration-booking",
    liveLink: "#",
    
    // 🖼️ Add your screenshot paths:
    images: [
      "/wallpaper/wallpaper-view1.PNG",
      "/wallpaper/wallpaper-view2.PNG",
      "/wallpaper/wallpaper-view3.PNG",
    ]
  },
  {
    id: 6,
    title: "Online Medical Store",
    status: "Completed",
    description: "A comprehensive healthcare portal featuring prescription tracking, medicine inventory, role-based dashboards, and appointment booking.",
    technologies: ["PHP", "React.js", "MySQL", "Bootstrap", "JavaScript"],
    
    // 🔗 Your new repository URL
    githubLink: "https://github.com/RainbowCodex/online-medical-store",
    liveLink: "#",
    
    // 🖼️ Add your screenshot paths (make sure file names & extensions match exactly)
    images: [
      "/medicalstore/medicalstore-view1.PNG",
      "/medicalstore/medicalstore-view2.PNG",
      "/medicalstore/medicalstore-view3.PNG",
      "/medicalstore/medicalstore-view4.PNG",
      "/medicalstore/medicalstore-view5.PNG",
      "/medicalstore/medicalstore-view6.PNG"
    ]
  },
  {
    id: 7,
    title: "Online BookStore Website",
    status: "Completed",
    description: "A digital book repository featuring category catalog browsing, dynamic search features, and shopping basket mechanics.",
    technologies: ["PHP", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
    githubLink: "https://github.com/RainbowCodex/online-bookstore-website",
    liveLink: "#",
    
    // 🖼️ Add paths pointing directly to your images in public/bookstore:
    images: [
      "/bookstore/bookstore-view1.jpg",
      "/bookstore/bookstore-view2.jpg"
    ]
  },
];

export default projectsData;