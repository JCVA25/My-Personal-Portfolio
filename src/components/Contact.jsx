import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 1rem 2rem;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 6rem 2rem 2rem;
  }
`;

const ContactWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1.5fr;
    gap: 4rem;
    padding: 3rem;
  }
`;

const ContactInfo = styled.div`
  padding-right: 0;
  
  @media (min-width: 1024px) {
    padding-right: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #2d3436;
  margin-bottom: 1.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  color: #636e72;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ContactDetails = styled.div`
  margin-top: 3rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  i {
    width: 40px;
    height: 40px;
    background:rgba(185, 44, 44, 0.08);
    color: #ff6b6b;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  p {
    color: #636e72;
    font-size: 1rem;
  }
`;

const Form = styled(motion.form)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  background: transparent;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  font-weight: 500;
  color: #2d3436;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  background: #111111;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #666666;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ff6b6b;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background: #111111;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  color: #ffffff;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #666666;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ff6b6b;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  
  &:hover {
    background: #ff5252;
  }
`;

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formsubmit.co/ajax/villaagustinjohncarlo@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Message sent successfully!');
        navigate('/');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactInfo>
          <Title>Get in Touch</Title>
          <Description>
            Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 24 hours.
          </Description>
          <ContactDetails>
            <ContactItem>
              <i className="fas fa-map-marker-alt"></i>
              <p>Pavia, Iloilo City</p>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-envelope"></i>
              <p>villaagustinjohncarlo@gmail.com</p>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-phone"></i>
              <p>09284482727</p>
            </ContactItem>
          </ContactDetails>
        </ContactInfo>

        <Form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* FormSubmit configuration */}
          <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />

          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </FormGroup>
          <FormGroup className="full-width">
            <Label>Message</Label>
            <TextArea
              name="message"
              placeholder="Your message"
              required
            />
          </FormGroup>
          <FormGroup className="full-width">
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </FormGroup>
        </Form>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact; 