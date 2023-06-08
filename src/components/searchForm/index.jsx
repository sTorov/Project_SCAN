import React from "react";
import "./style.css";

import Checkbox from "../checkbox";
import Input from "../input";
import DateRange from "../dateRange";
import Button from "../button";
import { useNavigate } from "react-router-dom";

function SearchForm(){
    const navigate = useNavigate();

    return(
      <div className="form search-form">
        <div className="search-form__input-block">
          <Input label="ИНН компании" error="Введите корректные данные" valid={false} required={true} placeholder="10 цифр"/>
          <Input type="select" label="Тональность" valid={true}>
            <option>Любая</option>
            <option>Позитивная</option>
            <option>Негативная</option>
          </Input>
          <Input label="Количество документов в выдаче" error="Обязательное поле" valid={false} required={true} placeholder="От 1 до 1000"/>    
          <DateRange error="Введите корректные данные" valid={false} required={true} label="Диапозон поиска"/>
        </div>
        <div className="search-form__checkbox-block">
          <Checkbox>Признак максимальной полноты</Checkbox>
          <Checkbox>Упоминание в бизнес-контексте</Checkbox>
          <Checkbox>Главная роль в публикации</Checkbox>
          <Checkbox>Публикации только с риск-факторами</Checkbox>
          <Checkbox>Включить технические новости рынков</Checkbox>
          <Checkbox>Включить анонсы и календари</Checkbox>
          <Checkbox>Включить сводки новостей</Checkbox>
        </div>
        <div className="button-wrapper">
            <Button onClick={() => navigate("/result")} disabled={true}>Поиск</Button>
            <span className="button-wrapper__text">* Обязательные к заполнению поля</span>
        </div>
      </div>
    )
}

export default SearchForm;