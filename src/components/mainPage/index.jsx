import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

import background_1 from "../../img/main_1.jpg";
import background_2 from "../../img/main_2.svg";
import { rateList } from "../../moq";

import Carousel from "../carousel";
import Button from "../button";
import Rate from "../rate";

function MainPage({ auth, account, changeSigned }){
  const {hash, key} = useLocation();
  useEffect(()=>{
      if(hash){
          const targetElement = document.getElementById(hash.substring(1))
          targetElement?.scrollIntoView({behavior: 'smooth'})
      }
  }, [key, hash])

  return(
    <main>
      <section className="first-main-page-section">
        <h1 id="Home" className="main-page-title">
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
        <h2 id="Rates" className="main-page-subtitle">наши тарифы</h2>
        <div className="second-main-page-section__rates-wrapper">
          {rateList.map(item => <Rate key={item.id} item={item} signed={auth ? account.signed : null} changeSigned={auth ? changeSigned : null}/>)}
        </div>
      </section>
    </main>
  )
}

export default MainPage;