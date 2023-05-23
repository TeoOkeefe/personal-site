import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Teo O'Keefe's personal website. São Paulo based USP Student, "
    + 'Intern at Societe Generale Bank, and generally pretty cool person.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            Teo's personal webpage, coded from scratch.
          </p>
        </div>
      </header>
      <p>Meet Teo, the web dev extraordinaire who happily dove headfirst into the rabbit hole of a supremely pointless project. Armed with copious amounts of caffeine and an unwavering determination to make the world a sillier place, Teo embarked on a mission to create a website dedicated to counting invisible unicorns. Days and nights blurred together as he immersed himself in a realm of whimsical code, undeterred by the raised eyebrows of friends and family. Teo emerged victorious, proudly presenting his masterpiece—a technologically marvelous ode to the absurd that left the world scratching its head in bewildered amusement. Teo's social life may have faded away like a mystical unicorn vanishing into thin air, but his happiness knew no bounds. With a mischievous grin, he reveled in the irony of pouring countless hours into a project of utter pointlessness, cherishing the joy it brought him. In a world where practicality reigns, Teo stood tall as the pioneer of the nonsensical, reminding us all to embrace the absurd and find mirth in the most unexpected corners of the digital realm.</p>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
