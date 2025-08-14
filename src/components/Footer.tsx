import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #2d3748;
  color: white;
  padding: 3rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #e2e8f0;
`;

const FooterText = styled.p`
  color: #a0aec0;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const QuickLink = styled.a`
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #667eea;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a0aec0;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #4a5568;
  padding-top: 2rem;
  text-align: center;
  color: #a0aec0;
`;

const Copyright = styled.p`
  margin: 0 0 1rem 0;
`;



const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <FooterSection>
            <FooterTitle>LavTech</FooterTitle>
            <FooterText>
              A passionate development company dedicated to creating beautiful, 
              functional, and user-centered digital experiences.
            </FooterText>
            <SocialLinks>
              <SocialLink 
                href="https://linkedin.com/in/lavtech" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                💼
              </SocialLink>
              <SocialLink 
                href="https://github.com/lavtech" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                🐙
              </SocialLink>
              <SocialLink 
                href="https://github.com/lavtech" 
                aria-label="Email"
              >
                📧
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <QuickLinks>
              <QuickLink href="/">Home</QuickLink>
              <QuickLink href="/about">About</QuickLink>
              <QuickLink href="/portfolio">Portfolio</QuickLink>
              <QuickLink href="/contact">Contact</QuickLink>
            </QuickLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact Info</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <span>📧</span>
                <span>lavtech14@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <span>📱</span>
                <span>+91 7675928015</span>
              </ContactItem>
              <ContactItem>
                <span>📍</span>
                <span>Hyderabad</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            © {currentYear} LavTech. All rights reserved.
          </Copyright>
         
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 