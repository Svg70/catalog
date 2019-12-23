import React, { useEffect } from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from './../../images/logo.png'
import entrance from './../../images/entrance.png'

// import { useSelector, useDispatch } from 'react-redux'

const Header = (props) => {
    // debugger
    // const adminIsAuth = useSelector(store => store.adminIsAuth)
    // const userName = useSelector(store => store.userName)
    // const dispatch = useDispatch()
    // useEffect(
    //     () => dispatch(setAuth(true))
    //   , [])
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.firstHeader}>
                <div className={styles.logo}>
                    <img src={logo} className={styles.logoImg} />
                </div>
                <div className={styles.infoEnt}>
                    {props.state.adminIsAuth
                    ?<div>{props.state.userName} <img src={entrance} onClick={() => props.setAuth(false)}/></div>
                    :<img src={entrance} onClick={() => props.setAuth(true)}/>}
                    <div className={styles.infoEntDetail}>Войдите или зарегистрируйтесь</div>
                </div>

            </div>
            <div className={styles.secondHeader}>
                <div className={styles.navBar}>
                    <a className={styles.links}>Банкноты</a>
                    <a className={styles.links}>Каталог</a>
                    <a className={styles.links}>Наши контакты</a>
                    <a className={styles.links}>Панель администратора</a>
                </div>
            </div>
            <div className={styles.thirdHeader}>
                <div className={styles.infoNav}>
                    <div className={styles.links}><a style={{textDecoration: 'none', color: '#999999'}} href ='http://perekupi.ru/'>Perekupi.ru</a></div>
                    <div className={styles.links}><div className ={styles.navigationLink}><NavLink to='/catalog'>/{' '}Электронный каталог</NavLink></div></div>
                    <div className={styles.links}>/{' '}{props.currentPage}</div>
                </div>
            </div>
        </div>
    )
}

export default Header