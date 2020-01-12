import React, { Component } from 'react'
import AddingFormSandbox from '../Information/AddingForm/AddingFormSandbox'
import YearInfoSandbox from '../Information/yearInfo/yearInfoSandbox'
import NominalInfoSandbox from '../Information/nominalInfo/nominalInfoSandbox'
import styles from './mainTable.module.css'
import CommonWindowContainer from '../Information/CommonWindow/CommonWindowContainer'
import { useSelector } from 'react-redux'
import Krutilka from './../../images/preloader.gif'
import UpperInfoRow from '../../tableConstructor/UpperIvfoRow'
// import InfoRow from './../MainTable43/mainTable'
class MainTable extends Component {
    render() {
        return <div>
            {!this.props.state.preloader? <table className={styles.tablestyle} width="80%" border="1" cellpadding="4" >

                <tr>
                    <td>Управляющий</td>
                    <td colspan="24">Ростовцев</td>
                    <td colspan="78">Ламанский</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="24"><YearInfoSandbox thisYear={1858} /></td>
                    <td colspan="21"><YearInfoSandbox thisYear={1859} /></td>
                    <td colspan="15"><YearInfoSandbox thisYear={1860} /></td>
                    <td colspan="20"><YearInfoSandbox thisYear={1861} /></td>
                    <td colspan="22"><YearInfoSandbox thisYear={1862} /></td>
                </tr>
                <Header/>

                    <UpperInfoRow info={this.props.state.catalogItems58} userIsAuth={this.props.userIsAuth} />
            </table>: <div><img src={Krutilka} /></div>}
        </div>
    }
}

const Header = (props) => {

    let headerArr58 = [1, 3, 5, 10].map(i => { return (<td colspan="6"><NominalInfoSandbox thisYear={1858} thisNominal={i}  /></td>) })
    let headerArrDir58 = [1, 3, 5, 10].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Поморский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Семенов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ч
                <div className={styles.infoCellDetail}>Чухломин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ш
                <div className={styles.infoCellDetail}>Шитц</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Щ
                <div className={styles.infoCellDetail}>Щерба</div>
                </div>
            </td>
        </>)
    })
    let headerArr59 = [1, 3, 5].map(i => { return (<td colspan="7"><NominalInfoSandbox thisYear={1859} thisNominal={i}  /></td>) })
    let headerArrDir59 = [1, 3, 5].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Б
                <div className={styles.infoCellDetail}>Березайский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Павловский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Семенов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ч
                <div className={styles.infoCellDetail}>Чухломин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ш
                <div className={styles.infoCellDetail}>Шитц</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Щ
                <div className={styles.infoCellDetail}>Щерба</div>
                </div>
            </td>
        </>)
    })
    let headerArr60 = [1, 3, 5].map(i => { return (<td colspan="5"><NominalInfoSandbox thisYear={1860} thisNominal={i} /></td>) })
    let headerArrDir60 = [1, 3, 5].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Б
                <div className={styles.infoCellDetail}>Березайский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Павловский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Семенов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Щ
                <div className={styles.infoCellDetail}>Щерба</div>
                </div>
            </td>
        </>)
    })
    let headerArr61 = [1, 3, 5, 10].map(i => { return (<td colspan="5"><NominalInfoSandbox thisYear={1861} thisNominal={i} /></td>) })
    let headerArrDir61 = [1, 3, 5, 10].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Б
                <div className={styles.infoCellDetail}>Березайский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Павловский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Семенов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Щ
                <div className={styles.infoCellDetail}>Щерба</div>
                </div>
            </td>
        </>)

    })
    let headerArr62 = [1, 3].map(i => { return (<td colspan="11"><NominalInfoSandbox thisYear={1862} thisNominal={i} /></td>) })
    let headerArrDir62 = [1, 3].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Б
                <div className={styles.infoCellDetail}>Березайский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Л
                <div className={styles.infoCellDetail}>Лихошерстов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Н
                <div className={styles.infoCellDetail}>Наумов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Павловский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Р
                <div className={styles.infoCellDetail}>Рорбек</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Семенов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ф
                <div className={styles.infoCellDetail}>Фревиль</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ш
                <div className={styles.infoCellDetail}>Шилов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Щ
                <div className={styles.infoCellDetail}>Щерба</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Э
                <div className={styles.infoCellDetail}>Эстеррейх</div>
                </div>
            </td>
        </>)

    })
    return (
        <>
            <tr>
                <td>Номинал</td>
                {headerArr58}{headerArr59}{headerArr60}{headerArr61}{headerArr62}
            </tr>
            <tr>
                <td>Кассир</td>
                {headerArrDir58}{headerArrDir59}{headerArrDir60}{headerArrDir61}{headerArrDir62}
            </tr>
        </>
    )
}

export default MainTable


