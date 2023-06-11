import React, { useEffect, useRef } from "react";
import Flickity from "flickity";

import "./style.css";

import icon_1 from "../../img/main_carousel_1.svg";
import icon_2 from "../../img/main_carousel_2.svg";
import icon_3 from "../../img/main_carousel_3.svg";

import CarouselCard from "../carouselCard";

const flickityOptions = {
  draggable: false,
  pageDots: false,
  prevNextButtons: true,
  percentPosition: false,
  cellAlign: 'left'
}

function Carousel(){
  const carouselRef = useRef();

  useEffect(() => {
    const flickity = new Flickity(carouselRef.current, flickityOptions);
    const nextBtn = document.querySelector(".next");
    const windowEvent = selectDefaultPosition.bind(null, flickity, nextBtn);

    selectDefaultPosition(flickity, nextBtn);

    window.addEventListener('resize', windowEvent);

    flickity.on('change', index => {
        if ((flickity.element.getBoundingClientRect().width === 860 && index === 1) ||
            (flickity.element.getBoundingClientRect().width < 860 && index === flickity.cells.length - 1)){
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    })

    return () => {
      flickity.destroy();
      window.removeEventListener('resize', windowEvent);
    }
  }, [])

  function selectDefaultPosition(flickity, nextBtn){
    flickity.select(0, false, true);
    nextBtn.disabled = flickity.element.getBoundingClientRect().width === 1305 ? true : false;
  }

  return(
    <div className="wrapper-carousel">
      <div className="carousel" ref={carouselRef}>
        <CarouselCard img={icon_1}>
          Высокая и оперативная скорость обработки заявки
        </CarouselCard>
        <CarouselCard img={icon_2}>
          Огромная комплексная база данных, обеспечивающая объективный ответ на запрос
        </CarouselCard>
        <CarouselCard img={icon_3}>
          Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству
        </CarouselCard>
      </div>
    </div>
  )
}

export default Carousel;