import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ProjectCard } from './components/ProjectCard';
import { projects } from './data/projects';
import logo from './assets/logo.svg';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Logo = styled(motion.img)`
  height: 80px;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 12px rgba(154, 112, 238, 0.1));
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #78489e;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 500;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <Logo
          src={logo}
          alt="Maddy Emmy Labs"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A collection of creative projects by Maddy, Emmy, and their dad
        </Subtitle>
      </Header>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </ProjectsGrid>
    </AppContainer>
  );
}

export default App;
