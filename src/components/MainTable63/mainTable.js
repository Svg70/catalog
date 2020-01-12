import React, { Component } from 'react'
import AddingFormSandbox from '../Information/AddingForm/AddingFormSandbox'
import YearInfoSandbox from '../Information/yearInfo/yearInfoSandbox'
import NominalInfoSandbox from '../Information/nominalInfo/nominalInfoSandbox'
import styles from './mainTable.module.css'
import CommonWindowContainer from '../Information/CommonWindow/CommonWindowContainer'
import { useSelector } from 'react-redux'
import Krutilka from './../../images/preloader.gif'
import UpperInfoRow from '../../tableConstructor/UpperIvfoRow'
class MainTable extends Component {
    render() {
        return <div>
            {!this.props.state.preloader ? <table className={styles.tablestyle} width="80%" border="1" cellpadding="4" >
                <tr>
                    <td>Управляющий</td>
                    <td colspan="101">Ламанский</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="30"><YearInfoSandbox thisYear={1863} /></td>
                    <td colspan="36"><YearInfoSandbox thisYear={1864} /></td>
                    <td colspan="35"><YearInfoSandbox thisYear={1865} /></td>
                </tr>
                <Header  />
                <UpperInfoRow info={this.props.state.catalogItems63} userIsAuth={this.props.userIsAuth} />
            </table>:<div><img src={Krutilka} /></div>}
        </div>
    }
}

const Header = (props) => {

    let headerArr63 = [1, 3, 5, 10, 100].map(i => { return (<td colspan="6"><NominalInfoSandbox thisYear = {1863} thisNominal={i} /></td>) })
    let headerArrDir63 = [1, 3, 5, 10, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Л
                <div className={styles.infoCellDetail}>Лихошерстов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>H
                <div className={styles.infoCellDetail}>Наумов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>P
                <div className={styles.infoCellDetail}>Рорбек</div>
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
                <div className={styles.infoCell}>Э
                <div className={styles.infoCellDetail}>Эстеррейх</div>
                </div>
            </td>
        </>)
    })
    let headerArr64 = [1, 3, 5, 10, 25, 50].map(i => { return (<td colspan="6"><NominalInfoSandbox thisYear = {1864} thisNominal={i} /></td>) })
    let headerArrDir64 = [1, 3, 5, 10, 25, 50].map(i => {
        return (<>
                        <td>
                <div className={styles.infoCell}>Л
                <div className={styles.infoCellDetail}>Лихошерстов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>H
                <div className={styles.infoCellDetail}>Наумов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>P
                <div className={styles.infoCellDetail}>Рорбек</div>
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
                <div className={styles.infoCell}>Э
                <div className={styles.infoCellDetail}>Эстеррейх</div>
                </div>
            </td>
        </>)
    })
    let headerArr65 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="5"><NominalInfoSandbox thisYear = {1865} thisNominal={i} /></td>) })
    let headerArrDir65 = [1, 3, 5, 10, 25, 50, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Н
                <div className={styles.infoCellDetail}>Наумов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Р
                <div className={styles.infoCellDetail}>Рорбек</div>
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
                {headerArr63}{headerArr64}{headerArr65}
            </tr>
            <tr>
                <td>Кассир</td>
            {headerArrDir63}{headerArrDir64}{headerArrDir65}
            </tr>
        </>
    )
}

export default MainTable


