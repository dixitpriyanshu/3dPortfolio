const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 6, suffix: "+", label: "Production Projects Shipped" },
  { value: 10, suffix: "+", label: "Side Projects & Experiments" },
  { value: 95, suffix: "%", label: "Code Quality & Test Coverage" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality-First Mindset",
    desc: "I take pride in delivering clean, efficient, and scalable code—without cutting corners.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Consistent Communication",
    desc: "I keep stakeholders in the loop at every stage, ensuring alignment and transparency.",
  },
  {
    imgPath: "/images/time.png",
    title: "Dependable Delivery",
    desc: "Deadlines matter. I consistently ship on time without compromising quality.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React/ React Native Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Management",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Priyanshu consistently brought a sharp eye for design and clean code to the team. His work on multiple production-ready apps has significantly improved user engagement and overall app performance.",
    imgPath: "/images/suggaa-name.png",
    logoPath: "/images/suggaa.png",
    title: "Software Developer - React Native",
    date: "May 2023 - Present",
    responsibilities: [
      "Led development of 3+ production-ready mobile apps using React Native, TypeScript, and Expo.",
      "Reduced API latency by 30% by integrating GraphQL and launched apps on Play Store & App Store via EAS.",
      "Improved engagement by 35% with 20+ accessible, responsive UI screens and native features like PiP and Floating Widgets.",
      "Managed app state using Jotai, reducing context-related bugs by 50% in apps used by 10,000+ users.",
    ],
  },
  {
    review:
      "Priyanshu brought a solid understanding of hardware-software integration. His work on Bluetooth-enabled applications helped us deliver reliable IoT experiences with significant performance gains.",
    imgPath: "/images/sorian-gadgets.png",
    logoPath: "/images/sg.png",
    title: "Project Intern",
    date: "February 2023 - April 2023",
    responsibilities: [
      "Built a real-time Bluetooth-enabled Android app in Java for smart device communication with Arduino.",
      "Reduced data transfer delays by 60% and achieved 95%+ reliability through custom protocols.",
      "Optimized Bluetooth handling and responsiveness across multiple test scenarios.",
    ],
  },
  // {
  //   review:
  //     "Priyanshu’s projects like Pourfect and Whispurr showcase not just technical proficiency, but a deep focus on user experience, performance, and scalability. His apps reflect real-world impact and thoughtful engineering.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "Independent Developer",
  //   date: "March 2025 - April 2025",
  //   responsibilities: [
  //     "Built and published Pourfect: a cross-platform cocktail discovery app with offline support and a scalable Supabase backend.",
  //     "Developed Whispurr: a location-based anonymous messaging app with geo-querying and 100% offline reliability.",
  //     "Used Zustand and react-native-mmkv for persistent state management across both apps.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/priyaaansshhuu?igsh=MTQxcDRlMms3bjA0Ng%3D%3D&utm_source=qr",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/dixitpriyanshu",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://x.com/Priyans90696979",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/priyanshudixit/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
