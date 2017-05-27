import React from 'react';

const Heart = ({ fav, animation, data, action }) => (
  <span className={`heart ${fav && 'heart-active'}`} onClick={action}>
    <span className={`postItem__like-active ${animation && 'postItem__like-activeShow'}`}></span>
  </span>
)

export default Heart;
