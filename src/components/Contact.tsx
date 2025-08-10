import React, { useState } from 'react';
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

const ContactContainer = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.p`
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0.25rem 0;
`;

const ContactValue = styled.p`
  color: #718096;
  margin: 0;
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background: #c6f6d5;
  color: #22543d;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  background: #fed7d7;
  color: #742a2a;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <ContactContainer>
      <Content>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          We're always interested in hearing about new opportunities and exciting projects. 
          Feel free to reach out if you'd like to connect!
        </SectionSubtitle>

        <ContactGrid>
          <ContactInfo>
            <ContactInfoTitle>Let's Connect</ContactInfoTitle>
            
            <ContactMethod>
              <ContactIcon>📧</ContactIcon>
              <ContactDetails>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>lavtech@example.com</ContactValue>
              </ContactDetails>
            </ContactMethod>
            
            <ContactMethod>
              <ContactIcon>📱</ContactIcon>
              <ContactDetails>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue>+1 (555) 123-4567</ContactValue>
              </ContactDetails>
            </ContactMethod>
            
            <ContactMethod>
              <ContactIcon>📍</ContactIcon>
              <ContactDetails>
                <ContactLabel>Location</ContactLabel>
                <ContactValue>San Francisco, CA</ContactValue>
              </ContactDetails>
            </ContactMethod>
            
            <ContactMethod>
              <ContactIcon>💼</ContactIcon>
              <ContactDetails>
                <ContactLabel>Availability</ContactLabel>
                <ContactValue>Open to new opportunities</ContactValue>
              </ContactDetails>
            </ContactMethod>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Send us a message</FormTitle>
            
            {submitStatus === 'success' && (
              <SuccessMessage>
                Thank you! Your message has been sent successfully. We'll get back to you soon!
              </SuccessMessage>
            )}
            
            {submitStatus === 'error' && (
              <ErrorMessage>
                Something went wrong. Please try again or contact us directly via email.
              </ErrorMessage>
            )}

            <FormGroup>
              <Label htmlFor="name">Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject *</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message *</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </FormGroup>

            <SubmitButton 
              type="submit" 
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Content>
    </ContactContainer>
  );
};

export default Contact; 