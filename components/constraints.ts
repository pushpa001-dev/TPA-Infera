
export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string; // you can use react-icons or lucide-react icons here
  }
  
  // services.ts
  export const services: Service[] = [
    {
      id: 1,
      title: "Landing Page Development",
      description:
        "We design and develop conversion-focused landing pages that are clean, fast, and highly engaging.",
      icon: "/services_icons/page.png",
    },
    {
      id: 2,
      title: "Responsive Web Design",
      description:
        "Your landing page will look perfect on every device — desktop, tablet, and mobile for a seamless experience.",
      icon: "/services_icons/responsive.png",
    },
    {
      id: 3,
      title: "Interactive Animations",
      description:
        "Bring your landing pages to life with smooth scroll effects, micro-interactions, and modern animations powered by GSAP & Framer Motion.",
      icon: "/services_icons/interactive.png",
    },
    {
      id: 4,
      title: "Performance Optimization",
      description:
        "We build ultra-fast, SEO-friendly landing pages that deliver exceptional performance and boost user engagement.",
      icon: "/services_icons/performance.png",
    },
  ];
  
export const projects = [

    {
        id:1,
        title:"Luxury Real Estate",
        description:"Premium, immersive property showcase with elegant design prompting private tour scheduling.",
        image:"/Projects/project1.png",
        link:"https://luxe-estate-rsvp-hub.vercel.app/"
    },
    {
        id:2,
        title:"Pushbrew Cafe",
        description:"Elegant serif headers, clean sans-serif body, warm palette, minimal icons, immersive imagery.",
        image:"/Projects/project2.png",
        link:"https://pushbrew-animations-studio.vercel.app/"
    },
    {
        id:3,
        title:"Jode Restaurent",
        description:"Jode Restaurant offers exquisite dining with elegant ambiance and unforgettable flavors.",
        image:"/Projects/project3.png",
        link:"https://jode-restaurent-ai-bot.vercel.app/"
    },
    {
        id:4,
        title:"ignite fitness",
        description:"Bold landing page promoting free 4-week workout plan with conversion-focused design.",
        image:"/Projects/project4.png",
        link:"https://ignite-fitness-freebie.vercel.app/"
    },
    {
        id:5,
        title:"instant showcase",
        description:"SaaS product signup page showcasing sleek, modern, and intuitive UI design.",
        image:"/Projects/project5.png",
        link:"https://instant-app-showcase-wizard.vercel.app/"
    },
    {
        id:6,
        title:"Travel service ui",
        description:"Travel service UI design featuring stunning animations and a captivating layout.",
        image:"/Projects/project5.png",
        link:"https://travel-service-ui.vercel.app/"
    },
];

export interface WorkflowStep {
  number: number;
  title: string;
  content1: string;
  content2: string;
  content3: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    number: 1,
    title: "Discovery & Planning",
    content1: "Understand your brand, goals, and audience",
    content2: "Define your project vision and objectives",
    content3: "Plan a clear roadmap before starting development",
  },
  {
    number: 2,
    title: "Wireframing & Design",
    content1: "Create clean, modern wireframes",
    content2: "Design responsive layouts matching your brand",
    content3: "Finalize UI before starting development",
  },
  {
    number: 3,
    title: "Development & Animations",
    content1: "Build fast, responsive landing pages using Next.js",
    content2: "Add smooth animations with GSAP & Framer Motion",
    content3: "Ensure SEO-friendly and optimized performance",
  },
  {
    number: 4,
    title: "Testing & Launch",
    content1: "Test across all devices and browsers",
    content2: "Optimize for speed, security, and responsiveness",
    content3: "Deploy to Vercel or Netlify with free setup",
  },
];

export interface PricingPlan {
  id: number;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Landing Page Development",
    description: "High-converting, responsive, and modern landing pages for your business.",
    features: [
      "Responsive & Mobile-friendly",
      "SEO Optimized",
      "Fast Loading Speed",
    ],
    buttonText: "Contact Us",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Clean and professional portfolio websites to showcase your work.",
    features: [
      "Unique & Personalized Design",
      "Cross-browser Compatible",
      "Easy-to-Manage Structure",
    ],
    buttonText: "Contact Us",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    description: "Interactive and conversion-focused SaaS landing pages.",
    features: [
      "Modern UI/UX Design",
      "Optimized for Conversions",
      "Scalable & Maintainable Code",
    ],
    buttonText: "Contact Us",
  },
];
export interface FooterLink {
  label: string;
  target: string;
}

export const footerLinks: FooterLink[] = [
  {
    label: "Home",
    target: "#home",
  },
  {
    label: "About",
    target: "#about",
  },
  {
    label: "Services",
    target: "#services",
  },
  {
    label: "Workflow",
    target: "#workflow",
  },
  {
    label: "Pricing",
    target: "#pricing",
  },
  {
    label: "Contact",
    target: "#contact",
  },
];
