import React from "react";
import "./style.css";
import background from "../../img/account_page_img.svg";

import Form from "../form";
import Title from "../title";

function AccountManagerPage(){  
  return(
    <main>
      <section className="first-account-manager-page-section">
        <Title type="other-title">Для оформления подписки на тариф, необходимо авторизоваться.</Title>
        <Form/>
        <img className="first-account-manager-page-section__img" src={background} alt="account_manager_page_img"/>
      </section>
    </main>
  )
}

export default AccountManagerPage;