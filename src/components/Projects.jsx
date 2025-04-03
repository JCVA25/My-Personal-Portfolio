import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { useState } from 'react';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background: #f5f5f5;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.div`
  height: 200px;
  background: #ddd;
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #636e72;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ViewProjectButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background: #ff5252;
  }
`;

// Modal Components
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #2d3436;
  font-size: 1.1rem;

  &:before {
    content: "•";
    color: #ff6b6b;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #2d3436;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Carsada',
      description: ' The future of jeepney travel is here. Our app modernizes routes, provides fixed fares, and makes your jeepney journey easier than ever.',
      image: '/assets/carsada.png',
      features: [
        'Easy to find routes for jeepneys and buses',
        'Fixed fare calculation system',
        'Real-time notification alerts',
        'Navigation system for jeepneys and buses',
        'User-friendly interface',
        'Real-time updates on public transportation'
      ]
    },
    {
      title: 'Hamunto',
      description: 'Manage your school club effortlessly with Hamunto. Our intuitive platform handles events, announcements, and membership, freeing you to focus on your club activities.',
      image: '/assets/hamunto.png',
      features: [
        'Explore campus activities and events',
        'Real-time announcements system',
        'Push notifications for important updates',
        'Integrated messaging system',
        'Events calendar and management',
        'Club membership and management',
        'Join and participate in campus clubs'
      ]
    }
  ];

  return (
    <ProjectsContainer>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectImage style={{ backgroundImage: `url(${project.image})` }} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ViewProjectButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProject(project)}
              >
                View Project
              </ViewProjectButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </CloseButton>
              <ProjectTitle>{selectedProject.title}</ProjectTitle>
              <ProjectDescription>{selectedProject.description}</ProjectDescription>
              <h4 style={{ color: '#2d3436', marginTop: '1.5rem' }}>Key Features:</h4>
              <FeatureList>
                {selectedProject.features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    as={motion.li}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects; 