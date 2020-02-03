import React, { Component } from 'react'
import AddingFormSandbox from '../Information/AddingForm/AddingFormSandbox'
import YearInfoSandbox from '../Information/yearInfo/yearInfoSandbox'
import NominalInfoSandbox from '../Information/nominalInfo/nominalInfoSandbox'
import styles from './mainTable95.module.css'
import CommonWindowContainer from '../Information/CommonWindow/CommonWindowContainer'
import { useSelector } from 'react-redux'
import Krutilka from './../../images/preloader.gif'
import UpperInfoRow from '../../tableConstructor/UpperIvfoRow'
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import FixedTable from '../fixedTable/fixedTable'
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
        let headerArr98Pleske = [1, 3, 5, 10, 100, 500].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1898} thisNominal={i} thisUpravl ={'Плеске'} /></div></td>) })
    let headerArr99Pleske = [25, 50].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1899} thisNominal={i} thisUpravl ={'Плеске'}/></div></td>) })
    let headerArr98Timashev = [1, 3, 5, 10, 100, 500].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1898} thisNominal={i} thisUpravl ={'Тимашев'}/></div></td>) })
    let headerArr99Timashev = [25, 50].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1899} thisNominal={i} thisUpravl ={'Тимашев'}/></div></td>) })
    let headerArr05Timashev = [3].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1905} thisNominal={i} thisUpravl ={'Тимашев'} /></div></td>) })
    let headerArr09Timashev = [10].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1909} thisNominal={i} thisUpravl ={'Тимашев'} /></div></td>) })
    let headerArr98Konshin = [1, 100, 500].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1898} thisNominal={i} thisUpravl ={'Коншин'} /></div></td>) })
    let headerArr99Konshin = [50].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1899} thisNominal={i} thisUpravl ={'Коншин'} /></div></td>) })
    let headerArr05Konshin = [3].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1905} thisNominal={i} thisUpravl ={'Коншин'} /></div></td>) })
    let headerArr09Konshin = [5, 10, 25].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1909} thisNominal={i} thisUpravl ={'Коншин'}/></div></td>) })
    let headerArr10Konshin = [100].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1910} thisNominal={i} thisUpravl ={'Коншин'} /></div></td>) })
    let headerArr12Konshin = [500].map(i => { return (<td ><div className={styles.infoCell}><NominalInfoSandbox thisYear = {1912} thisNominal={i} thisUpravl ={'Коншин'}/></div></td>) })
    let headerArr98Shipov = [1].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1898} thisNominal={i} thisUpravl ={'Шипов'} /></td>) })
    let headerArr99Shipov = [50].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1899} thisNominal={i} thisUpravl ={'Шипов'} /></td>) })
    let headerArr05Shipov = [3].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1905} thisNominal={i} thisUpravl ={'Шипов'}/></td>) })
    let headerArr09Shipov = [5, 10, 25].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1909} thisNominal={i} thisUpravl ={'Шипов'}/></td>) })
    let headerArr10Shipov = [100].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1910} thisNominal={i} thisUpravl ={'Шипов'}/></td>) })
    let headerArr12Shipov = [500].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1912} thisNominal={i} thisUpravl ={'Шипов'}/></td>) })


    let headerArrShipovGovernment = [1, 50, 3, 5, 10, 25, 100, 500].map(i => {
        return (<>
            <td >
                <div className={styles.infoCell} title = {'Императорское правительство'}>И</div>
            </td>
            <td>
                <div className={styles.infoCell} title = {'Временное правительство'}>Вр</div>
            </td>
            <td>
                <div className={styles.infoCell} title = {'Советское правительство'}>С</div>
            </td>
            
        </>)
    })





        return <>
            {!this.props.preloader ? <>
            <div className={styles.scrollArea}>

            <table id="table-to-xls-1895" className={styles.tablestyle} width="80%" border="1" cellpadding="4" >
<thead>
                <tr style = {{backgroundColor: '#f1e6b1'}}>
                    <td>Управляющий</td>
                    <td colspan="8">Плеске</td>
                    <td colspan="10">Тимашев</td>
                    <td colspan="10">Коншин</td>
                    <td colspan="24">Шипов</td>
                </tr>
                <tr style = {{backgroundColor: '#f1e6b1'}}>
                    <td>Год</td>
                    <td colspan="6"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1898} thisUpravl ={'Плеске'} /></div></td>
                    <td colspan="2"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1899} thisUpravl ={'Плеске'}/></div></td>
                    <td colspan="6"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1898} thisUpravl ={'Тимашев'}/></div></td>
                    <td colspan="2"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1899} thisUpravl ={'Тимашев'}/></div></td>
                    <td colspan="1"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1905} thisUpravl ={'Тимашев'}/></div></td>
                    <td colspan="1"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1909} thisUpravl ={'Тимашев'}/></div></td>
                    <td colspan="3"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1898} thisUpravl ={'Коншин'}/></div></td>
                    <td colspan="1"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1899} thisUpravl ={'Коншин'}/></div></td>
                    <td colspan="1"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1905} thisUpravl ={'Коншин'}/></div></td>
                    <td colspan="3"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1909} thisUpravl ={'Коншин'}/></div></td>
                    <td colspan="1"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1910} thisUpravl ={'Коншин'}/></div></td>
                    <td colspan="1"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1912} thisUpravl ={'Коншин'}/></div></td>
                    <td colspan="3"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1898} thisUpravl ={'Шипов'}/></div></td>
                    <td colspan="3"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1899} thisUpravl ={'Шипов'}/></div></td>
                    <td colspan="3"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1905} thisUpravl ={'Шипов'}/></div></td>
                    <td colspan="9"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1909} thisUpravl ={'Шипов'}/></div></td>
                    <td colspan="3"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1910} thisUpravl ={'Шипов'}/></div></td>
                    <td colspan="3"><div style ={{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)'}}><YearInfoSandbox thisYear={1912} thisUpravl ={'Шипов'}/></div></td>
                </tr>
                
                <tr style = {{backgroundColor: '#f1e6b1'}}>
                <td>Номинал</td>
                {headerArr98Pleske}{headerArr99Pleske}{headerArr98Timashev}{headerArr99Timashev}
                {headerArr05Timashev}{headerArr09Timashev}{headerArr98Konshin}{headerArr99Konshin}
                {headerArr05Konshin}{headerArr09Konshin}{headerArr10Konshin}{headerArr12Konshin}
                {headerArr98Shipov}{headerArr99Shipov}{headerArr05Shipov}{headerArr09Shipov}
                {headerArr10Shipov}{headerArr12Shipov}
            </tr>
            <tr style = {{backgroundColor: '#f1e6b1'}}>
                <td><div style ={{width: '120px'}}>Кассир</div></td>
                <td colspan="8">
                </td>
                <td colspan="10">
                    </td>
                    <td colspan="10"  style ={{textAlign: 'right'}}>
                        Власть :
                    </td>{headerArrShipovGovernment}
            </tr>
            </thead>
            <tbody>
                <UpperInfoRow info={this.props.state} userIsAuth={this.props.userIsAuth} />
                </tbody>
            </table> </div>        <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls-1895"
                    filename="Выпуски 1895-1912 гг."
                    sheet="tablexls"
                    buttonText="Скачать XLS"/>  </>:<div><img src={Krutilka} /></div>}
        {/* <FixedTable/> */}

        </>
    }
}




// const Header = (props) => {

//     let headerArr98Pleske = [1, 3, 5, 10, 100, 500].map(i => { return (<td ><NominalInfoSandbox thisYear = {1898} thisNominal={i} thisUpravl ={'Плеске'} /></td>) })
//     let headerArr99Pleske = [25, 50].map(i => { return (<td ><NominalInfoSandbox thisYear = {1899} thisNominal={i} thisUpravl ={'Плеске'}/></td>) })
//     let headerArr98Timashev = [1, 3, 5, 10, 100, 500].map(i => { return (<td ><NominalInfoSandbox thisYear = {1898} thisNominal={i} thisUpravl ={'Тимашев'}/></td>) })
//     let headerArr99Timashev = [25, 50].map(i => { return (<td ><NominalInfoSandbox thisYear = {1899} thisNominal={i} thisUpravl ={'Тимашев'}/></td>) })
//     let headerArr05Timashev = [3].map(i => { return (<td ><NominalInfoSandbox thisYear = {1905} thisNominal={i} thisUpravl ={'Тимашев'} /></td>) })
//     let headerArr09Timashev = [10].map(i => { return (<td ><NominalInfoSandbox thisYear = {1909} thisNominal={i} thisUpravl ={'Тимашев'} /></td>) })
//     let headerArr98Konshin = [1, 100, 500].map(i => { return (<td ><NominalInfoSandbox thisYear = {1898} thisNominal={i} thisUpravl ={'Коншин'} /></td>) })
//     let headerArr99Konshin = [50].map(i => { return (<td ><NominalInfoSandbox thisYear = {1899} thisNominal={i} thisUpravl ={'Коншин'} /></td>) })
//     let headerArr05Konshin = [3].map(i => { return (<td ><NominalInfoSandbox thisYear = {1905} thisNominal={i} thisUpravl ={'Коншин'} /></td>) })
//     let headerArr09Konshin = [5, 10, 25].map(i => { return (<td ><NominalInfoSandbox thisYear = {1909} thisNominal={i} thisUpravl ={'Коншин'}/></td>) })
//     let headerArr10Konshin = [100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1910} thisNominal={i} thisUpravl ={'Коншин'} /></td>) })
//     let headerArr12Konshin = [500].map(i => { return (<td ><NominalInfoSandbox thisYear = {1912} thisNominal={i} thisUpravl ={'Коншин'}/></td>) })
//     let headerArr98Shipov = [1].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1898} thisNominal={i} thisUpravl ={'Шипов'} /></td>) })
//     let headerArr99Shipov = [50].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1899} thisNominal={i} thisUpravl ={'Шипов'} /></td>) })
//     let headerArr05Shipov = [3].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1905} thisNominal={i} thisUpravl ={'Шипов'}/></td>) })
//     let headerArr09Shipov = [5, 10, 25].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1909} thisNominal={i} thisUpravl ={'Шипов'}/></td>) })
//     let headerArr10Shipov = [100].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1910} thisNominal={i} thisUpravl ={'Шипов'}/></td>) })
//     let headerArr12Shipov = [500].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1912} thisNominal={i} thisUpravl ={'Шипов'}/></td>) })


//     let headerArrShipovGovernment = [1, 50, 3, 5, 10, 25, 100, 500].map(i => {
//         return (<>
//             <td>
//                 <div className={styles.infoCell} title = {'Императорское правительство'}>И</div>
//             </td>
//             <td>
//                 <div className={styles.infoCell} title = {'Временное правительство'}>Вр</div>
//             </td>
//             <td>
//                 <div className={styles.infoCell} title = {'Советское правительство'}>С</div>
//             </td>
            
//         </>)
//     })
//     return (
//         <>
//             <tr style ={{background: "#f2eccf"}}>
//                 <td>Номинал</td>
//                 {headerArr98Pleske}{headerArr99Pleske}{headerArr98Timashev}{headerArr99Timashev}
//                 {headerArr05Timashev}{headerArr09Timashev}{headerArr98Konshin}{headerArr99Konshin}
//                 {headerArr05Konshin}{headerArr09Konshin}{headerArr10Konshin}{headerArr12Konshin}
//                 {headerArr98Shipov}{headerArr99Shipov}{headerArr05Shipov}{headerArr09Shipov}
//                 {headerArr10Shipov}{headerArr12Shipov}
//             </tr>
//             <tr style ={{background: "#f2eccf"}}>
//                 <td>Кассир</td>
//                 <td colspan="8">
//                 </td>
//                 <td colspan="10">
//                     </td>
//                     <td colspan="10"  style ={{textAlign: 'right'}}>
//                         Власть :
//                     </td>{headerArrShipovGovernment}
//             </tr>
//         </>
//     )
// }

export default MainTable


