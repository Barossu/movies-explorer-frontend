import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'
import Menu from '../Menu/Menu.js';
import logoImage from '../../images/logo.png'

function Header({ loggedIn }) {
  const [onMenu, setOnMenu] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth)
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  function handleToggleMenu() {
    if (onMenu) {
      setOnMenu(false);
    } else {
      setOnMenu(true);
    };
  };

  function goToProfile() {
    navigate('/profile', {replace: true})
  }

  function goToSignin() {
    navigate('/signin', {replace: true}) 
  }



  return (
    <header className={`header ${(location.pathname === '/') ? 'header_blue-background' : ''}`}>
      <Menu onMenu={onMenu} handleToggleMenu={handleToggleMenu} />
      <Link to='/' className="header__go-main">
        <img className="header__logo" alt="Логотип" src={logoImage} />
      </Link>
      {(loggedIn) ?
        (width < 769 ? 
        <button onClick={handleToggleMenu} type="button" className="header__menu-button" />
        :
        <div className="header__container">
          <Link to='/movies' className={`header__link ${(location.pathname === '/movies' ? 'header__link_on-page' : '')}`}>Фильмы</Link>
          <Link to='/saved-movies' className={`header__link ${(location.pathname === '/saved-movies' ? 'header__link_on-page' : '')}`}>Сохранённые фильмы</Link>
          <button onClick={goToProfile} type="button" className="header__button" aria-label="Аккаунт" >
            <p className="header__button-text">Аккаунт</p>
            <div className={`header__button-image ${(location.pathname === '/') ? 'header__button-image_blue' : ''}`}></div>
          </button>
        </div>)
        :
        <div className="header__container">
          <Link to='/signup' className="header__signup-link">Регистрация</Link>
          <button onClick={goToSignin} type="button" className="header__signin-button" aria-label="Войти" >Войти</button>
        </div>
      }
    </header>
  )
};

export default Header;