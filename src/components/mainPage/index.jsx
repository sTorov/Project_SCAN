import React from "react";
import "./style.css";

import Carousel from "../carousel";

function MainPage(){
  return(
    <main>
      <h2 className="subtitle">Почему именно мы</h2>
      <Carousel/>
    </main>
  )
}

export default MainPage;