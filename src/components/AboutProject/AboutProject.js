import React from "react";
import './AboutProject.css'; 

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h1 className="about-project__title">О проекте</h1>
      <div className="about-project__container">
        <div className="about-project__info">
          <h2 className="about-project__subtitle">Дипломный проект включал 5 этапов</h2>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__info">
          <h2 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h2>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div> 
      </div>
      <div className="about-project__grid">
        <h3 className="about-project__back-time">1 неделя</h3>
        <h3 className="about-project__front-time">4 недели</h3>
        <h3 className="about-project__work" lang="en">Back-end</h3>
        <h3 className="about-project__work" lang="en">Front-end</h3>
      </div>
    </section>
  )
};

export default AboutProject;