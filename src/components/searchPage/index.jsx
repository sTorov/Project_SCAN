import React from "react";
import "./style.css";

import SearchForm from "../searchForm";
import Title from "../title";

import foldersImg from "../../img/Folders.svg";
import documentImg from "../../img/Document.svg";
import background from "../../img/search-page-img.svg";

function SearchPage(){
    return(
      <main className="main-search-page">
        <Title type="other-title">Найдите необходимые данные в пару кликов.</Title>
        <p className="search-page__text">Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</p>
        <div className="search-page-wrapper">
          <div className="search-page-info-block">
            <SearchForm/>
          </div>
          <img className="folders-img" src={foldersImg} alt="folders-img"/>
          <img className="document-img" src={documentImg} alt="document-img"/>
          <div className="image-wrapper">
            <img className="search-page-bg" src={background} alt="background-img"/>
          </div>
        </div>
      </main>
    )
}

export default SearchPage;