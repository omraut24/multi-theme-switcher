import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext.jsx';
import {
  MainContent,
  ContentSection,
  Title,
  Subtitle,
  Paragraph,
  Button,
} from '../components/styled/Layout';
import styled from 'styled-components';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.animation.transition};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme, hasError }) => hasError ? '#e74c3c' : theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  transition: ${({ theme }) => theme.animation.transition};

  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) => hasError ? '#e74c3c' : theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme, hasError }) => hasError ? '#e74c3c20' : theme.colors.accent}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme, hasError }) => hasError ? '#e74c3c' : theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  min-height: 120px;
  resize: vertical;
  transition: ${({ theme }) => theme.animation.transition};

  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) => hasError ? '#e74c3c' : theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme, hasError }) => hasError ? '#e74c3c20' : theme.colors.accent}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const ErrorText = styled.span`
  color: #e74c3c;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const ContactCard = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ContactTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: ${({ theme }) => theme.animation.transition};
`;

const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  transition: ${({ theme }) => theme.animation.transition};
`;

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      text: 'contact@multitheme.com',
      action: () => window.open('mailto:contact@multitheme.com', '_blank')
    },
    {
      icon: '📱',
      title: 'Phone',
      text: '+1 (555) 123-4567',
      action: () => window.open('tel:+15551234567', '_blank')
    },
    {
      icon: '📍',
      title: 'Address',
      text: '123 Theme Street, Design City, DC 12345',
      action: () => window.open('https://maps.google.com', '_blank')
    }
  ];

  return (
    <MainContent
      theme={theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContentSection theme={theme}>
        <Title theme={theme}>Contact Us</Title>
        <Paragraph theme={theme}>
          Have questions about our multi-theme application? We'd love to hear from you! 
          Send us a message and we'll respond as soon as possible.
        </Paragraph>
      </ContentSection>

      <ContentSection theme={theme}>
        <Subtitle theme={theme}>Get in Touch</Subtitle>
        <ContactForm theme={theme} onSubmit={handleSubmit}>
          <FormGroup theme={theme}>
            <Label theme={theme} htmlFor="name">Name</Label>
            <Input
              theme={theme}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              hasError={!!errors.name}
              required
            />
            {errors.name && <ErrorText theme={theme}>{errors.name}</ErrorText>}
          </FormGroup>

          <FormGroup theme={theme}>
            <Label theme={theme} htmlFor="email">Email</Label>
            <Input
              theme={theme}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              hasError={!!errors.email}
              required
            />
            {errors.email && <ErrorText theme={theme}>{errors.email}</ErrorText>}
          </FormGroup>

          <FormGroup theme={theme}>
            <Label theme={theme} htmlFor="subject">Subject</Label>
            <Input
              theme={theme}
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
              hasError={!!errors.subject}
              required
            />
            {errors.subject && <ErrorText theme={theme}>{errors.subject}</ErrorText>}
          </FormGroup>

          <FormGroup theme={theme}>
            <Label theme={theme} htmlFor="message">Message</Label>
            <TextArea
              theme={theme}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us more about your inquiry..."
              hasError={!!errors.message}
              required
            />
            {errors.message && <ErrorText theme={theme}>{errors.message}</ErrorText>}
          </FormGroup>

          <motion.div
            style={{ textAlign: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              theme={theme}
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.div>

          {submitStatus === 'success' && (
            <motion.div
              style={{
                padding: theme.spacing.md,
                backgroundColor: '#e8f5e8',
                color: '#2e7d32',
                borderRadius: theme.layout.borderRadius,
                textAlign: 'center',
                marginTop: theme.spacing.md
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message sent successfully! We'll get back to you soon.
            </motion.div>
          )}
        </ContactForm>
      </ContentSection>

      <ContentSection theme={theme}>
        <Subtitle theme={theme}>Other Ways to Reach Us</Subtitle>
        <ContactInfo theme={theme}>
          {contactMethods.map((method, index) => (
            <ContactCard
              key={method.title}
              theme={theme}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={method.action}
              style={{ cursor: 'pointer' }}
            >
              <ContactIcon theme={theme}>{method.icon}</ContactIcon>
              <ContactTitle theme={theme}>{method.title}</ContactTitle>
              <ContactText theme={theme}>{method.text}</ContactText>
            </ContactCard>
          ))}
        </ContactInfo>
      </ContentSection>

      <ContentSection theme={theme}>
        <Subtitle theme={theme}>Office Hours</Subtitle>
        <Paragraph theme={theme}>
          We're available Monday through Friday, 9:00 AM to 6:00 PM EST. 
          For urgent matters outside of business hours, please send us an email 
          and we'll respond as soon as possible.
        </Paragraph>
      </ContentSection>
    </MainContent>
  );
};

export default Contact; 
