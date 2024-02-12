import React from "react";
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav className="portfolio__links">
        <a className="portfolio__link portfolio__link_underline" target="blank" href="https://github.com/Barossu/how-to-learn">Статичный сайт</a>
        <a className="portfolio__link portfolio__link_underline" target="blank" href="https://github.com/Barossu/russian-travel">Адаптивный сайт</a>
        <a className="portfolio__link" target="blank" href="https://github.com/Barossu/react-mesto-api-full-gha">Одностраничное приложение</a>
      </nav>
    </section> 
  )
};

export default Portfolio;