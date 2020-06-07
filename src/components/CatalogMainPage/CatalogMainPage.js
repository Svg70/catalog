import React from 'react';
import { NavLink } from "react-router-dom";



export default class CatalogMainPage extends React.Component {
  addscriptFunc() {
    const script = document.createElement("script");
    script.type = "text/javascript"
    script.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ea5df1c6d6fa86f";
    script.async = true;

    document.body.appendChild(script);
  }
  

  componentDidMount() {
    this.addscriptFunc()
  }
  render() {
    return <div className="tableWrapper">
      <div class="addthis_inline_share_toolbox"></div>

    
      <div class="addthis_inline_follow_toolbox" style={{margin: 'auto'}}></div>
    <h1>Working</h1>
    <p><b>Электронный каталог Perekupi.ru</b><br/> - это современное решение для коллекционеров, 
        позволяющее получать самую актуальную информацию об известных коллекционных позициях,
        их количестве, актуальным ценам и провенансе. <br/>
        Каталог Perekupi.ru решает насущную проблему коллекционеров - отсутствие единного реестра 
        центральных выпусков 1843 - 1928 гг. В настоящее время человеку, входящему в мир Российской
        бонистики, достаточно сложно охватить все разнообразие литературы и альмонахов по теме.
        Отважиться на их покупку и изучение способны единицы... <br/>
        Поэтому Perekupi.ru предлагает качественно новое, современное решение для ведение статистики
        и определения ценника в мире Отечественной бонистики!<br/>
        Каталог сайта Perekupi.ru позволяет верефицированным посетитеям вносить информацию о своих коллекционных экземплярах.<br/>
       Подобное взаимодействие между коллекционерами позволит быстро и эффективно собрать данные
       и <b>нести Бонистику в массы!</b></p>
    <div><NavLink to='/catalog/catalog43'>1843-1865 гг.</NavLink></div>
    <div><NavLink to='/catalog/catalog66'>1866-1894 гг.</NavLink></div>
    <div><NavLink to='/catalog/catalog95'>1895-1912 гг.</NavLink></div>
    <div><NavLink to='/catalog/catalogsoviets'>1917-1928 гг.</NavLink></div>
  </div>;
  }
}
