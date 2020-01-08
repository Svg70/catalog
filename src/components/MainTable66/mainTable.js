import React, { Component } from 'react'
import AddingFormSandbox from '../Information/AddingForm/AddingFormSandbox'
import YearInfoSandbox from '../Information/yearInfo/yearInfoSandbox'
import NominalInfoSandbox from '../Information/nominalInfo/nominalInfoSandbox'
import styles from './mainTable.module.css'
import CommonWindowContainer from '../Information/CommonWindow/CommonWindowContainer'
import { useSelector } from 'react-redux'
import Krutilka from './../../images/preloader.gif'
class MainTable extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }

    render() {
        return <div>
            {Object.keys(this.props.state).length !== 0 ? <table className={styles.tablestyle} width="80%" border="1" cellpadding="4" >

                <tr>
                    <td>Управляющий</td>
                    <td colspan="38">Ламанский</td>
                    <td colspan="18">Цимсен</td>
                    <td colspan="14">Жуковский</td>
                    <td colspan="8">Плеске</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="7"><YearInfoSandbox thisYear={1866} info={this.props.state.catalogItems66}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1870} info={this.props.state.catalogItems66}/></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1872} info={this.props.state.catalogItems66}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1874} info={this.props.state.catalogItems66}/></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1876} info={this.props.state.catalogItems66}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1878} info={this.props.state.catalogItems66}/></td>
                    <td colspan="4"><YearInfoSandbox thisYear={1880} info={this.props.state.catalogItems66}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1882} info={this.props.state.catalogItems66}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1884} info={this.props.state.catalogItems66}/></td>
                    <td colspan="3"><YearInfoSandbox thisYear={1886} info={this.props.state.catalogItems66}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1887} info={this.props.state.catalogItems66}/></td>
                    <td colspan="4"><YearInfoSandbox thisYear={1889} info={this.props.state.catalogItems66}/></td>
                    <td colspan="5"><YearInfoSandbox thisYear={1890} info={this.props.state.catalogItems66}/></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1892} info={this.props.state.catalogItems66}/></td>
                    <td colspan="4"><YearInfoSandbox thisYear={1894} info={this.props.state.catalogItems66}/></td>
                    <td colspan="3"><YearInfoSandbox thisYear={1895} info={this.props.state.catalogItems66}/></td>
                </tr>
                <Header state={this.props.state.catalogItems43} />
                <UpperInfoRow info={this.props.state.catalogItems43} userIsAuth={this.props.userIsAuth} />
            </table>:<div><img src={Krutilka} /></div>}
        </div>
    }
}




const Header = (props) => {

    let headerArr66 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1843} thisNominal={i} info={props.state} /></td>) })
    let headerArr70 = [1, 5, 10, 25, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1847} thisNominal={i} info={props.state}/></td>) })
    let headerArr72 = [1, 3, 5, 10, 25, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1851} thisNominal={i} info={props.state}/></td>) })
    let headerArr74 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1854} thisNominal={i} info={props.state}/></td>) })
    let headerArr76 = [1, 3, 5, 10, 25, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1843} thisNominal={i} info={props.state} /></td>) })
    let headerArr78 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1847} thisNominal={i} info={props.state}/></td>) })
    let headerArr80 = [1, 3, 5, 10].map(i => { return (<td ><NominalInfoSandbox thisYear = {1851} thisNominal={i} info={props.state}/></td>) })
    let headerArr82 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1854} thisNominal={i} info={props.state}/></td>) })
    let headerArr84 = [1, 3, 5, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1843} thisNominal={i} info={props.state} /></td>) })
    let headerArr86 = [1, 10, 100].map(i => { return (<td ><NominalInfoSandbox thisYear = {1847} thisNominal={i} info={props.state}/></td>) })
    let headerArr87 = [1, 3, 5, 10, 25].map(i => { return (<td ><NominalInfoSandbox thisYear = {1851} thisNominal={i} info={props.state}/></td>) })
    let headerArr89 = [1, 3, 5, 10].map(i => { return (<td ><NominalInfoSandbox thisYear = {1854} thisNominal={i} info={props.state}/></td>) })
    let headerArr90 = [1, 3, 5, 10, 25].map(i => { return (<td ><NominalInfoSandbox thisYear = {1843} thisNominal={i} info={props.state} /></td>) })
    let headerArr92 = [1, 3, 5, 10, 25, 25].map(i => { return (<td ><NominalInfoSandbox thisYear = {1847} thisNominal={i} info={props.state}/></td>) })
    let headerArr94 = [1, 3, 5, 10].map(i => { return (<td ><NominalInfoSandbox thisYear = {1851} thisNominal={i} info={props.state}/></td>) })
    let headerArr95 = [1, 3, 5].map(i => { return (<td ><NominalInfoSandbox thisYear = {1854} thisNominal={i} info={props.state}/></td>) })
    
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


const UpperInfoRow = (props) => {
    
    let rowsArray = props.info.map(i => <InfoRow key={i.id} info={i} userIsAuth={props.userIsAuth} />)
    return (
        <>
            {rowsArray}
        </>
    )
}

const InfoRow = (props) => {
let preloader = useSelector(store => store.AdminCatalog.preloader)

    let propsObj = props.info.row
    let concatArray = propsObj[0].nominals[0].state.concat(propsObj[0].nominals[1].state, propsObj[0].nominals[2].state,
        propsObj[0].nominals[3].state, propsObj[0].nominals[4].state, propsObj[0].nominals[5].state, propsObj[0].nominals[6].state, propsObj[1].nominals[0].state,
        propsObj[1].nominals[1].state,
        propsObj[1].nominals[2].state,
        propsObj[1].nominals[3].state,
        propsObj[1].nominals[4].state,
        propsObj[1].nominals[5].state,
        propsObj[1].nominals[6].state,
        propsObj[2].nominals[1].state,
        propsObj[2].nominals[1].state,
        propsObj[2].nominals[2].state,
        propsObj[2].nominals[3].state,
        propsObj[2].nominals[4].state,
        propsObj[2].nominals[5].state,
        propsObj[2].nominals[6].state,
        propsObj[3].nominals[0].state,
        propsObj[3].nominals[1].state,
        propsObj[3].nominals[2].state,
        propsObj[3].nominals[3].state)


    let catalogArray = concatArray.map((item) => {
        return (<>
        
         <td>{item.status ? <div className={styles.infoCell}><CommonWindowContainer description={item} />
                <div className={styles.infoCellDetail}>Смотреть информацию</div>
            </div> :
                <div className={styles.infoCell}><AddingFormSandbox description={item} sign ={'+'} />
                    <div className={styles.infoCellDetail}>Запрос на добавление в каталог</div></div>}
            </td> 
        </>
        )
    })
    return (
        <>
        {preloader && <img src={Krutilka} />}
        {!preloader && <tr>
            <td>{props.info.kassir}</td>
            {catalogArray}
        </tr>}
        </>)

}
export default MainTable


