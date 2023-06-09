import React, { useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Checkbox from "../checkbox";
import Input from "../input";
import DateRange from "../dateRange";
import Button from "../button";
import { writeCountDoc, writeInn, setValidCountDoc, setValidInn, writeDateStart, setValidDate, writeDateEnd } from "../../reducers/repoReducers/searchReducer";
import { ValidateService } from "../../services/validateService";

function SearchForm(){
    const { validCountDoc, validINN, validDate, data } = useSelector(state => state.search);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onChangeCountDoc(value){
      dispatch(writeCountDoc(value));
      dispatch(setValidCountDoc(ValidateService.validateCountDoc(value)));
    }

    function onChangeInn(value){
      dispatch(writeInn(value));
      dispatch(setValidInn(ValidateService.validateInn(value, {})));
    }

    function onChangeStartDate(value){
      dispatch(writeDateStart(new Date(value).toISOString()));
      dispatch(setValidDate(ValidateService.validateDate(new Date(value).toISOString(), data.dateEnd)));
    }

    function onChangeEndDate(value){
      dispatch(writeDateEnd(new Date(value).toISOString()));
      dispatch(setValidDate(ValidateService.validateDate(data.dateStart, new Date(value).toISOString())));
    }

    return(
      <div className="form search-form">
        <div className="search-form__input-block">
          <Input label="ИНН компании" error="Введите корректные данные" value={data.inn} onChange={e => onChangeInn(e.target.value)}
            valid={validINN === null ? true : validINN} required={true} placeholder="10 цифр"/>
          <Input type="select" label="Тональность" valid={true}>
            <option>Любая</option>
            <option>Позитивная</option>
            <option>Негативная</option>
          </Input>
          <Input label="Количество документов в выдаче" error="Обязательное поле" onChange={e => onChangeCountDoc(e.target.value)} value={data.countDoc}
            valid={validCountDoc === null ? true : validCountDoc} required={true} placeholder="От 1 до 1000"/>    
          <DateRange error="Введите корректные данные" onChangeStart={onChangeStartDate} onChangeEnd={onChangeEndDate}
            valid={validDate === null ? true : validDate} required={true} label="Диапозон поиска"/>
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
            <Button onClick={() => navigate("/result")} disabled={!(validDate && validCountDoc && validINN)}>Поиск</Button>
            <span className="button-wrapper__text">* Обязательные к заполнению поля</span>
        </div>
      </div>
    )
}

export default SearchForm;