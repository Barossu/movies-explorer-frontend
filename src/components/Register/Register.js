import React from "react";
import './Register.css'
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className="register">
      <Link className="register__logo-link" to='/'>
        <img className="register__logo" alt="Лого" src={logo} />
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__input-container">
          <span className="register__input-name">Имя</span>
          <input className="register__input" type="text" defaultValue='Павел' placeholder="Имя"></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </label>
        <label className="register__input-container">
          <span className="register__input-name" lang="en">E-mail</span>
          <input className="register__input" type="email" defaultValue='email@email.email' placeholder="E-mail"></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </label>
        <label className="register__input-container">
          <span className="register__input-name">Пароль</span>
          <input className="register__input" type="password" defaultValue='qwerty123' placeholder="Пароль"></input>
          <span className="register__input-error">Что-то пошло не так...</span>
        </label>
        <p className="register__error">Что-то пошло не так...</p>
        <button className="register__submit-button register__submit-button_unactive">Зарегистрироваться</button>
      </form>
      <p className="register__text">Уже зарегистрированы? <Link className="register__signin-link" to='/signin'>Войти</Link></p>
    </main>
  )
};

export default Register; 