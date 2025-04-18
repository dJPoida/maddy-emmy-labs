export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  repoUrl?: string;
  tags: string[];
}

export interface ProjectCardProps {
  project: Project;
} 