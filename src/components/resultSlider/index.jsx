import React, { useEffect, useRef } from "react";
import "./style.css";
import Flickity from "flickity";
import ResultSliderItem from "../resultSliderItem";
import { useSelector } from "react-redux";
import Loader from "../loader";

const flickityOptions = {
  draggable: false,
  pageDots: false,
  prevNextButtons: true,
  percentPosition: true,
  cellAlign: 'left',
  adaptiveHeight: true
}

function ResultSlider({ data }){
  const { isLoaded } = useSelector(state => state.result);
  let sliderRef;

  useEffect(() => {
    let flickity;

    if(isLoaded){
      flickity =  new Flickity(sliderRef, flickityOptions);

      const nextBtn = document.querySelector(".next");

      const elemCount = Math.floor(flickity.element.getBoundingClientRect().width / 139);
      if(flickity.cells.length < elemCount + 1) nextBtn.disabled = true;
      
      flickity.on('select', index => {
        const elemCount = Math.floor(flickity.element.getBoundingClientRect().width / 139);
        if(flickity.cells.length - index < elemCount + 1){
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
      })
    }

    return () => {
      if(flickity !== undefined && flickity !== null){
        flickity.destroy();
      }
    }
  }, [])

  return(
    <div className="result-slider__wrapper">
      <div className="result-slider__header">
        <p>Период</p>
        <p>Всего</p>
        <p>Риски</p>
      </div>
      {isLoaded 
        ?
        <div className="result-slider" ref={el => sliderRef = el}>
          {data.map((item, index) => <ResultSliderItem key={Date.parse(item.date) + index} data={item}/>)}    
        </div>
        :
        <Loader label="Загружаем данные"/>
      }
    </div>
  )
}

export default ResultSlider;