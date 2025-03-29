export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

export interface ProjectCardProps {
  project: Project;
} 