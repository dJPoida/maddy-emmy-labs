import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ProjectCardProps } from '../types/project';

const Card = styled(motion.div)`
  display: block;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; // 16:9 aspect ratio
  overflow: hidden;
`;

const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h2`
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  margin: 0 0 1rem;
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  color: #555;
`;

const RepoLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ImageContainer>
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" aria-label={`Launch project ${project.title}`}>
           <ProjectImage src={project.imageUrl} alt={project.title} />
        </a>
      </ImageContainer>
      <Content>
        <Title>
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            {project.title}
          </a>
        </Title>
        <Description>{project.description}</Description>
        <Tags>
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        {project.repoUrl && (
          <RepoLink href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            View Source Code
          </RepoLink>
        )}
      </Content>
    </Card>
  );
}; 