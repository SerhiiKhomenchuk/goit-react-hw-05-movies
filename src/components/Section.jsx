import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return (
    <section className="pt-3 pb-3 mt-5">
      <div className="container">{children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
