import React from "react";
import './Profile.css'
import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import { Context } from "../../contexts/Context.js";

function Profile({ handleUpdateUser, loggedIn, handleLogout }) {

  const [isEditing, setIsEditing] = React.useState(false)
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [serverError, setServerError] = React.useState('')
  const userData = React.useContext(Context).userData;

  React.useEffect(() => {
    setName(userData.name)
    setEmail(userData.email)
  }, [userData])
  
  function handleClick(evt) {
    evt.preventDefault();
    if (isEditing) {
      handleUpdateUser({ name: name, email: email })
        .then(() => {
          setIsEditing(false)
          setServerError('')
        })
        .catch((err) => {
          console.error(err)
          if (err.includes('409')) {
            setServerError('Пользователь с таким email уже существует')
          } else {
            setServerError('При обновлении профиля произошла ошибка')
          }
        
        })
    } else {
      setIsEditing(true);
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <>
      <Header loggedIn={loggedIn} />  
      <main className="profile">
        <h2 className="profile__title">{`Привет, ${userData.name}!`}</h2>
        <form className="profile__form">
          <label className="profile__input-container">
            <span className="profile__input-name">Имя</span>
            <input onChange={handleNameChange} className="profile__input" name="name" type="text" value={name} disabled={!isEditing} />
          </label>
          <label className="profile__input-container">
            <span className="profile__input-name" lang="en">E-mail</span>
            <input onChange={handleEmailChange} className="profile__input" name="email" type="email" value={email} disabled={!isEditing} />
          </label>
          {
            (!isEditing) ?
            <div className="profile__button-container">
              <button onClick={handleClick} className="profile__edit-button" type="button">Редактировать</button>
              <Link onClick={handleLogout} className="profile__signout" to='/'>Выйти из аккаунта</Link>
            </div>
            :
            <div className="profile__button-container">
              <p className="profile__error">{serverError}</p>
              <button onClick={handleClick} className="profile__save-button profile__save-button_active" type="submit">Сохранить</button>
            </div>
          }

        </form>
      </main>
    </>
  )
};

export default Profile;