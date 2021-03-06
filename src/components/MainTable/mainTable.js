import React, { Component } from 'react'
import AddingFormSandbox from '../Information/AddingForm/AddingFormSandbox'
import YearInfoSandbox from '../Information/yearInfo/yearInfoSandbox'
import NominalInfoSandbox from '../Information/nominalInfo/nominalInfoSandbox'
import styles from './mainTable55.module.css'
import CommonWindowContainer from '../Information/CommonWindow/CommonWindowContainer'
import { useSelector } from 'react-redux'
import Krutilka from './../../images/preloader.gif'
import UpperInfoRow from '../../tableConstructor/UpperIvfoRow'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import $ from "jquery"
class MainTable extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }

    render() {
        $(document).ready(function() {
            $('tbody').scroll(function(e) { 
              $('thead').css("left", -$("tbody").scrollLeft());
              $('thead th:nth-child(1)').css("left", $("tbody").scrollLeft()-0); 
              $('tbody td:nth-child(1)').css("left", $("tbody").scrollLeft()-0); 
            });
          })
        return <>
        
            {!this.props.state.preloader ?
            <><div className={styles.scrollArea}>
            <table id="table-to-xls-1855" className={styles.tablestyle} width="80%" border="1" cellpadding="4" >
                <thead>
                <tr style = {{background: "#f1e091"}}>
                    <td>Управляющий</td>
                    <td colspan="108">Ростовцев</td>
                </tr>
                <tr style = {{backgroundColor: '#f1e6b1'}}>
                    <td>Год</td>
                    <td colspan="42"><YearInfoSandbox thisYear={1855} thisUpravl ={'Ростовцев'}/></td>
                    <td colspan="42"><YearInfoSandbox thisYear={1856} thisUpravl ={'Ростовцев'}/></td>
                    <td colspan="24"><YearInfoSandbox thisYear={1857} thisUpravl ={'Ростовцев'}/></td>
                </tr>
                <Header />
                </thead>
                <tbody>
                <UpperInfoRow info={this.props.state.catalogItems} userIsAuth={this.props.userIsAuth} />
                </tbody>
            </table>
            </div>
            <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls-1855"
            filename="Выпуски 1855-1857 гг."
            sheet="tablexls"
            buttonText="Скачать XLS"/>
            </>
            :<div><img src={Krutilka} /></div>}
            
        </>
    }
}




const Header = (props) => {
    let headerArr55 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="6"><NominalInfoSandbox thisYear = {1855} thisNominal={i} thisUpravl ={'Ростовцев'} /></td>) })
    let headerArrDir55 = [1, 3, 5, 10, 25, 50, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title ={`Владимирцов`}>В</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Лазарев`}>Л</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Поморский`}>П</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Стоянов`}>С</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Чухломин`}>Ч</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Щерба`}>Щ</div>
            </td>
        </>)
    })
    let headerArr56 = [1, 3, 5, 10, 25, 50].map(i => { return (<td colspan="7"><NominalInfoSandbox thisYear = {1856} thisNominal={i} thisUpravl ={'Ростовцев'}/></td>) })
    let headerArrDir56 = [1, 3, 5, 10, 25, 50].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title ={`Владимирцов`}>В</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Ерогин`}>Е</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Лазарев`}>Л</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Поморский`}>П</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Стоянов`}>С</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Чухломин`}>Ч</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Щерба`}>Щ</div>
            </td>
        </>)
    })
    let headerArr57 = [1, 3, 5].map(i => { return (<td colspan="8"><NominalInfoSandbox thisYear = {1857} thisNominal={i} thisUpravl ={'Ростовцев'}/></td>) })
    let headerArrDir57 = [1, 3, 5 ].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title ={`Владимирцов`}>В</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Ерогин`}>Е</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Лазарев`}>Л</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Поморский`}>П</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Стоянов`}>С</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Чухломин`}>Ч</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Шитц`}>Ш</div>
            </td>
            <td>
                <div className={styles.infoCell} title ={`Щерба`}>Щ</div>
            </td>
        </>)
    })
    return (
        <>
            <tr style ={{background: "#f2eccf"}}>
                <td>Номинал</td>
                {headerArr55}{headerArr56}{headerArr57}
            </tr>
            <tr style ={{background: "#f7f4e4"}}>
                <td ><div style ={{width: '120px'}}>Кассир</div></td>
            {headerArrDir55}{headerArrDir56}{headerArrDir57}
            </tr>
        </>
    )
}


export default MainTable


