import {Users, Award, TrendingUp, Target,Star, BarChart3, Globe} from 'lucide-react'


export const Navlinks = ["About", "Why Attend", "Topics", "Who Attends", "Sponsor"]


export const topics = [
    "Corporate Culture Focus: Top tips to successfully spearhead Customer Experience Transformation internally",
    "Brand communities driving Loyalty, Retention & Advocacy",
    "Delivering the 'Unattainable' CX dream and transformation towards Hyper Personalization",
    "Unveiling how exceptional brands retain their customers and build loyalty",
    "Improve Customer Experience and Operational Excellence to make customers loyal",
    "Using Data, CRM, and Marketing Automation to drive friction-free experiences",
    "Multichannel Focus: Strategies to deliver world-class customer experience",
    "Driving Customer Loyalty and Top-line revenue through Gamification",
    "Linking Voice of the Employee and Voice of the Customer",
    "Using social media to improve brand perception and shape Customer Experience",
    "Advances in Customer Analytics and Segmentation",
    "Effective complaint handling as foundation of Customer Retention Strategy"
  ];

export const attendees = [
    { title: "CXOs, VPs, Directors", icon: Award },
    { title: "Chief Marketing Officers", icon: TrendingUp },
    { title: "Heads of Customer Experience & UX", icon: Users },
    { title: "Heads of Customer Insights & Analytics", icon: BarChart3 },
    { title: "Heads of Digital Transformation", icon: Globe },
    { title: "Heads of Customer Loyalty & Brand Loyalty", icon: Star },
  ];

export  const industries = [
  "BFSI", "RETAIL & E-COMMERCE", "TELECOMMUNICATION", 
  "HOSPITALITY", "TRAVEL & TOURISM", "AVIATION", 
  "FMCG & CPG", "OTHERS"
];


export  const benefits = [
    {
      icon: Users,
      title: "Network with Industry Leaders",
      description: "Connect with senior professionals across all industries and verticals"
    },
    {
      icon: Target,
      title: "Real-Time Case Studies",
      description: "Deep dive into insights derived from practical implementations"
    },
    {
      icon: TrendingUp,
      title: "Latest CX Strategies",
      description: "Explore emerging technologies and best practices in CX excellence"
    },
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Gain knowledge from top industry leaders and experts worldwide"
    }
  ];