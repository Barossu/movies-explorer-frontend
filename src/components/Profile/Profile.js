import React from "react";
import './Profile.css'
import Header from "../Header/Header";
import { Link } from 'react-router-dom';

function Profile({ loggedIn }) {
  //Проверяю 
  const [isEditing, setIsEditing] = React.useState(false)
  function handleClick(evt) {
    evt.preventDefault();
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }

  return (
    <>
      <Header loggedIn={loggedIn} />  
      <main className="profile">
        <h2 className="profile__title">Привет, Павел!</h2>
        <form className="profile__form">
          <label className="profile__input-container">
            <span className="profile__input-name">Имя</span>
            <input className="profile__input" type="text" defaultValue='Павел' disabled={!isEditing} />
          </label>
          <label className="profile__input-container">
            <span className="profile__input-name" lang="en">E-mail</span>
            <input className="profile__input" type="email" defaultValue='email@email.email' disabled={!isEditing} />
          </label>
          {
            (!isEditing) ?
            <div className="profile__button-container">
              <button onClick={handleClick} className="profile__edit-button" type="button">Редактировать</button>
              <Link className="profile__signout" to='/'>Выйти из аккаунта</Link>
            </div>
            :
            <div className="profile__button-container">
              <p className="profile__error">Что-то не так...</p>
              <button onClick={handleClick} className="profile__save-button profile__save-button_active" type="submit">Сохранить</button>
            </div>
          }

        </form>
      </main>
    </>
  )
};

export default Profile;