import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

const VideoSection = ({ videos }) => (
  <section className="video-section py-5">
    <Container>
      <Row className="g-4">
        {videos.map((video) => (
          <Col md={4} key={video.title}>
            <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
              <video src={video.url} controls poster={video.poster} />
            </div>
            <h5 className="mt-3">{video.title}</h5>
            <p>{video.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

VideoSection.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      poster: PropTypes.string
    })
  ).isRequired
};

export default VideoSection;
