import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/anime-other.jpg`} alt="" />
      </Link>
      <header>
        <h2>Teo O&apos;Keefe</h2>
        <p><a href="mailto:teookeefe@usp.br">teookeefee@usp.br</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Teo. I am a USP student, banking intern and generally a pretty cool person.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Teo O&apos;Keefe <Link to="/">teookeefe.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
