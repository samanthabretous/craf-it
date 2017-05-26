import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import readitLogo from '../images/readitLogo.png';

const Nav = (props) => {
  return (
    <section>
      <nav>
        <figure className="nav__link-home">
          <img src={readitLogo} alt="readit Logo"/>
        </figure>
        <div className="nav__links">
          <NavLink to="/" exact activeClassName="nav__link-active">pics</NavLink>
          <NavLink to="/category/analog" activeClassName="nav__link-active">analog</NavLink>
          <NavLink to="/likes" activeClassName="nav__link-active">favorite</NavLink>
        </div>
      </nav>
      {props.children}
    </section>
  )
}

Nav.propTypes = {

};

export default Nav;
