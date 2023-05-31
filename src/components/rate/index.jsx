import React from "react";
import "./style.css";
import Button from "../button";

function Rate({item, signed, changeSigned}){
  return(
    <div className={`rate-card ${ signed === item.name ? "signed" : "" }`} style={{borderColor: item.colors[0]}}>
      <div className="rate-card-header" style={{backgroundColor: item.colors[0], color: item.colors[1]}}>
        <p className="rate-card-title">{item.name}</p>
        <p className="rate-card-text">{item.label}</p>
        <img className="rate-card-icon" src={item.icon} alt={`rate_icon ${item.id}`}/>
      </div>
      <div className="price-containder">
          {signed === item.name && <div className="rate-card-tag">Текущий тариф</div>}
          <p className="rate-card-title">{item.price} ₽ <span className="old-price">{item.oldPrice}  ₽</span></p>
          {item.hasOwnProperty('installmentPlan') && <p className="rate-card-text">или {item.installmentPlan} ₽/мес. при рассрочке на 24 мес.</p>}
      </div>
      <div className="rate-card-main">
        <ul className="rate-card-list">
          <p className="rate-card-list-title">В тариф входит:</p>
          {item.includeServices.map((service, index) => <li className="rate-card-text" key={`${item.id}_${index}`}>{service}</li>)}
        </ul>
        <Button onClick={ signed ? () => changeSigned(item.name) : null } isSigned={ signed === item.name }>
          { signed === item.name ? "Перейти в личный кабинет" : "Подробнее" }
        </Button>
      </div>
    </div>
  )
}

export default Rate;