export interface PortfolioItem {
  id: number;
  title: string;
  category: 'App' | 'Web' | 'Landing Page' | 'E-Commerce';
  imageUrl: string;
  description: string;
  tools: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "FitTrack Mobile App",
    category: "App",
    imageUrl: `${import.meta.env.BASE_URL}images/thumbnail.png`,
    description: "A sleek fitness tracking app that helps users monitor workouts, set goals, and track progress with real-time stats and intuitive UI.",
    tools: ["Figma", "Adobe XD", "Photoshop"]
  },
  {
    id: 2,
    title: "LRN",
    category: "Landing Page",
    imageUrl: `${import.meta.env.BASE_URL}images/fiverr thumbnail.jpg`,
    description: "A modern, responsive landing page designed to promote an online learning platform with clear CTAs, engaging visuals, and user-friendly layout",
    tools: ["Figma", "Illustrator", "Miro"]
  },
  {
    id: 3,
    title: "Eventsync",
    category: "Web",
    imageUrl: `${import.meta.env.BASE_URL}images/mockuper.png`,
    description: "A comprehensive event management dashboard designed for planning, tracking, and organizing events with real-time updates, analytics, and user collaboration tools.",
    tools: ["Sketch", "Adobe xd", "Principle"]
  },
   {
    id: 5,
    title: "Artdach",
    category: "Web",
    imageUrl: `${import.meta.env.BASE_URL}images/Artdach.png`,
    description: "A comprehensive event management dashboard designed for planning, tracking, and organizing events with real-time updates, analytics, and user collaboration tools.",
    tools: ["Sketch", "Adobe xd", "Principle"]
  },
    {
    id: 6,
    title: "Beautica",
    category: "Web",
    imageUrl: `${import.meta.env.BASE_URL}images/Car detail.png`,
    description: "A comprehensive event management dashboard designed for planning, tracking, and organizing events with real-time updates, analytics, and user collaboration tools.",
    tools: ["Sketch", "Adobe xd", "Principle"]
  },
   {
    id: 7,
    title: "toolkit",
    category: "Web",
    imageUrl: `${import.meta.env.BASE_URL}images/toolkit.png`,
    description: "A comprehensive event management dashboard designed for planning, tracking, and organizing events with real-time updates, analytics, and user collaboration tools.",
    tools: ["Sketch", "Adobe xd", "Principle"]
  },
  {
    id: 4,
    title: "Construction",
    category: "Landing Page",
    imageUrl: `${import.meta.env.BASE_URL}images/fiverr thumbnail 2.jpg`,
    description: "A professional, responsive landing page for a construction company, showcasing services, past projects, and a strong call-to-action to boost client inquiries.",
    tools: ["Figma", "Adobe xd", "Photoshop"]
  },
  {
    id: 5,
    title: "Luxury watch selling site (Ongoing)",
    category: "Web",
    imageUrl: `${import.meta.env.BASE_URL}images/Home.png`,
    description: "An elegant and modern eCommerce landing page for a luxury watch brand, featuring high-end visuals, smooth navigation, and a premium shopping experience.",
    tools: ["Figma", "Protopie", "Illustrator"]
  },
  {
    id: 6,
    title: "Food Delivery App (My 1st mobile app)",
    category: "App",
    imageUrl: `${import.meta.env.BASE_URL}images/new project.png`,
    description: "Food delivery mobile app ",
    tools: ["Adobe xd", "Illustrator", "After Effects"]
  },
  {
    id: 7,
    title: "Backery",
    category: "Landing Page",
    imageUrl: `${import.meta.env.BASE_URL}images/Backery.jpg`,
    description: "A professional, responsive landing page for a construction company, showcasing services, past projects, and a strong call-to-action to boost client inquiries.",
    tools: ["Figma", "Adobe xd", "Photoshop"]
  },
  {
    id: 8,
    title: "Landing page for a Mobile App",
    category: "Landing Page",
    imageUrl: `${import.meta.env.BASE_URL}images/for App.jpg`,
    description: "A modern, conversion-focused landing page built to promote a mobile app, featuring app previews, key features, user reviews, and download links .",
    tools: ["Figma", "Adobe xd", "Photoshop"]
  },
  {
    id: 9,
    title: "demo page for digital artist",
    category: "Landing Page",
    imageUrl: `${import.meta.env.BASE_URL}images/Digital Artist.jpg`,
    description: "A visually captivating landing page for a digital artist, designed to showcase artwork, share the creative journey, and attract commissions through a sleek, minimal layout.",
    tools: ["Figma", "Adobe xd", "Photoshop"]
  }
];

export const categories = ['All', 'App', 'Web', 'Landing Page', 'E-Commerce'] as const;