import { Project } from '../types/project';
import carrotJumpImage from '../assets/project-screenshots/carrot-jump-1.png';
import cornersImage from '../assets/project-screenshots/corners.png';
import upcomingProjectImage from '../assets/upcoming-project.jpg';

export const projects: Project[] = [
  {
    id: 'corners',
    title: 'Corners',
    description: 'A simple top down min-game designed by cousin Abz Clazz and built by Unkka Pete!',
    imageUrl: cornersImage,
    projectUrl: 'https://corners.maddyemmylabs.dev',
    repoUrl: 'https://github.com/dJPoida/mel-corners',
    tags: ['Kaboom.js', 'TypeScript', 'Fun', 'Cousins']
  },
  {
    id: 'carrot-jump',
    title: 'Carrot Jump',
    description: 'A fun and engaging game where you jump over obstacles to collect carrots',
    imageUrl: carrotJumpImage,
    projectUrl: 'https://carrot-jump.maddyemmylabs.dev',
    repoUrl: 'https://github.com/dJPoida/mel-carrot-jump',
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