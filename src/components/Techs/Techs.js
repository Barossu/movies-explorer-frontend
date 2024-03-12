import React from "react";
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h1 className="techs__title">Технологии</h1>
        <h2 className="techs__subtitle">7 технологий</h2>
        <p className="techs__info">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__grid">
          <li lang="en" className="techs__grid-element">HTML</li>
          <li lang="en" className="techs__grid-element">CSS</li>
          <li lang="en" className="techs__grid-element">JS</li>
          <li lang="en" className="techs__grid-element">React</li>
          <li lang="en" className="techs__grid-element">Git</li>
          <li lang="en" className="techs__grid-element">Express.js</li>
          <li lang="en" className="techs__grid-element">mongoDB</li> 
        </ul>
      </div>
    </section>
  )
};

export default Techs;