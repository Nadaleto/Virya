import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const GalleryGrid = ({ images }) => (
  <section className="gallery-grid py-5">
    <Container>
      <Row className="g-3">
        {images.map((image) => (
          <Col sm={6} md={4} key={image.alt}>
            <div className="gallery-card">
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <p>{image.alt}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

GalleryGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
};

export default GalleryGrid;
