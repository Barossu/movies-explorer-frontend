import React from "react";
import './Promo.css';
import promoImage from '../../images/webearth.png';


function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__info-container">
          <h1 className="promo__text">Учебный проект студента факультета  Веб&#8209;разработки.</h1>
          <p className="promo__more-info">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="promo__button" href="#about-project">Узнать больше</a>
        </div>
        <div className="promo__image-container">
          <img className="promo__image" alt="Промо изображение" src={promoImage} />
        </div>
      </div>
    </section>
  )
};

export default Promo; 