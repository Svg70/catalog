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
        return <div className={styles.scrollArea}>
            {!this.props.state.preloader ? <table className={styles.tablestyle} width="80%" border="1" cellpadding="4" >
                <tr>
                    <td style = {{width: '250px'}}>Управляющий</td>
                    <td colspan="101">Ламанский</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="30"><YearInfoSandbox thisYear={1863} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="36"><YearInfoSandbox thisYear={1864} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="35"><YearInfoSandbox thisYear={1865} thisUpravl ={'Ламанский'}/></td>
                </tr>
                <Header  />
                <UpperInfoRow info={this.props.state.catalogItems63} userIsAuth={this.props.userIsAuth} />
            </table>:<div><img src={Krutilka} /></div>}
        </div>
    }
}

const Header = (props) => {

    let headerArr63 = [1, 3, 5, 10, 100].map(i => { return (<td colspan="6" ><NominalInfoSandbox thisYear = {1863} thisNominal={i} thisUpravl ={'Ламанский'}/></td>) })
    let headerArrDir63 = [1, 3, 5, 10, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title ={`Лихошерстов`}>Л</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Наумов`}>H</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Рорбек`}>P</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Фревиль`}>Ф</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Шилов`}>Ш</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Эстеррейх`}>Э</div>
            </td>
        </>)
    })
    let headerArr64 = [1, 3, 5, 10, 25, 50].map(i => { return (<td colspan="6"><NominalInfoSandbox thisYear = {1864} thisNominal={i} thisUpravl ={'Ламанский'}/></td>) })
    let headerArrDir64 = [1, 3, 5, 10, 25, 50].map(i => {
        return (<>
                        <td>
                <div className={styles.infoCell} title ={`Лихошерстов`}>Л</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Наумов`}>H</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Рорбек`}>P</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Фревиль`}>Ф</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Шилов`}>Ш</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Эстеррейх`}>Э</div>
            </td>
        </>)
    })
    let headerArr65 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="5"><NominalInfoSandbox thisYear = {1865} thisNominal={i} thisUpravl ={'Ламанский'}/></td>) })
    let headerArrDir65 = [1, 3, 5, 10, 25, 50, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title ={`Наумов`}>Н</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Рорбек`}>Р
                <div className={styles.infoCellDetail}>Рорбек</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Фревиль`}>Ф</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Шилов`}>Ш</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Эстеррейх`}>Э</div>
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

