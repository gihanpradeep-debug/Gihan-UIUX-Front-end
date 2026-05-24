import { 
  Palette, 
  Smartphone, 
  Figma, 
  HardDriveDownload, 
  LayoutGrid,
  BookOpenCheck
} from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: typeof Palette;
  color: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces with a focus on user experience and accessibility.",
    icon: Palette,
    color: "text-primary"
  },
  {
    id: 2,
    title: "Mobile App Design",
    description: "Designing seamless mobile experiences for iOS and Android platforms.",
    icon: Smartphone,
    color: "text-secondary"
  },
  {
    id: 3,
    title: "Wireframing & Prototyping",
    description: "Building interactive prototypes and wireframes to test and refine concepts.",
    icon: Figma,
    color: "text-accent"
  },
  {
    id: 4,
    title: "Web Interface Design",
    description: "Crafting responsive web interfaces that work seamlessly across all devices.",
    icon: LayoutGrid,
    color: "text-primary"
  },
  {
    id: 5,
    title: "Design Systems",
    description: "Creating scalable design systems with reusable components and documentation.",
    icon: HardDriveDownload,
    color: "text-secondary"
  },
  {
    id: 6,
    title: "UX Research",
    description: "Conducting user research to inform data-driven design decisions.",
    icon: BookOpenCheck,
    color: "text-accent"
  }
];