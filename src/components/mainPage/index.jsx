import React from "react";
import "./style.css";

import background_1 from "../../img/main_1.jpg";
import background_2 from "../../img/main_2.svg";

import Carousel from "../carousel";
import Button from "../button";

function MainPage(){
  return(
    <main>
      <section className="first-main-page-section">
        <h1 className="main-page-title">
          сервис по поиску публикаций<br/> о компании<br/> по его ИНН
        </h1>
        <p className="first-main-page-section__text">
          Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
        </p>
        <Button>Запросить данные</Button>
        <img className="first-main-page-section__img" src={background_1} alt="background_1_main"/>
      </section>
      <section className="second-main-page-section">
        <h2 className="main-page-subtitle">почему именно мы</h2>
        <Carousel/>
        <div className="image-wrapper">
          <img className="second-main-page-section__img" src={background_2} alt="background_2_main"/>
        </div>
        <h2 className="main-page-subtitle">наши тарифы</h2>
      </section>
    </main>
  )
}

export default MainPage;