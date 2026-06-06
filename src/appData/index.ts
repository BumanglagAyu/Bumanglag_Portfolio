// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'GovNet Ticketing System',
    shortDescription:
      'A full-stack web-based ticketing system developed for government agencies to manage, track, and resolve IT-related issues. The system includes ticket submission, status tracking, authentication for clients and administrators, ticket history, search and filtering, admin dashboards, file attachment handling, and structured MySQL data management.',
    cover:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    livePreview: '',
    githubLink: 'https://github.com/BumanglagAyu/TicketingSystem.git',
    type: 'Full-Stack Web Application',
    siteAge: 'Internship Project',
  },
  {
    priority: 2,
    title: 'ChatBot Navi',
    shortDescription:
      'A web-based chatbot application that helps students answer school-related questions using keyword and FAQ-based responses. Built with backend components, chatbot logic, server configuration, MySQL database structure, cookies, sessions, and dynamic web pages.',
    cover:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop',
    livePreview: '',
    githubLink: 'https://github.com/BumanglagAyu/Websters-Nabi--CS312.git',
    type: 'AI / Chatbot Web Application',
    siteAge: 'Academic Project',
  },
  {
    priority: 3,
    title: 'Body Classification Model',
    shortDescription:
      'A machine learning project focused on body classification using data-driven modeling. This project reflects my interest in AI programming, model development, and applying machine learning concepts to practical classification problems.',
    cover:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop',
    livePreview: '',
    githubLink: 'https://github.com/BumanglagAyu/body_classification_model.git',
    type: 'AI / Machine Learning Project',
    siteAge: 'AI Project',
  },
  {
    priority: 4,
    title: 'Boggled Game Application',
    shortDescription:
      'A multiplayer word game application built with Java, MySQL, and CORBA. The project features real-time client-server interactions, server-side game state management, a user-friendly interface, and performance-focused server configuration.',
    cover:
      'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2070&auto=format&fit=crop',
    livePreview: '',
    githubLink: 'https://github.com/BumanglagAyu/boggle',
    type: 'Java Game Application',
    siteAge: 'Academic Project',
  },
]

// Service Data
export const serviceData = [
  {
    icon: JavaScriptIcon,
    title: 'JavaScript Development',
    shortDescription:
      'Creating dynamic and interactive web applications using JavaScript.',
  },
  {
    icon: ReactIcon,
    title: 'React.js Development',
    shortDescription:
      'Building modern, responsive, and user-friendly interfaces with React.js.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend',
    shortDescription:
      'Developing backend features, APIs, and server-side logic using Node.js.',
  },
  {
    icon: ExpressjsIcon,
    title: 'Express.js Development',
    shortDescription:
      'Building REST APIs, authentication flows, and database-connected backend systems.',
  },
  {
    icon: TailwindCSS,
    title: 'Tailwind CSS Styling',
    shortDescription:
      'Designing clean and responsive interfaces using Tailwind CSS.',
  },
  {
    icon: NextjsIcon,
    title: 'Next.js Development',
    shortDescription:
      'Creating fast and scalable web applications using Next.js and React.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindCSS,
  },
]

export const footerLinks = [
  { title: 'About', href: '#about' },
  { title: 'Projects', href: '#projects' },
  { title: 'Experience', href: '#experience' },
  { title: 'Services', href: '#services' },
  { title: 'Contact', href: '#contact' },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#f6f1e7', '#1f2421', '#e8dcc8', '#4a534a', '#a3b18a'],
  },
  {
    name: 'Dark',
    colors: ['#1f2421', '#d8d5c7', '#2f3631', '#a3b18a', '#f6f1e7'],
  },
  {
    name: 'Aqua',
    colors: ['#345da7', '#d4deef', '#130b43', '#38ccb2', '#fff'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#e4d8b4', '#f35248', '#ffab40'],
  },
]

export const languages = ['English', 'Filipino']