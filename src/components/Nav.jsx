import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <section>
      <nav>
        <figure className="nav__link-home">
          <img src="readitLogo.png" alt="readit Logo"/>
        </figure>
        <div className="nav__links">
          <NavLink to="/" exact activeClassName="nav__link-active">pics</NavLink>
          <NavLink to="/category/analog" activeClassName="nav__link-active">analog</NavLink>
          <NavLink to="/favorite" activeClassName="nav__link-active">favorite</NavLink>
        </div>
      </nav>
      {props.children}
    </section>
  )
}

export default Nav;
