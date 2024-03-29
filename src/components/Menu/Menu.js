import React from "react";
import './Menu.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Menu({ handleToggleMenu, onMenu }) {
  const location = useLocation();
  const navigate = useNavigate();

  function goToProfile() {
    navigate('/profile', {replace: true});
  };

  return (
    <section className="menu">
      <div className={`menu__background ${onMenu ? 'menu__background_opened' : ''}`}></div>
      <div className={`menu__slider ${onMenu ? 'menu_opened' : ''}`}>
        <button onClick={handleToggleMenu} type="button" className="menu__close" />
        <Link to='/' className={`menu__link ${(location.pathname === '/') ? 'menu__link_bordered' : ''}`}>Главная</Link>
        <Link to='/movies' className={`menu__link ${(location.pathname === '/movies') ? 'menu__link_bordered' : ''}`}>Фильмы</Link>
        <Link to='/saved-movies' className={`menu__link ${(location.pathname === '/saved-movies') ? 'menu__link_bordered' : ''}`}>Сохранённые фильмы</Link>
        <button onClick={goToProfile} type="button" className="menu__button" aria-label="Аккаунт" >
          <span className='menu__button-text'>Аккаунт</span>
          <span className='menu__button-image'></span>
        </button>
      </div>    
    </section>
  )
};

export default Menu; 