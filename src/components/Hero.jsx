import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';

const Hero = ({ title, subtitle, description, ctaText, ctaLink, backgroundImage }) => (
  <section
    className="hero-section text-light d-flex align-items-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="hero-overlay" />
    <Container className="position-relative text-center text-md-start">
      <p className="hero-kicker">{subtitle}</p>
      <h1>{title}</h1>
      {description && <p className="lead mt-3">{description}</p>}
      {ctaText && (
        <Button variant="primary" size="lg" className="mt-4" href={ctaLink}>
          {ctaText}
        </Button>
      )}
    </Container>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  backgroundImage: PropTypes.string
};

Hero.defaultProps = {
  subtitle: '',
  description: '',
  ctaText: '',
  ctaLink: '#',
  backgroundImage: 'https://source.unsplash.com/random/1600x900/?fitness,training'
};

export default Hero;
