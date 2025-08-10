import React, { useEffect, useRef } from 'react';
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

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  background: #f7fafc;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.section<{ delay: number }>`
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out ${props => props.delay}s both;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  line-height: 1.8;
`;

const AboutParagraph = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillDescription = styled.p`
  color: #718096;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ExperienceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.p`
  color: #667eea;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ExperiencePeriod = styled.p`
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem 1rem;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: #718096;
  font-weight: 500;
`;

const About: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
          const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.style.opacity = '1';
              target.style.transform = 'translateY(0)';
            }
          });
        },
        { threshold: 0.1 }
      );

    observerRef.current = observer;

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <AboutContainer>
      <Content>
        <Section delay={0}>
          <SectionTitle>About Me</SectionTitle>
          <AboutGrid>
            <AboutText>
              <AboutParagraph>
                Hello! We're LavTech, a passionate development company with a love for creating 
                beautiful, functional, and user-centered digital experiences. We believe that great 
                design is not just about aesthetics, but about solving real problems and creating 
                meaningful connections with users.
              </AboutParagraph>
              <AboutParagraph>
                With a background in both frontend and backend development, we enjoy the entire 
                spectrum of web development. From crafting responsive user interfaces to building 
                robust server-side applications, we're always excited to tackle new challenges and 
                learn new technologies.
              </AboutParagraph>
              <AboutParagraph>
                When we're not coding, you can find us exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. We're always 
                looking for opportunities to grow and collaborate with like-minded individuals.
              </AboutParagraph>
            </AboutText>
            <div>
              <img 
                src="https://via.placeholder.com/400x300/667eea/ffffff?text=About+LavTech" 
                alt="About LavTech"
                style={{ 
                  width: '100%', 
                  borderRadius: '12px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </AboutGrid>
        </Section>

        <Section delay={0.2}>
          <SectionTitle>Skills & Technologies</SectionTitle>
          <SkillsGrid>
            <SkillCard>
              <SkillTitle>🚀 Frontend Development</SkillTitle>
              <SkillDescription>
                React, TypeScript, JavaScript, HTML5, CSS3, Styled Components, Responsive Design
              </SkillDescription>
            </SkillCard>
            <SkillCard>
              <SkillTitle>⚙️ Backend Development</SkillTitle>
              <SkillDescription>
                Node.js, Express, Python, Django, REST APIs, GraphQL, Database Design
              </SkillDescription>
            </SkillCard>
            <SkillCard>
              <SkillTitle>🎨 UI/UX Design</SkillTitle>
              <SkillDescription>
                Figma, Adobe Creative Suite, User Research, Prototyping, Design Systems
              </SkillDescription>
            </SkillCard>
            <SkillCard>
              <SkillTitle>🛠️ Tools & DevOps</SkillTitle>
              <SkillDescription>
                Git, Docker, AWS, CI/CD, Testing, Performance Optimization
              </SkillDescription>
            </SkillCard>
          </SkillsGrid>
        </Section>

        <Section delay={0.4}>
          <SectionTitle>Experience</SectionTitle>
          <ExperienceGrid>
            <ExperienceCard>
              <ExperienceTitle>Senior Full Stack Developer</ExperienceTitle>
              <ExperienceCompany>Tech Solutions Inc.</ExperienceCompany>
              <ExperiencePeriod>2022 - Present</ExperiencePeriod>
              <ExperienceDescription>
                Lead development of web applications using React, Node.js, and cloud technologies. 
                Mentored junior developers and implemented best practices for code quality and performance.
              </ExperienceDescription>
            </ExperienceCard>
            <ExperienceCard>
              <ExperienceTitle>Frontend Developer</ExperienceTitle>
              <ExperienceCompany>Digital Creations</ExperienceCompany>
              <ExperiencePeriod>2020 - 2022</ExperiencePeriod>
              <ExperienceDescription>
                Built responsive user interfaces and implemented modern frontend architectures. 
                Collaborated with design teams to create seamless user experiences.
              </ExperienceDescription>
            </ExperienceCard>
            <ExperienceCard>
              <ExperienceTitle>Junior Developer</ExperienceTitle>
              <ExperienceCompany>Startup Hub</ExperienceCompany>
              <ExperiencePeriod>2019 - 2020</ExperiencePeriod>
              <ExperienceDescription>
                Developed full-stack applications and learned modern web development practices. 
                Contributed to various projects and gained experience with multiple technologies.
              </ExperienceDescription>
            </ExperienceCard>
          </ExperienceGrid>
        </Section>

        <Section delay={0.6}>
          <SectionTitle>Quick Stats</SectionTitle>
          <StatsGrid>
            <StatCard>
              <StatNumber>3+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>25+</StatNumber>
              <StatLabel>Projects Completed</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>15+</StatNumber>
              <StatLabel>Technologies</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>100%</StatNumber>
              <StatLabel>Client Satisfaction</StatLabel>
            </StatCard>
          </StatsGrid>
        </Section>
      </Content>
    </AboutContainer>
  );
};

export default About; 