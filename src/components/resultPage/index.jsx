import React, { useEffect } from "react";
import "./style.css";
import api from "../../http";
import { useDispatch, useSelector } from "react-redux";
import { writeInfoDocAndRisk, writeIds, writeLastLoadedDocs, setIsLoaded, setLastIndexDocLoaded } from "../../reducers/repoReducers/resultReducer";
import background from "../../img/result-page-img.svg";

import Button from "../button";
import Title from "../title";
import ResultSlider from "../resultSlider";

function ResultPage(){
  const { data } = useSelector(state => state.search);
  const { isLoaded, lastLoadedDocs, docData, lastIndexDocLoaded } = useSelector(state => state.result);
  const dispatch = useDispatch();
  
  const searchData = {
      issueDateInterval: {
        startDate: data.dateStart,
        endDate: data.dateEnd
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn: data.inn,
              maxFullness: data.maxFullness,
              inBusinessNews: data.inBusinessNews
            }
          ],
          onlyMainRole: data.onlyMainRole,
          tonality: data.tonality,
          onlyWithRiskFactors: data.onlyWithRiskFactors
        }
      },
      attributeFilters: {
        excludeTechNews: data.excludeTechNews,
        excludeAnnouncements: data.excludeAnnouncements,
        excludeDigests: data.excludeDigests
      },
      similarMode: "duplicates",
      limit: data.countDoc,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: [
        "totalDocuments",
        "riskFactors"
      ]
    }
    
  useEffect(() => {
    getDocAndRisk();
    getDocIds();
  }, []);

  function getDocAndRisk(){
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

  function getDocIds(){
    const ids = [];
    
    api.post("/v1/objectsearch", searchData)
      .then(res => {
        res.data.items.forEach(item => {
            ids.push(item.encodedId)
        });

        dispatch(writeIds(ids));

        getLastLoadedDoc(ids);
      })
      .catch(error => console.log(error));
  }

  function getLastLoadedDoc(array){
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
        
        dispatch(writeLastLoadedDocs(loadedDocs));
        dispatch(setLastIndexDocLoaded(lastIndex));
    })
    .catch(error => console.log(error));
  }
  
  return(
      <main>
        <div className="result-page__header">
          <div className="result-page__header__title-block">
            <Title type="other-title">Ищем. Скоро будут результаты</Title>
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
            Найдено {docData.infoDocAndRisk.reduce((sum, value) => sum + value.countDoc, 0)} вариантов
          </p>
          <ResultSlider data={docData.infoDocAndRisk}/>
        </div>
        <div className="result-page__docs-block">
          <Title type="other-subtitle">Список документов</Title>
        </div>
      </main>
  )
}

export default ResultPage;