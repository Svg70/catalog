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
                    <td colspan="63">Халчинский</td>
                    <td colspan="16">Юрьев</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="21"><YearInfoSandbox thisYear={1843} /></td>
                    <td colspan="14"><YearInfoSandbox thisYear={1847} /></td>
                    <td colspan="28"><YearInfoSandbox thisYear={1851} /></td>
                    <td colspan="16"><YearInfoSandbox thisYear={1854} /></td>
                </tr>
                <Header />

                    <UpperInfoRow info={this.props.state.catalogItems43} userIsAuth={this.props.userIsAuth} />
            </table>:<div><img src={Krutilka} /></div>}
        </div>
    }
}




const Header = (props) => {

    let headerArr43 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear={1843} thisNominal={i} /></td>) })
    let headerArrDir43 = [1, 3, 5, 10, 25, 50, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Г
                <div className={styles.infoCellDetail}>Готовцев</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Правотархов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ч
                <div className={styles.infoCellDetail}>Чухломин</div>
                </div>
            </td>
        </>)
    })
    let headerArr47 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="2"><NominalInfoSandbox thisYear={1847} thisNominal={i} /></td>) })
    let headerArrDir47 = [1, 3, 5, 10, 25, 50, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Л
                <div className={styles.infoCellDetail}>Лазарев</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Т
                <div className={styles.infoCellDetail}>Торопогрицкий</div>
                </div>
            </td>
        </>)
    })
    let headerArr51 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="4"><NominalInfoSandbox thisYear={1851} thisNominal={i} /></td>) })
    let headerArrDir51 = [1, 3, 5, 10, 25, 50, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>В
                <div className={styles.infoCellDetail}>Владимирцов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Л
                <div className={styles.infoCellDetail}>Лазарев</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Стоянов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ч
                <div className={styles.infoCellDetail}>Чухломин</div>
                </div>
            </td>
        </>)
    })
    let headerArr54 = [1, 3, 5, 10].map(i => { return (<td colspan="4"><NominalInfoSandbox thisYear={1854} thisNominal={i} /></td>) })
    let headerArrDir54 = [1, 3, 5, 10].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>В
                <div className={styles.infoCellDetail}>Владимирцов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Л
                <div className={styles.infoCellDetail}>Лазарев</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Стоянов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ч
                <div className={styles.infoCellDetail}>Чухломин</div>
                </div>
            </td>
        </>)
    })
    return (
        <>
            <tr>
                <td>Номинал</td>
                {headerArr43}{headerArr47}{headerArr51}{headerArr54}
            </tr>
            <tr>
                <td>Кассир</td>
                {headerArrDir43}{headerArrDir47}{headerArrDir51}{headerArrDir54}
            </tr>
        </>
    )
}

export default MainTable


