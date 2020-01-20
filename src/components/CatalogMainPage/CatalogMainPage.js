import React from 'react';
import { NavLink } from "react-router-dom";



const CatalogMainPage = () => {

    return<div className="tableWrapper">
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
    <div><NavLink to='/catalog/catalog43'>Электронный каталог 1</NavLink></div>
    <div><NavLink to='/catalog/catalog66'>Электронный каталог 2</NavLink></div>
    <div><NavLink to='/catalog/catalog95'>Электронный каталог 3</NavLink></div>
    <div><NavLink to='/catalog/catalogsoviets'>Электронный каталог 4</NavLink></div>
  </div>
}

export default CatalogMainPage