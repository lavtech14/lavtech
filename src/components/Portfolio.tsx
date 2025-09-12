import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PortfolioContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  background: #f7fafc;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #718096;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? '#667eea' : '#e2e8f0'};
  background: ${props => props.active ? '#667eea' : 'white'};
  color: ${props => props.active ? 'white' : '#4a5568'};
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
    color: ${props => props.active ? 'white' : '#667eea'};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #718096;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: #edf2f7;
  color: #4a5568;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  padding: 0.5rem 1rem;
  border: 2px solid #667eea;
  color: #667eea;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
  }
  
  &:first-child {
    background: #667eea;
    color: white;
    
    &:hover {
      background: #5a67d8;
    }
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration using Stripe.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "https://todolist-five-lemon.vercel.app/",
      githubUrl: "#",
      category: "frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions, forecasts, and interactive maps using OpenWeatherMap API.",
      image: "🌤️",
      technologies: ["React", "JavaScript", "CSS3", "OpenWeatherMap API"],
      liveUrl: "https://weatherapp-nu-drab.vercel.app/",
      githubUrl: "#",
      category: "frontend"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support, user roles, and SEO optimization features.",
      image: "📝",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "https://blogapp-smoky-psi.vercel.app/",
      githubUrl: "#",
      category: "fullstack"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and styled-components, featuring smooth animations and mobile-first design.",
      image: "🎨",
      technologies: ["React", "TypeScript", "Styled Components", "React Router"],
      liveUrl: "https://portfolio-six-coral-21.vercel.app/",
      githubUrl: "#",
      category: "frontend"
    },
    {
      id: 6,
      title: "API Gateway Service",
      description: "A microservices API gateway with authentication, rate limiting, and request routing built using Node.js and Express.",
      image: "🔌",
      technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      category: "backend"
    }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  return (
    <PortfolioContainer>
      <Content>
        <SectionTitle>My Portfolio</SectionTitle>
        <SectionSubtitle>
          Here are some of the projects I've worked on. Each project represents a unique challenge 
          and showcases different aspects of my skills and experience.
        </SectionSubtitle>

        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={activeFilter === category.id}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectImage>
                <span style={{ zIndex: 1, position: 'relative' }}>{project.image}</span>
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTech>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </ProjectLink>
                  <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Content>
    </PortfolioContainer>
  );
};

export default Portfolio; 