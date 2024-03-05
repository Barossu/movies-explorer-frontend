import React from "react";
import './Register.css'
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';
import { checkEmailForValidity, checkPasswordForValidity, checkNameForValidity } from "../../utils/Validation.js";

function Register({ handleRegister }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userName, setUserName] = React.useState('')
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [userNameDirty, setUserNameDirty] = React.useState('')
  const [emailError, setEmailError] = React.useState('Почта не может быть пустой');
  const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');
  const [userNameError, setUserNameError] = React.useState('Имя не может быть пустым')
  const [formValid, setFormValid] = React.useState('false');

  React.useEffect(() => {
    if (emailError || passwordError || userNameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }

  }, [emailError, passwordError, userNameError]);

  const handleBlur = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break
      case 'password':
        setPasswordDirty(true);
        break
      case 'name':
        setUserNameDirty(true);
        break
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkEmailForValidity(e.target, setEmailError);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordForValidity(e.target, setPasswordError);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
    checkNameForValidity(e.target, setUserNameError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(email, userName, password);
  }


  return (
    <main className="register">
      <Link className="register__logo-link" to='/'>
        <img className="register__logo" alt="Лого" src={logo} />
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__input-container">
          <span className="register__input-name">Имя</span>
          <input onChange={handleNameChange} onBlur={handleBlur} value={userName} className="register__input" type="text" name="name" placeholder="Имя"></input>
          {(userNameDirty && userNameError) && <span className="register__input-error">{userNameError}</span>}
        </label>
        <label className="register__input-container">
          <span className="register__input-name" lang="en">E-mail</span>
          <input onChange={handleEmailChange} onBlur={handleBlur} value={email} className="register__input" type="email" name="email" placeholder="E-mail"></input>
          {(emailDirty && emailError) && <span className="register__input-error">{emailError}</span>}
        </label>
        <label className="register__input-container">
          <span className="register__input-name">Пароль</span>
          <input onChange={handlePasswordChange} onBlur={handleBlur} value={password} className="register__input" type="password" name="password" placeholder="Пароль"></input>
          {(passwordDirty && passwordError) && <span className="register__input-error">{passwordError}</span>}
        </label>
        <p className="register__error"></p>
        <button onClick={handleSubmit} disabled={!formValid} type="submit" className={`register__submit-button ${formValid ? 'register__submit-button_active' : 'register__submit-button_unactive'}`}>Зарегистрироваться</button>
      </form>
      <p className="register__text">Уже зарегистрированы? <Link className="register__signin-link" to='/signin'>Войти</Link></p>
    </main>
  )
};

export default Register; 