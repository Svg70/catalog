import React, { useEffect } from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from './../../images/logo.png'
import entrance from './../../images/entrance.png'
import { useSelector, useDispatch } from 'react-redux'
import { setLogout } from '../../redux/auth-reducer'

// import { useSelector, useDispatch } from 'react-redux'



const Header = (props) => {
    const userIsAuth = useSelector(store => store.loginPage.userIsAuth)
    const adminIsAuth = useSelector(store => store.loginPage.adminIsAuth)
    const userName = useSelector(store => store.loginPage.userName)
    const approved = useSelector(store => store.loginPage.approved)
    const dispatch = useDispatch()


    return (
        <div className={styles.headerWrapper}>
            <div className={styles.firstHeader}>
                <div className={styles.logo}>
                    <img src={logo} className={styles.logoImg} />
                </div>
                {!userIsAuth ? <div className={styles.infoEntrance}>
                    <NavLink to='/login'><img src={entrance} /></NavLink>
                    <div className={styles.infoEntranceDetail}>Вход в каталог</div>
                </div>
                    : <div className={styles.autorizedHeader}>
                        <div className={styles.firstHeaderColumn}>
                            <div>{userName}</div>
                            <div>{approved?'Регистрация подтверждена':'Регистрация не подтверждена'}</div>
                            <div>{adminIsAuth?'Администратор': null}</div>
                        </div>
                        <div className={styles.infoEntrance}>
                            <img src={entrance} onClick = {() =>dispatch(setLogout())}/>
                            <div className={styles.infoEntranceDetail}>Выйти из каталога</div>
                        </div>
                    </div>


                }


            </div>
            <div className={styles.secondHeader}>
                <div className={styles.navBar}>
                    <a className={styles.links}>Банкноты</a>
                    <a className={styles.links}>Каталог</a>
                    <a className={styles.links}>Наши контакты</a>
                    {adminIsAuth
                    ?<div style={{display: 'flex', width: '30%', justifyContent: 'space-between'}}>
                        <div className={styles.navigationLinkTop}><NavLink to = '/management'>Пользователи</NavLink></div>
                    <div className={styles.navigationLinkTop}><NavLink to = '/requests'>Запросы</NavLink></div></div>: null}
                    
                </div>
            </div>
            <div className={styles.thirdHeader}>
                <div className={styles.infoNav}>
                    <div className={styles.links}><a style={{ textDecoration: 'none', color: '#999999' }} href='http://perekupi.ru/'>Perekupi.ru</a></div>
                    <div className={styles.links}><div className={styles.navigationLink}><NavLink to='/catalog'>/{' '}Электронный каталог</NavLink></div></div>
                    <div className={styles.links}>/{' '}{props.currentPage}</div>
                </div>
            </div>
        </div>
    )
}

export default Header