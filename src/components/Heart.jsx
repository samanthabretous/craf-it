import React from 'react';
import PropTypes from 'prop-types';

const Heart = ({ fav, animation, action }) => (
  <button className={`heart ${fav && 'heart-active'}`} onClick={action}>
    <span className={`postItem__like-active ${animation && 'postItem__like-activeShow'}`} />
  </button>
);

Heart.propTypes = {
  fav: PropTypes.bool.isRequired,
  animation: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default Heart;
