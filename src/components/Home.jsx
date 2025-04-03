import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  padding: 0;
  background: #fff;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 650px;
  padding: 2rem 0 2rem 4rem;
  z-index: 1;
`;

const Tag = styled.span`
  color: #ff6b6b;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  font-weight: 500;
  display: block;
`;

const Title = styled(motion.h1)`
  font-size: 4.2rem;
  color: #2d3436;
  margin-bottom: 1rem;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -1.5px;

  br {
    margin-bottom: 0.2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #636e72;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 500px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
`;

const PrimaryButton = styled(motion(Link))`
  padding: 1rem 2.5rem;
  background: #ff6b6b;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: none;
  
  &:hover {
    background: #ff5252;
  }
`;

const SecondaryButton = styled(motion.a)`
  padding: 1rem 2.5rem;
  background: transparent;
  color: #2d3436;
  border: 1.5px solid #2d3436;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background: #2d3436;
    color: white;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #2d3436;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff6b6b;
    transform: translateY(-2px);
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;
  margin-left: 2rem;
`;

const ProfileImageContainer = styled(motion.div)`
  width: 650px;
  height: 650px;
  position: relative;
  margin-left: 2rem;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Badge = styled(motion.div)`
  background: white;
  padding: 0.7rem 1.2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 0.95rem;
  backdrop-filter: blur(5px);
  border: 2px solid rgba(255, 107, 107, 0.1);

  @keyframes glow {
    0%, 100% { box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2); }
    50% { box-shadow: 0 4px 25px rgba(255, 107, 107, 0.4); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-5px) rotate(2deg); }
  }

  span {
    font-size: 1.2rem;
    display: inline-block;
  }

  &:hover span {
    animation: bounce 0.5s ease infinite;
  }
`;

const ExperienceBadge = styled(Badge)`
  top: 20%;
  right: -8%;
  animation: glow 2s ease-in-out infinite;
  transform-origin: right center;
`;

const TechBadge = styled(Badge)`
  bottom: 20%;
  left: -8%;
  animation: glow 2s ease-in-out infinite;
  animation-delay: 1s;
  transform-origin: left center;
`;

const AnimatedText = styled(motion.span)`
  display: inline-block;
  position: relative;
  font-weight: 700;
  color: #2d3436;
  font-size: 4.2rem;
  width: ${props => props.isSpace ? '20px' : '42px'};
  text-align: center;
`;

const TypingContainer = styled(motion.div)`
  display: inline-flex;
  position: relative;
  font-size: 4.2rem;
  height: 4.2rem;
  line-height: 1.1;
  gap: 4px;
`;

const Cursor = styled(motion.span)`
  display: inline-block;
  width: 4px;
  height: 4.2rem;
  background-color: #ff6b6b;
  margin-left: 4px;
  animation: blink 0.7s infinite;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const badgeAnimation = {
  initial: { 
    opacity: 0,
    scale: 0.5,
    x: -50
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

const Home = () => {
  const nameText = "John Carlo";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: (i) => ({
      opacity: 1,
      y: [0, -15, 0],
      transition: {
        opacity: { duration: 0.2 },
        y: {
          repeat: Infinity,
          duration: 0.5,
          delay: i * 0.1,
          repeatDelay: 2.5,
          ease: "easeOut"
        }
      }
    })
  };

  return (
    <HomeContainer>
      <ContentSection>
        <Tag>Frontend Developer AND UI/UX Designer</Tag>
        <Title>
          Hello, my name is<br />
          <TypingContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {nameText.split("").map((char, index) => (
              <AnimatedText
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                isSpace={char === " "}
              >
                {char === " " ? "\u00A0" : char}
              </AnimatedText>
            ))}
          </TypingContainer>
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          I'm a second-year BSIT student at Western Institute of Technology, passionate about design and coding. My studies focus on developing my skills in these areas. I'm dedicated to creating innovative and functional solutions.
        </Subtitle>
        <ButtonGroup>
          <PrimaryButton
            to="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </PrimaryButton>
          <SecondaryButton
            href="/JohnCarlo-CV.pdf"
            download="JohnCarlo-CV.pdf"
            as={motion.a}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              // Check if file exists
              fetch(e.target.href).then(response => {
                if (response.status === 404) {
                  e.preventDefault();
                  alert('CV file is not available at the moment. Please try again later.');
                }
              }).catch(() => {
                e.preventDefault();
                alert('There was an error downloading the CV. Please try again later.');
              });
            }}
          >
            Download CV
          </SecondaryButton>
        </ButtonGroup>
        <SocialLinks>
          <SocialLink href="https://www.facebook.com/share/1BWNP5P2jS/" target="_blank">
            <i className="fab fa-facebook"></i>
          </SocialLink>
          <SocialLink href="https://www.instagram.com/sry.jc?igsh=eTBlNDY0dG5kZnQ4" target="_blank">
            <i className="fab fa-instagram"></i>
          </SocialLink>
          <SocialLink href="https://github.com/JCVA25" target="_blank">
            <i className="fab fa-github"></i>
          </SocialLink>
        </SocialLinks>
      </ContentSection>
      <ImageSection>
        <ProfileImageContainer
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <ProfileImage src="src/assets/profil.png" alt="Profile" />
          <ExperienceBadge
            initial="initial"
            animate="animate"
            variants={badgeAnimation}
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, -2, 2, 0],
              transition: { 
                duration: 0.3,
                rotate: { repeat: Infinity, duration: 0.5 }
              }
            }}
          >
            <span>🚀</span> 1 Year Experience
          </ExperienceBadge>
          <TechBadge
            initial="initial"
            animate="animate"
            variants={badgeAnimation}
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, 2, -2, 0],
              transition: { 
                duration: 0.3,
                rotate: { repeat: Infinity, duration: 0.5 }
              }
            }}
          >
            <span>💻</span> 2 Projects Complete
          </TechBadge>
        </ProfileImageContainer>
      </ImageSection>
    </HomeContainer>
  );
};

export default Home; 