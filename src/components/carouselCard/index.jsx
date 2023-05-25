import React from "react";
import "./style.css";

function CarouselCard({ img, children }){
  return(
    <div className="wrapper-card">
      <div className="carousel-card">
        <img className="carousel-card__icon" src={img} alt="carousel_card_img"/>
        <p className="carousel-card__text">
          {children}
        </p>
      </div>
    </div>
  )
}

export default CarouselCard;