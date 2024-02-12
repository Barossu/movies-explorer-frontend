import React from "react";
import './NotFound.css'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="not-found">
      <h2 className="not-found__error">404</h2>
      <p className="not-found__error-name">Страница не найдена</p>
      <button className="not-found__back" type="button" onClick={() => navigate(-1)}>Назад</button>
    </main>
  )
};

export default NotFound;