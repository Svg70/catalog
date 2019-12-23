import React, { Component } from 'react'
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'



const Footer = () => {
    return (
        <div className={styles.FooterWrapper}>
            <div className={styles.firstFooter}>
                <div className = {styles.firstLine}>
                    <div className = {styles.firstLineList}>
                    <div>О проекте</div>
                    <div>Правила торгов</div>
                    <div>Правовая информация</div>
                    <div>Оплата</div>
                    <div>Новости</div>
                    <div>Скидки</div>
                    <div>Реклама на сайте</div>
                    <div>Контакты</div>
                    </div>
                </div>
                <div className = {styles.line}></div>
                <div className = {styles.secondLine}>
                <div className = {styles.secondLineList}>
                    <div>Банкноты</div>

                    <div className ={styles.navigationLink}><NavLink to='/catalog/catalog43'>Электронный каталог 1</NavLink></div>
                    <div className ={styles.navigationLink}><NavLink to='/catalog/catalog66'>Электронный каталог 2</NavLink></div>
                    <div className ={styles.navigationLink}><NavLink to='/catalog/catalog95'>Электронный каталог 3</NavLink></div>
                    <div className ={styles.navigationLink}><NavLink to='/catalog/catalogsoviets'>Электронный каталог 4</NavLink></div>
                    </div>
                </div>

            </div>

            <div className={styles.secondFooter}>
                <div className={styles.infoNav}>
                    <div className={styles.greyText}>
                        Copyright © интернет-аукцион Perekupi.ru 2019. Все права защищены
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer