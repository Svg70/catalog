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
            {!this.props.preloader ? <table className={styles.tablestyle} width="80%" border="1" cellpadding="4" >

                <tr>
                    <td>Управляющий</td>
                    <td colspan="38">Ламанский</td>
                    <td colspan="18">Цимсен</td>
                    <td colspan="14">Жуковский</td>
                    <td colspan="8">Плеске</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="7"><YearInfoSandbox thisYear={1866} /></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1870} /></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1872} /></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1874} /></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1876} /></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1878} /></td>
                    <td colspan="4"><YearInfoSandbox thisYear={1880} /></td>
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
                <UpperInfoRow info={this.props.state} userIsAuth={this.props.userIsAuth} />
            </table>:<div><img src={Krutilka} /></div>}
        </div>
    }
}




const Header = (props) => {

    let headerArr66 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1866} thisNominal={i}  /></td>) })
    let headerArr70 = [1, 5, 10, 25, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1870} thisNominal={i} /></td>) })
    let headerArr72 = [1, 3, 5, 10, 25, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1872} thisNominal={i} /></td>) })
    let headerArr74 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1874} thisNominal={i} /></td>) })
    let headerArr76 = [1, 3, 5, 10, 25, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1876} thisNominal={i}  /></td>) })
    let headerArr78 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1878} thisNominal={i} /></td>) })
    let headerArr80 = [1, 3, 5, 10].map(i => { return (<td ><NominalInfoSandbox thisYear = {1880} thisNominal={i} /></td>) })
    let headerArr82 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1882} thisNominal={i} /></td>) })
    let headerArr84 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1884} thisNominal={i}  /></td>) })
    let headerArr86 = [1, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1886} thisNominal={i} /></td>) })
    let headerArr87 = [1, 3, 5, 10, 25].map(i => { return (<td ><NominalInfoSandbox thisYear = {1887} thisNominal={i} /></td>) })
    let headerArr89 = [1, 3, 5, 10].map(i => { return (<td ><NominalInfoSandbox thisYear = {1889} thisNominal={i} /></td>) })
    let headerArr90 = [1, 3, 5, 10, 25].map(i => { return (<td ><NominalInfoSandbox thisYear = {1890} thisNominal={i}  /></td>) })
    let headerArr92 = [1, 3, 5, 10, 25, 25].map(i => { return (<td ><NominalInfoSandbox thisYear = {1892} thisNominal={i} /></td>) })
    let headerArr94 = [1, 3, 5, 10].map(i => { return (<td ><NominalInfoSandbox thisYear = {1894} thisNominal={i} /></td>) })
    let headerArr95 = [1, 3, 5].map(i => { return (<td ><NominalInfoSandbox thisYear = {1895} thisNominal={i} /></td>) })
    
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


