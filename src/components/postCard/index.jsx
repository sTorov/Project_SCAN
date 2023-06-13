import React, { useState, useEffect } from "react";
import "./style.css";

function PostCard({ data }){
  const [text, setText] = useState(null);
  const [img, setImg] = useState(null);

  useEffect(() => {
    getTextContent();
  }, [])

  function getTextContent(){
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data.content.markup, "text/html");
    const scandoc = xmlDoc.querySelector("scandoc");

    getImgUrl(scandoc.textContent);
    
    let text = scandoc.textContent.replace(/<\/p>/, '\n\n')
    text = text.replace(/(<([^>]+)>)/ig, '');
    text = text.replace(/\s{3,}/g, "\n\n");
    text = text.replace(/\n{1,}/g, "\n\n");
    text = text.replace(/(?:https?):\/\/[\n\S]+/g, '');
    text = text.replace(/\(\s/g, '\(');

    setText(text);
  }

  function getImgUrl(text){
    const array = /<img src=".+"/.exec(text);
    if(array){
        setImg(array[0].split('"')[1]);
    }
  }

  function getCorrectWord(number){
    const word = number % 10 === 0 || number % 10 === 5 || number % 10 === 6 || number % 10 === 7 || number % 10 === 8 || number % 10 === 9
    ? "слов" :
    number % 10 === 2 || number % 10 === 3 || number % 10 === 4
    ? "слова" :
    number % 10 === 1
    ? "слово" : "слов";

    return word;
  }

  return(
    <div className="post-card">
      <div className="post-card__header">
        <div className="post-card__header__info">
          <span className="post-card__span">{new Date(data.issueDate).toLocaleDateString()}</span>
          <a className="post-card__header__link" href={data.url} title={data.source.name} target="_blank">{data.source.name}</a>
        </div>
        <h3 className="post-card__header__title" title={data.title.text}>{data.title.text}</h3>
        <div className="badge-block">
          {data.attributes.isTechNews && <span className="post-card__badge">Технические новости</span>}
          {data.attributes.isAnnouncement && <span className="post-card__badge">Анонсы и события</span>}
          {data.attributes.isDigest && <span className="post-card__badge">Сводки новостей</span>}
        </div>
        <div className={`post-card__img-wrapper ${img ? "" : "blank"}`}>
          {img && <img className="post-card__img" src={img} alt={`img_${data.id.substring(0, 10)}`}/>}
        </div>
        <p className="post-card__content">{text}</p>
        <div className="flexbox">
          <a className="post-card__button" href={data.url} target="_blank">Читать в источнике</a>
          <span className="post-card__span">
            {`${data.attributes.wordCount} ${getCorrectWord(data.attributes.wordCount)}`}
          </span>
        </div>
      </div>  
    </div>
  )
}

export default PostCard;