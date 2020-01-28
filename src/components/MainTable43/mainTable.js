import React, { Component } from 'react'
import AddingFormSandbox from '../Information/AddingForm/AddingFormSandbox'
import YearInfoSandbox from '../Information/yearInfo/yearInfoSandbox'
import NominalInfoSandbox from '../Information/nominalInfo/nominalInfoSandbox'
import styles from './mainTable.module.css'
import CommonWindowContainer from '../Information/CommonWindow/CommonWindowContainer'
import { useSelector } from 'react-redux'
import Krutilka from './../../images/preloader.gif'
import UpperInfoRow from '../../tableConstructor/UpperIvfoRow'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
class MainTable extends Component {
    render() {
        return <>
        
            {!this.props.state.preloader ?
            <><div className={styles.scrollArea}>
            <table id="table-to-xls-1843" className={styles.tablestyle} width="80%" border="1" cellpadding="4" >

                <tr style = {{background: "#f1e091"}}>
                    <td>Управляющий</td>
                    <td colspan="63">Халчинский</td>
                    <td colspan="16">Юрьев</td>
                </tr>
                <tr style = {{backgroundColor: '#f1e6b1'}}>
                    <td>Год</td>
                    <td colspan="21"><YearInfoSandbox thisYear={1843} thisUpravl ={'Халчинский'}/></td>
                    <td colspan="14"><YearInfoSandbox thisYear={1847} thisUpravl ={'Халчинский'}/></td>
                    <td colspan="28"><YearInfoSandbox thisYear={1851} thisUpravl ={'Халчинский'}/></td>
                    <td colspan="16"><YearInfoSandbox thisYear={1854} thisUpravl ={'Юрьев'}/></td>
                </tr>
                <Header />

                    <UpperInfoRow info={this.props.state.catalogItems43} userIsAuth={this.props.userIsAuth} />
            </table>
            </div>
            <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls-1843"
                    filename="Выпуски 1843-1854 гг."
                    sheet="tablexls"
                    buttonText="Скачать XLS"/>
            
            </>:<div><img src={Krutilka} /></div>}
        

        </>
    }
}




const Header = (props) => {

    let headerArr43 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear={1843} thisNominal={i} thisUpravl ={'Халчинский'}/></td>) })
    let headerArrDir43 = [1, 3, 5, 10, 25, 50, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title ={`Готовцев`}>Г</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Правотархов`}>П</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Чухломин`}>Ч</div>
            </td>
        </>)
    })
    let headerArr47 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="2"><NominalInfoSandbox thisYear={1847} thisNominal={i} thisUpravl ={'Халчинский'}/></td>) })
    let headerArrDir47 = [1, 3, 5, 10, 25, 50, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title ={`Лазарев`}>Л</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Торопогрицкий`}>Т</div>
            </td>
        </>)
    })
    let headerArr51 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="4" ><NominalInfoSandbox thisYear={1851} thisNominal={i} thisUpravl ={'Халчинский'}/></td>) })
    let headerArrDir51 = [1, 3, 5, 10, 25, 50, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title ={`Владимирцов`}>В</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Лазарев`}>Л</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Стоянов`}>С</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Чухломин`}>Ч</div>
            </td>
        </>)
    })
    let headerArr54 = [1, 3, 5, 10].map(i => { return (<td colspan="4"><NominalInfoSandbox thisYear={1854} thisNominal={i} thisUpravl ={'Юрьев'}/></td>) })
    let headerArrDir54 = [1, 3, 5, 10].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title ={`Владимирцов`}>В</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Лазарев`}>Л</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Стоянов`}>С</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Чухломин`}>Ч</div>
            </td>
        </>)
    })
    return (
        <>
            <tr style ={{background: "#f2eccf"}}>
                <td>Номинал</td>
                {headerArr43}{headerArr47}{headerArr51}{headerArr54}
            </tr>
            <tr style ={{background: "#f2eccf"}}>
                <td>Кассир</td>
                {headerArrDir43}{headerArrDir47}{headerArrDir51}{headerArrDir54}
            </tr>
        </>
    )
}

export default MainTable


