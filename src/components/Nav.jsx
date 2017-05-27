import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Nav = props => (
  <section>
    <nav>
      <figure className="nav__link-home">
        <img src="readitLogo.png" alt="readit Logo" />
      </figure>
      <div className="nav__links">
        <NavLink to="/" exact activeClassName="nav__link-active">pics</NavLink>
        <NavLink to="/category/analog" activeClassName="nav__link-active">analog</NavLink>
        <NavLink to="/favorite" activeClassName="nav__link-active">favorite</NavLink>
      </div>
    </nav>
    {props.children}
  </section>
);

Nav.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Nav;
