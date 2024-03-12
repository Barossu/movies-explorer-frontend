import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2024</p>
        <nav className="footer__links">
          <a className="footer__link" target="blank" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link" target="blank" href="https://github.com/Barossu/movies-explorer-frontend" lang="en">Github</a>
        </nav>
      </div>
    </footer>  
  )
};

export default Footer;