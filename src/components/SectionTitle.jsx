import PropTypes from 'prop-types';

const SectionTitle = ({ title, subtitle }) => (
  <div className="section-title text-center mb-5">
    {subtitle && <p className="text-uppercase text-muted mb-1">{subtitle}</p>}
    <h2>{title}</h2>
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

SectionTitle.defaultProps = {
  subtitle: ''
};

export default SectionTitle;
