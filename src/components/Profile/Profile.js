import React from "react";
import './Profile.css'
import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import { Context } from "../../contexts/Context.js";

function Profile({ handleUpdateUser, loggedIn, handleLogout }) {

  const [isEditing, setIsEditing] = React.useState(false)
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [serverError, setServerError] = React.useState('');
  const [editSuccess, setEditSuccess] = React.useState(false);
  const [isChanged, setIsChanged] = React.useState(false);
  const userData = React.useContext(Context).userData;

  React.useEffect(() => {
    setName(userData.name)
    setEmail(userData.email)
  }, [userData])

  React.useEffect(() => {
    if (name === userData.name && email === userData.email) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [name, email, isEditing]);
  
  function handleClick(evt) {
    setServerError('')
    evt.preventDefault();
    if (isEditing) {
      handleUpdateUser({ name: name, email: email })
        .then(() => {
          setIsEditing(false)
          setServerError('')
          setEditSuccess(true);
          setTimeout(() => {
            setEditSuccess(false)
          }, 2500);
        })
        .catch((err) => {
          console.error(err)
          if (err.includes('409')) {
            setName(userData.name)
            setServerError('Пользователь с таким email уже существует')
          } else {
            setEmail(userData.email)
            setServerError('При обновлении профиля произошла ошибка')
          }
        
        })
    } else {
      setIsEditing(true);
    }
  }

  function handleBackFromEdit(evt) {
    evt.preventDefault();
    setIsEditing(false)
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
              {editSuccess && <p className="profile__success-edit">Успешно обновлено!</p>}
              <button onClick={handleClick} className="profile__edit-button" type="button">Редактировать</button>
              <Link onClick={handleLogout} className="profile__signout" to='/'>Выйти из аккаунта</Link>
            </div>
            :
            <div className="profile__button-container">
              <p className="profile__error">{serverError}</p>
              <button onClick={isChanged ? handleClick : handleBackFromEdit} className="profile__save-button profile__save-button_active" type="submit">{isChanged ? 'Сохранить' : 'Назад'}</button>
            </div>
          }

        </form>
      </main>
    </>
  )
};

export default Profile;