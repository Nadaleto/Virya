import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const CardCoach = ({ name, role, description, image }) => (
  <Card className="coach-card h-100 shadow-sm">
    <Card.Img variant="top" src={image} alt={name} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
      <Card.Text>{description}</Card.Text>
      <Button variant="outline-primary" size="sm" href="https://www.instagram.com/viryafisio" target="_blank" rel="noreferrer">
        Conheça mais
      </Button>
    </Card.Body>
  </Card>
);

CardCoach.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CardCoach;
