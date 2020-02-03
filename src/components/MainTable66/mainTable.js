import React, { Component } from 'react'
import AddingFormSandbox from '../Information/AddingForm/AddingFormSandbox'
import YearInfoSandbox from '../Information/yearInfo/yearInfoSandbox'
import NominalInfoSandbox from '../Information/nominalInfo/nominalInfoSandbox'
import styles from './mainTable66.module.css'
import CommonWindowContainer from '../Information/CommonWindow/CommonWindowContainer'
import { useSelector } from 'react-redux'
import Krutilka from './../../images/preloader.gif'
import UpperInfoRow from '../../tableConstructor/UpperIvfoRow'
import LeftColumn from '../../tableConstructor/LeftColumn'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
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
            {!this.props.preloader ?
                <><div className={styles.scrollArea}>
                    <table id="table-to-xls-1866" className={styles.tablestyle} width="80%" border="1" cellpadding="4" >
                        <thead >
                            <tr style = {{background: "#f1e091"}}>
                                <td>Управляющий</td>
                                <td colspan="38" >Ламанский</td>
                                <td colspan="18" >Цимсен</td>
                                <td colspan="14" >Жуковский</td>
                                <td colspan="8" >Плеске</td>
                            </tr>
                            <tr style = {{backgroundColor: '#f1e6b1'}}>
                                <td>Год</td>
                                <td colspan="7"><YearInfoSandbox thisYear={1866} thisUpravl={'Ламанский'} /></td>
                                <td colspan="5"><YearInfoSandbox thisYear={1870} thisUpravl={'Ламанский'} /></td>
                                <td colspan="6"><YearInfoSandbox thisYear={1872} thisUpravl={'Ламанский'} /></td>
                                <td colspan="5"><YearInfoSandbox thisYear={1874} thisUpravl={'Ламанский'} /></td>
                                <td colspan="6"><YearInfoSandbox thisYear={1876} thisUpravl={'Ламанский'} /></td>
                                <td colspan="5"><YearInfoSandbox thisYear={1878} thisUpravl={'Ламанский'} /></td>
                                <td colspan="4"><YearInfoSandbox thisYear={1880} thisUpravl={'Ламанский'} /></td>
                                <td colspan="5"><YearInfoSandbox thisYear={1882} thisUpravl={'Цимсен'} /></td>
                                <td colspan="5"><YearInfoSandbox thisYear={1884} thisUpravl={'Цимсен'} /></td>
                                <td colspan="3"><YearInfoSandbox thisYear={1886} thisUpravl={'Цимсен'} /></td>
                                <td colspan="5"><YearInfoSandbox thisYear={1887} thisUpravl={'Цимсен'} /></td>
                                <td colspan="4"><YearInfoSandbox thisYear={1889} thisUpravl={'Жуковский'} /></td>
                                <td colspan="5"><YearInfoSandbox thisYear={1890} thisUpravl={'Жуковский'} /></td>
                                <td colspan="6"><YearInfoSandbox thisYear={1892} thisUpravl={'Жуковский'} /></td>
                                <td colspan="4"><YearInfoSandbox thisYear={1894} thisUpravl={'Плеске'} /></td>
                                <td colspan="3"><YearInfoSandbox thisYear={1895} thisUpravl={'Плеске'} /></td>
                            </tr>
                            <tr>
                                <Header />
                            </tr>
                        </thead>
                        <tbody style={{ paddingTop: '-20px' }}>
                            <UpperInfoRow info={this.props.state} userIsAuth={this.props.userIsAuth} />
                        </tbody>
                    </table>
                </div>
                    <ReactHTMLTableToExcel
                        id="test-table-xls-button"
                        className="download-table-xls-button"
                        table="table-to-xls-1866"
                        filename="Выпуски 1866-1895 гг."
                        sheet="tablexls"
                        buttonText="Скачать XLS" />
                </>
                : <div><img src={Krutilka} /></div>}


        </>
    }
}




const Header = (props) => {

    let headerArr66 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1866} thisNominal={i} thisUpravl={'Ламанский'} /></div></td>) })
    let headerArr70 = [1, 5, 10, 25, 100].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1870} thisNominal={i} thisUpravl={'Ламанский'} /></div></td>) })
    let headerArr72 = [1, 3, 5, 10, 25, 100].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1872} thisNominal={i} thisUpravl={'Ламанский'} /></div></td>) })
    let headerArr74 = [1, 3, 5, 10, 100].map(i => { return (<td style={{ background: "#f2eccf" }} ><div className={styles.infoCell}><NominalInfoSandbox thisYear={1874} thisNominal={i} thisUpravl={'Ламанский'} /></div></td>) })
    let headerArr76 = [1, 3, 5, 10, 25, 100].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1876} thisNominal={i} thisUpravl={'Ламанский'} /></div></td>) })
    let headerArr78 = [1, 3, 5, 10, 100].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1878} thisNominal={i} thisUpravl={'Ламанский'} /></div></td>) })
    let headerArr80 = [1, 3, 5, 10].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1880} thisNominal={i} thisUpravl={'Ламанский'} /></div></td>) })
    let headerArr82 = [1, 3, 5, 10, 100].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1882} thisNominal={i} thisUpravl={'Цимсен'} /></div></td>) })
    let headerArr84 = [1, 3, 5, 10, 100].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1884} thisNominal={i} thisUpravl={'Цимсен'} /></div></td>) })
    let headerArr86 = [1, 10, 100].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1886} thisNominal={i} thisUpravl={'Цимсен'} /></div></td>) })
    let headerArr87 = [1, 3, 5, 10, 25].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1887} thisNominal={i} thisUpravl={'Цимсен'} /></div></td>) })
    let headerArr89 = [1, 3, 5, 10].map(i => { return (<td style={{ background: "#f2eccf" }} ><div className={styles.infoCell}><NominalInfoSandbox thisYear={1889} thisNominal={i} thisUpravl={'Жуковский'} /></div></td>) })
    let headerArr90 = [1, 3, 5, 10, 25].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1890} thisNominal={i} thisUpravl={'Жуковский'} /></div></td>) })
    let headerArr92 = [1, 3, 5, 10, 25].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1892} thisNominal={i} thisUpravl={'Жуковский'} /></div></td>) })
    let headerArr94 = [25, 1, 3, 5, 10].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1894} thisNominal={i} thisUpravl={'Плеске'} /></div></td>) })
    let headerArr95 = [1, 3, 5].map(i => { return (<td style={{ background: "#f2eccf" }}><div className={styles.infoCell}><NominalInfoSandbox thisYear={1895} thisNominal={i} thisUpravl={'Плеске'} /></div></td>) })

    return (
        <>

            <td style={{ background: "#f2eccf" }}><div style ={{width: '120px'}}>Кассир/Номинал</div></td>
            {headerArr66}{headerArr70}{headerArr72}{headerArr74}
            {headerArr76}{headerArr78}{headerArr80}{headerArr82}
            {headerArr84}{headerArr86}{headerArr87}{headerArr89}
            {headerArr90}{headerArr92}{headerArr94}{headerArr95}

        </>
    )
}

export default MainTable


