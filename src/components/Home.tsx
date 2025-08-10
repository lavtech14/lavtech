import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: 80px;
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

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroText = styled.div`
  animation: ${slideInLeft} 1s ease-out;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: white;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2rem 0;
  line-height: 1.6;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 2.5rem 0;
  line-height: 1.7;
  max-width: 500px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  background: white;
  color: #667eea;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SecondaryButton = styled(Link)`
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border: 2px solid white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: #667eea;
    transform: translateY(-2px);
  }
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ProfileIcon = styled.div`
  font-size: 8rem;
  color: rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${fadeInUp} 1s ease-out 1s both;
`;

const ScrollText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
`;

const ScrollArrow = styled.div`
  width: 2px;
  height: 30px;
  background: rgba(255, 255, 255, 0.7);
  margin: 0 auto;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -3px;
    width: 8px;
    height: 8px;
    border-right: 2px solid rgba(255, 255, 255, 0.7);
    border-bottom: 2px solid rgba(255, 255, 255, 0.7);
    transform: rotate(45deg);
  }
`;

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        containerRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HomeContainer ref={containerRef}>
      <Content>
        <HeroText>
          <Name>LavTech</Name>
          <Title>Full Stack Developer & Creative Problem Solver</Title>
          <Description>
            We create beautiful, functional, and user-centered digital experiences. 
            Passionate about clean code, innovative solutions, and turning ideas into reality.
          </Description>
          <CTAButtons>
            <PrimaryButton to="/portfolio">View Our Work</PrimaryButton>
            <SecondaryButton to="/contact">Get In Touch</SecondaryButton>
          </CTAButtons>
        </HeroText>
        
        <HeroImage>
          <ImageContainer>
            <ProfileIcon>👩‍💻</ProfileIcon>
          </ImageContainer>
        </HeroImage>
      </Content>
      
      <ScrollIndicator>
        <ScrollText>Scroll to explore</ScrollText>
        <ScrollArrow />
      </ScrollIndicator>
    </HomeContainer>
  );
};

export default Home; 