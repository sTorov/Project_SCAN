import React, { useEffect } from "react";
import "./style.css";
import api from "../../http";
import { WebService } from "../../services/webService";
import { useDispatch, useSelector } from "react-redux";
import { writeInfoDocAndRisk, writeIds, appendLoadedDocs, setIsLoaded, setLastIndexDocLoaded, resetData } from "../../reducers/repoReducers/resultReducer";
import background from "../../img/result-page-img.svg";

import Button from "../button";
import Title from "../title";
import ResultSlider from "../resultSlider";
import PostCard from "../postCard";

function ResultPage(){
  const { data } = useSelector(state => state.search);
  const { isLoaded, loadedDocs, docData, lastIndexDocLoaded } = useSelector(state => state.result);
  const dispatch = useDispatch();  
    
  useEffect(() => {
    dispatch(resetData());

    const reqData = WebService.getSearchRequest(data);

    getDocAndRisk(reqData);
    getDocIds(reqData);

    return () => { dispatch(resetData()) }
  }, []);

  function getDocAndRisk(searchData){
    let docAndRisks = [];

    api.post("/v1/objectsearch/histograms", searchData)
      .then(res => {
          for (let index = 0; index < res.data.data.length; index++) {
            if(index === 0){
                res.data.data[index].data.forEach(item => {
                    const newElem = {};
                    newElem.date = item.date;
                    newElem.countDoc = item.value;
                    docAndRisks.push(newElem);
                })
            } else {
                res.data.data[index].data.forEach((item, index) => {
                    docAndRisks[index].risk = item.value;
                });
            }
          }

          docAndRisks = docAndRisks.sort((a, b) => {
            if(a.date > b.date) return 1;
            if(a.date < b.date) return -1;
            return 0;
          });

          dispatch(writeInfoDocAndRisk(docAndRisks));
          dispatch(setIsLoaded(true));
        }
      )
      .catch(error => console.log(error));
  }

  function getDocIds(searchData){
    const ids = [];
    
    api.post("/v1/objectsearch", searchData)
      .then(res => {
        res.data.items.forEach(item => {
            ids.push(item.encodedId)
        });

        dispatch(writeIds(ids));

        lazyLoadDocs(ids);
      })
      .catch(error => console.log(error));
  }

  function lazyLoadDocs(array){
    const loadedDocs = [];
    const loadedDocIds = [];

    const lastIndex = array.length - lastIndexDocLoaded > 10
      ? lastIndexDocLoaded + 10 : array.length;

    for (let index = lastIndexDocLoaded; index < lastIndex; index++) {
        loadedDocIds.push(array[index]);        
    }
   
    api.post("/v1/documents", { ids: loadedDocIds })
    .then(res => {
        res.data.forEach(item => {
            loadedDocs.push(item.ok)
        });
        
        dispatch(appendLoadedDocs(loadedDocs));
        dispatch(setLastIndexDocLoaded(lastIndex));
    })
    .catch(error => console.log(error));
  }
  
  return(
      <main>
        <div className="result-page__header">
          <div className="result-page__header__title-block">
            <Title type="other-title">Ищем. Скоро<br/> будут результаты</Title>
            <p className="result-page__text">
              Поиск может занять некоторое время, просим сохранять терпение.  
            </p>
          </div>
          <div className="result-page__header__img-wrapper">
            <img className="result-page__header__img" src={background} alt="result-page-img"/>
          </div>
        </div>
        <div className="result-page__carousel-block">
          <Title type="other-subtitle">Общая сводка</Title>
          <p className="result-page__carousel-block__text">
            {isLoaded ? `Найдено вариантов: ${docData.ids.length}` : "Загрузка..." }
          </p>
          <ResultSlider data={docData.infoDocAndRisk} isLoaded={isLoaded}/>
        </div>
        <div className="result-page__docs-block">
          <Title type="other-subtitle">Список документов</Title>
          <div className="posts-block">
            {loadedDocs.map(item => <PostCard key={item.id} data={item}/>)}
          </div>
          {lastIndexDocLoaded < docData.ids.length && 
            <Button onClick={() => lazyLoadDocs(docData.ids)}>Показать больше</Button>}
        </div>
      </main>
  )
}

export default ResultPage;