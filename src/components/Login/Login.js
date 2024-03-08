import React from "react";
import './Login.css'
import logo from "../../images/logo.png"
import { useNavigate, Link } from 'react-router-dom';
import { checkEmailForValidity, checkPasswordForValidity } from "../../utils/Validation.js";
import * as auth from "../../utils/auth.js";
 
function Login({ handleLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState('Почта не может быть пустой');
  const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = React.useState('false');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }

  }, [emailError, passwordError]);

  const handleBlur = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break
      case 'password':
        setPasswordDirty(true);
        break
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkEmailForValidity(e.target, setEmailError);
  } 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordForValidity(e.target, setPasswordError);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    auth.authorize(email, password)
      .then(() => {
        handleLogin()
        navigate('/movies', {replace: true});
        setPassword('');
        setEmail('');

      })
      .catch(console.error)
  }

  return (
    <main className="login">
      <Link className="login__logo-link" to='/'>
        <img className="login__logo" alt="Лого" src={logo} />
      </Link>
      <h2 className="login__title">Рады видеть!</h2> 
      <form className="login__form">
        <label className="login__input-container">
          <span className="login__input-name" lang="en">E-mail</span>
          <input onChange={handleEmailChange} onBlur={handleBlur} value={email} className="login__input" name="email" type="email" placeholder="E-mail"></input>
          {(emailDirty && emailError) && <span className="login__input-error">{emailError}</span>}
        </label>
        <label className="login__input-container">
          <span className="login__input-name">Пароль</span>
          <input onChange={handlePasswordChange} onBlur={handleBlur} value={password} className="login__input" name="password" type="password" placeholder="Пароль"></input>
          {(passwordDirty && passwordError) && <span className="login__input-error">{passwordError}</span>}
        </label>
        <p className="login__error"></p>
        <button onClick={handleSubmit} disabled={!formValid} type="submit" className={`login__submit-button ${formValid ? 'login__submit-button_active' : 'login__submit-button_unactive'}`}>Войти</button>
      </form>
      <p className="login__text">Ещё не зарегистрированы? <Link className="login__signin-link" to='/signup'>Регистрация</Link></p>
    </main>
  )
};

export default Login; 