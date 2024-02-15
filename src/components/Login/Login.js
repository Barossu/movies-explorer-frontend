import React from "react";
import './Login.css'
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';
 
function Login() {
  return (
    <main className="login">
      <Link className="login__logo-link" to='/'>
        <img className="login__logo" alt="Лого" src={logo} />
      </Link>
      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <label className="login__input-container">
          <span className="login__input-name" lang="en">E-mail</span>
          <input className="login__input" type="email" defaultValue='email@email.email' placeholder="E-mail"></input>
          <span className="login__input-error"></span>
        </label>
        <label className="login__input-container">
          <span className="login__input-name">Пароль</span>
          <input className="login__input" type="password" defaultValue='qwerty123' placeholder="Пароль"></input>
          <span className="login__input-error"></span>
        </label>
        <p className="login__error"></p>
        <button type="submit" className="login__submit-button login__submit-button_active">Войти</button>
      </form>
      <p className="login__text">Ещё не зарегистрированы? <Link className="login__signin-link" to='/signup'>Регистрация</Link></p>
    </main>
  )
};

export default Login; 