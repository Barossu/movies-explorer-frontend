import React from "react";
import './Main.css'
import Promo from '../Promo/Promo.js'
import AboutProject from '../AboutProject/AboutProject.js'
import Techs from '../Techs/Techs.js'
import AboutMe from "../AboutMe/AboutMe.js";
import Portfolio from "../Portfolio/Portfolio.js";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="content">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
};

export default Main;