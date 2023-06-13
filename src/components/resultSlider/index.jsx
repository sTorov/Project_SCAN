import React, { useEffect } from "react";
import "./style.css";
import Flickity from "flickity";
import ResultSliderItem from "../resultSliderItem";
import Loader from "../loader";

const flickityOptions = {
  setGallerySize: false,
  draggable: false,
  pageDots: false,
  prevNextButtons: true,
  percentPosition: true,
  cellAlign: 'left',
  adaptiveHeight: true
}

function ResultSlider({ data, isLoaded }){
  let sliderRef;

  useEffect(() => {
    let flickity;

    if(isLoaded){
      flickity =  new Flickity(sliderRef, flickityOptions);

      const nextBtn = document.querySelector(".next");

      const elemCount = Math.floor(flickity.element.getBoundingClientRect().width / 139);
      if(flickity.cells.length < elemCount + 1 && document.documentElement.clientWidth > 768) nextBtn.disabled = true;
      
      window.onresize = () => {
        flickity.select(0, false, true);
        windowResize(flickity, nextBtn);
      }

      flickity.on('select', index => {
          if(document.documentElement.clientWidth > 768){
            windowResize(flickity, nextBtn, index);
          } else {
            nextBtn.disabled = index === flickity.cells.length - 1; 
          }
        })
      }

    return () => {
      if(flickity){
        flickity.destroy();
      }
      window.onresize = null;
    }
  }, [isLoaded])

  function windowResize(flickity, nextBtn, index = 0){
    if(document.documentElement.clientWidth > 768){
      const elemCount = Math.floor(flickity.element.getBoundingClientRect().width / 139);
      nextBtn.disabled = flickity.cells.length - index < elemCount + 1;
      console.log("window", flickity.cells.length, elemCount)
    } else {
      nextBtn.disabled = false;
    }
  }

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