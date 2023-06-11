import React from "react";
import "./style.css";

function ResultSliderItem({ data }){
    return(
        <div className="result-slider__item">
            <p>{new Date(data.date).toLocaleDateString()}</p>
            <p>{data.countDoc}</p>
            <p>{data.risk}</p>
        </div>
    )
}

export default ResultSliderItem;