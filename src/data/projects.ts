import { Project } from '../types/project';
import carrotJumpImage from '../assets/project-screenshots/carrot-jump-1.png';
import upcomingProjectImage from '../assets/upcoming-project.jpg';

export const projects: Project[] = [
  {
    id: 'carrot-jump',
    title: 'Carrot Jump',
    description: 'A fun and engaging game where you jump over obstacles to collect carrots',
    imageUrl: carrotJumpImage,
    projectUrl: 'https://carrot-jump.maddyemmylabs.dev',
    tags: ['Game', 'JavaScript', 'Fun']
  },
  {
    id: 'coming-soon',
    title: 'Coming Soon!',
    description: 'This project is currently under development. Check back soon for updates!',
    imageUrl: upcomingProjectImage,
    projectUrl: 'https://project1.maddyemmylabs.dev',
    tags: ['React', 'TypeScript', 'Fun']
  },
]; 