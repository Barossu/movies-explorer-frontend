import React from "react";
import './AboutMe.css';
import avatar from '../../images/avatar.jpg'

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__columns">
        <div className="about-me__column"> 
          <h3 className="about-me__name">Павел</h3>
          <p className="about-me__description">Человек, 26 лет</p>
          <p className="about-me__info">Я родился в городе Железногрск Курской области. Учусь в университете МГТУ им. Н.Э. Баумана. Люблю играть в в компьютерные игры и ходить в спортзал. Начал заниматься в Яндекс.Правктикум на курсе "Веб-разработчик". В дальнейшем хочу найти работу в IT сфере.</p>
          <a className="about-me__link" lang="en" target="blank" href="https://github.com/Barossu">Github</a>
        </div>
        <img className="about-me__avatar" alt="Аватар" src={avatar} />
      </div>
    </section>
  )
};

export default AboutMe;