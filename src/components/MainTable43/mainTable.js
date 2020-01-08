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
                    <td colspan="63">Халчинский</td>
                    <td colspan="16">Юрьев</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="21"><YearInfoSandbox thisYear={1843} info={this.props.state.catalogItems43}/></td>
                    <td colspan="14"><YearInfoSandbox thisYear={1847} info={this.props.state.catalogItems43}/></td>
                    <td colspan="28"><YearInfoSandbox thisYear={1851} info={this.props.state.catalogItems43}/></td>
                    <td colspan="16"><YearInfoSandbox thisYear={1854} info={this.props.state.catalogItems43}/></td>
                </tr>
                <Header state={this.props.state.catalogItems43} />
                <UpperInfoRow info={this.props.state.catalogItems43} userIsAuth={this.props.userIsAuth} />
            </table>:<div><img src={Krutilka} /></div>}
        </div>
    }
}




const Header = (props) => {

    let headerArr43 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear = {1843} thisNominal={i} info={props.state} /></td>) })
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
    let headerArr47 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="2"><NominalInfoSandbox thisYear = {1847} thisNominal={i} info={props.state}/></td>) })
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
    let headerArr51 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="4"><NominalInfoSandbox thisYear = {1851} thisNominal={i} info={props.state}/></td>) })
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
    let headerArr54 = [1, 3, 5, 10].map(i => { return (<td colspan="4"><NominalInfoSandbox thisYear = {1854} thisNominal={i} info={props.state}/></td>) })
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
        propsObj[2].nominals[0].state,
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


