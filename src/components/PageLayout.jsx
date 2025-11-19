import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Hero from './Hero.jsx';
import SectionTitle from './SectionTitle.jsx';

const PageLayout = ({ hero, sections }) => (
  <div className="page-layout">
    {hero && <Hero {...hero} />}
    <Container className="py-5">
      {sections.map((section) => (
        <section key={section.title} className="mb-5">
          {section.title && <SectionTitle title={section.title} subtitle={section.subtitle} />}
          {section.paragraphs &&
            section.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="lead text-justify">
                {paragraph}
              </p>
            ))}
          {section.list && (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </Container>
  </div>
);

PageLayout.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    backgroundImage: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string
  }),
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      paragraphs: PropTypes.arrayOf(PropTypes.string),
      list: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

PageLayout.defaultProps = {
  hero: null,
  sections: []
};

export default PageLayout;
