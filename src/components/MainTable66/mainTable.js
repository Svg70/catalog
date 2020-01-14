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
            {!this.props.preloader ? 
            <>
            {/* <table className = {styles.fixedHeader}>

            <thead >
                <tr  >
                    <td>Управляющий</td>
                    <td colspan="38" >Ламанский</td>
                    <td colspan="18" >Цимсен</td>
                    <td colspan="14" >Жуковский</td>
                    <td colspan="8" >Плеске</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="7"><YearInfoSandbox thisYear={1866} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1870} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1872} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1874} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1876} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1878} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="4"><YearInfoSandbox thisYear={1880} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1882} /></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1884} /></td>
                    <td colspan="3"><YearInfoSandbox thisYear={1886} /></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1887} /></td>
                    <td colspan="4"><YearInfoSandbox thisYear={1889} /></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1890} /></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1892} /></td>
                    <td colspan="4"><YearInfoSandbox thisYear={1894} /></td>
                    <td colspan="3"><YearInfoSandbox thisYear={1895} /></td>
                </tr>
                <Header />
                </thead>
            </table> */}
            <table className={styles.tablestyle} width="80%" border="1" cellpadding="4" >
                <thead >
                <tr  >
                    <td>Управляющий</td>
                    <td colspan="38" >Ламанский</td>
                    <td colspan="18" >Цимсен</td>
                    <td colspan="14" >Жуковский</td>
                    <td colspan="8" >Плеске</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="7"><YearInfoSandbox thisYear={1866} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1870} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1872} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1874} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1876} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1878} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="4"><YearInfoSandbox thisYear={1880} thisUpravl ={'Ламанский'}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1882} thisUpravl ={'Цимсен'}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1884} thisUpravl ={'Цимсен'}/></td>
                    <td colspan="3"><YearInfoSandbox thisYear={1886} thisUpravl ={'Цимсен'}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1887} thisUpravl ={'Цимсен'}/></td>
                    <td colspan="4"><YearInfoSandbox thisYear={1889} thisUpravl ={'Жуковский'}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1890} thisUpravl ={'Жуковский'}/></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1892} thisUpravl ={'Жуковский'}/></td>
                    <td colspan="4"><YearInfoSandbox thisYear={1894} thisUpravl ={'Плеске'}/></td>
                    <td colspan="3"><YearInfoSandbox thisYear={1895} thisUpravl ={'Плеске'}/></td>
                </tr>
                <Header />
                </thead>
                <tbody className = {styles.tableBody}>
                <UpperInfoRow info={this.props.state} userIsAuth={this.props.userIsAuth} />
                </tbody>
            </table>
            </>
            :<div><img src={Krutilka} /></div>}
        </div>
    }
}




const Header = (props) => {

    let headerArr66 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1866} thisNominal={i} thisUpravl ={'Ламанский'} /></td>) })
    let headerArr70 = [1, 5, 10, 25, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1870} thisNominal={i} thisUpravl ={'Ламанский'}/></td>) })
    let headerArr72 = [1, 3, 5, 10, 25, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1872} thisNominal={i} thisUpravl ={'Ламанский'}/></td>) })
    let headerArr74 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1874} thisNominal={i} thisUpravl ={'Ламанский'}/></td>) })
    let headerArr76 = [1, 3, 5, 10, 25, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1876} thisNominal={i} thisUpravl ={'Ламанский'} /></td>) })
    let headerArr78 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1878} thisNominal={i} thisUpravl ={'Ламанский'} /></td>) })
    let headerArr80 = [1, 3, 5, 10].map(i => { return (<td ><NominalInfoSandbox thisYear = {1880} thisNominal={i} thisUpravl ={'Ламанский'}/></td>) })
    let headerArr82 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1882} thisNominal={i} thisUpravl ={'Цимсен'}/></td>) })
    let headerArr84 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1884} thisNominal={i} thisUpravl ={'Цимсен'} /></td>) })
    let headerArr86 = [1, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1886} thisNominal={i} thisUpravl ={'Цимсен'}/></td>) })
    let headerArr87 = [1, 3, 5, 10, 25].map(i => { return (<td ><NominalInfoSandbox thisYear = {1887} thisNominal={i} thisUpravl ={'Цимсен'}/></td>) })
    let headerArr89 = [1, 3, 5, 10].map(i => { return (<td ><NominalInfoSandbox thisYear = {1889} thisNominal={i} thisUpravl ={'Жуковский'}/></td>) })
    let headerArr90 = [1, 3, 5, 10, 25].map(i => { return (<td ><NominalInfoSandbox thisYear = {1890} thisNominal={i}  thisUpravl ={'Жуковский'}/></td>) })
    let headerArr92 = [1, 3, 5, 10, 25].map(i => { return (<td ><NominalInfoSandbox thisYear = {1892} thisNominal={i} thisUpravl ={'Жуковский'}/></td>) })
    let headerArr94 = [25, 1, 3, 5, 10].map(i => { return (<td ><NominalInfoSandbox thisYear = {1894} thisNominal={i} thisUpravl ={'Плеске'}/></td>) })
    let headerArr95 = [1, 3, 5].map(i => { return (<td ><NominalInfoSandbox thisYear = {1895} thisNominal={i} thisUpravl ={'Плеске'}/></td>) })
    
    return (
        <>
            <tr>
                <td>Номинал</td>
                {headerArr66}{headerArr70}{headerArr72}{headerArr74}
                {headerArr76}{headerArr78}{headerArr80}{headerArr82}
                {headerArr84}{headerArr86}{headerArr87}{headerArr89}
                {headerArr90}{headerArr92}{headerArr94}{headerArr95}
            </tr>
        </>
    )
}

export default MainTable


