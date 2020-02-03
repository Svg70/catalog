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
import ReactTable from "react-table"
import $ from "jquery"

class MainTable extends Component {
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
                <>        <div className={styles.scrollArea}>
                    <table id="table-to-xls-1858" className={styles.tablestyle} width="80%" border="1" cellpadding="4" >
                        <thead>
                        <tr style={{ background: "#f1e091" }}>
                            <td>Управляющий</td>
                            <td colspan="24">Ростовцев</td>
                            <td colspan="78">Ламанский</td>
                        </tr>
                        <tr style={{ backgroundColor: '#f1e6b1' }}>
                            <td>Год</td>
                            <td colspan="24"><YearInfoSandbox thisYear={1858} thisUpravl={'Ростовцев'} /></td>
                            <td colspan="21"><YearInfoSandbox thisYear={1859} thisUpravl={'Ламанский'} /></td>
                            <td colspan="15"><YearInfoSandbox thisYear={1860} thisUpravl={'Ламанский'} /></td>
                            <td colspan="20"><YearInfoSandbox thisYear={1861} thisUpravl={'Ламанский'} /></td>
                            <td colspan="22"><YearInfoSandbox thisYear={1862} thisUpravl={'Ламанский'} /></td>
                        </tr>

                        <Header />
                        </thead>
                        <tbody>
                        <UpperInfoRow info={this.props.state.catalogItems58} userIsAuth={this.props.userIsAuth} />
                        </tbody>
                    </table>
                </div>
                <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="table-to-xls-1858"
            filename="Выпуски 1858-1862 гг."
            sheet="tablexls"
            buttonText="Скачать XLS"/>
                </> : <div><img src={Krutilka} /></div>}
        </>
    }
}

const Header = (props) => {

    let headerArr58 = [1, 3, 5, 10].map(i => { return (<td colspan="6"><NominalInfoSandbox thisYear={1858} thisNominal={i} thisUpravl={'Ростовцев'} /></td>) })
    let headerArrDir58 = [1, 3, 5, 10].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={`Ерогин`}>Е</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Поморский`}>П</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Семенов`}>С</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Чухломин`}>Ч</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Шитц`}>Ш</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Щерба`}>Щ</div>
            </td>
        </>)
    })
    let headerArr59 = [1, 3, 5].map(i => { return (<td colspan="7"><NominalInfoSandbox thisYear={1859} thisNominal={i} thisUpravl={'Ламанский'} /></td>) })
    let headerArrDir59 = [1, 3, 5].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={`Березайский`}>Б</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Ерогин`}>Е</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Павловский`}>П</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Семенов`}>С</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Чухломин`}>Ч</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Шитц`}>Ш</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Щерба`}>Щ</div>
            </td>
        </>)
    })
    let headerArr60 = [1, 3, 5].map(i => { return (<td colspan="5"><NominalInfoSandbox thisYear={1860} thisNominal={i} thisUpravl={'Ламанский'} /></td>) })
    let headerArrDir60 = [1, 3, 5].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={`Березайский`}>Б</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Ерогин`}>Е</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Павловский`}>П</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Семенов`}>С</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Щерба`}>Щ</div>
            </td>
        </>)
    })
    let headerArr61 = [1, 3, 5, 10].map(i => { return (<td colspan="5"><NominalInfoSandbox thisYear={1861} thisNominal={i} thisUpravl={'Ламанский'} /></td>) })
    let headerArrDir61 = [1, 3, 5, 10].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={`Березайский`}>Б</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Ерогин`}>Е</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Павловский`}>П</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Семенов`}>С</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Щерба`}>Щ</div>
            </td>
        </>)

    })
    let headerArr62 = [1, 3].map(i => { return (<td colspan="11"><NominalInfoSandbox thisYear={1862} thisNominal={i} thisUpravl={'Ламанский'} /></td>) })
    let headerArrDir62 = [1, 3].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={`Березайский`}>Б</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Ерогин`}>Е
            
                </div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Лихошерстов`}>Л
             
                </div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Наумов`}>Н</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Павловский`}>П</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Рорбек`}>Р</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Семенов`}>С
                
                </div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Фревиль`}>Ф</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Шилов`}>Ш</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Щерба`}>Щ</div>
            </td>
            <td>
                <div className={styles.infoCell} title={`Эстеррейх`}>Э</div>
            </td>
        </>)

    })
    return (
        <>
            <tr style={{ background: "#f2eccf" }}>
                <td >Номинал</td>
                {headerArr58}{headerArr59}{headerArr60}{headerArr61}{headerArr62}
            </tr>
            <tr style ={{background: "#f7f4e4"}}>
                <td ><div style = {{width: '120px'}}>Кассир</div></td>
                {headerArrDir58}{headerArrDir59}{headerArrDir60}{headerArrDir61}{headerArrDir62}
            </tr>
        </>
    )
}

export default MainTable


