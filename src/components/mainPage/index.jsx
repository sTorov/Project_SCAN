import React from "react";
import "./style.css";

import background_1 from "../../img/main_1.jpg";
import background_2 from "../../img/main_2.svg";
import { rateList } from "./moq";

import Carousel from "../carousel";
import Button from "../button";
import Rate from "../rate";
import { useSelector } from "react-redux";
import Title from "../title";

function MainPage(){
  const { isAuth, info } = useSelector(state => state.account);

  return(
    <main>
      <section className="first-main-page-section">
        <Title type="title">сервис по поиску публикаций<br/> о компании<br/> по его ИНН</Title>
        <p className="first-main-page-section__text">
          Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
        </p>

        {isAuth && <Button>Запросить данные</Button>}
        
        <img className="first-main-page-section__img" src={background_1} alt="background_1_main"/>
      </section>

      <section className="second-main-page-section">
        <Title type="subtitle">почему именно мы</Title>

        <Carousel/>
        
        <div className="image-wrapper">
          <img className="second-main-page-section__img" src={background_2} alt="background_2_main"/>
        </div>
        
        <Title type="subtitle">наши тарифы</Title>
        <div className="second-main-page-section__rates-wrapper">
          {rateList.map(item => <Rate key={item.id} item={item} isSigned={isAuth && info.signed === item.name}/>)}
        </div>
      </section>
    </main>
  )
}

export default MainPage;