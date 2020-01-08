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
                    <td colspan="101">Ламанский</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="30"><YearInfoSandbox thisYear={1863} info={this.props.state.catalogItems63}/></td>
                    <td colspan="36"><YearInfoSandbox thisYear={1864} info={this.props.state.catalogItems63}/></td>
                    <td colspan="35"><YearInfoSandbox thisYear={1865} info={this.props.state.catalogItems63}/></td>
                </tr>
                <Header state={this.props.state.catalogItems63} />
                <UpperInfoRow info={this.props.state.catalogItems63} userIsAuth={this.props.userIsAuth} />
            </table>:<div><img src={Krutilka} /></div>}
        </div>
    }
}

const Header = (props) => {

    let headerArr63 = [1, 3, 5, 10, 100].map(i => { return (<td colspan="6"><NominalInfoSandbox thisYear = {1863} thisNominal={i} info={props.state} /></td>) })
    let headerArrDir63 = [1, 3, 5, 10, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Л
                <div className={styles.infoCellDetail}>Лихошерстов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>H
                <div className={styles.infoCellDetail}>Наумов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>P
                <div className={styles.infoCellDetail}>Рорбек</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ф
                <div className={styles.infoCellDetail}>Фревиль</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ш
                <div className={styles.infoCellDetail}>Шилов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Э
                <div className={styles.infoCellDetail}>Эстеррейх</div>
                </div>
            </td>
        </>)
    })
    let headerArr64 = [1, 3, 5, 10, 25, 50].map(i => { return (<td colspan="6"><NominalInfoSandbox thisYear = {1864} thisNominal={i} info={props.state}/></td>) })
    let headerArrDir64 = [1, 3, 5, 10, 25, 50].map(i => {
        return (<>
                        <td>
                <div className={styles.infoCell}>Л
                <div className={styles.infoCellDetail}>Лихошерстов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>H
                <div className={styles.infoCellDetail}>Наумов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>P
                <div className={styles.infoCellDetail}>Рорбек</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ф
                <div className={styles.infoCellDetail}>Фревиль</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ш
                <div className={styles.infoCellDetail}>Шилов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Э
                <div className={styles.infoCellDetail}>Эстеррейх</div>
                </div>
            </td>
        </>)
    })
    let headerArr65 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="5"><NominalInfoSandbox thisYear = {1865} thisNominal={i} info={props.state}/></td>) })
    let headerArrDir65 = [1, 3, 5, 10, 25, 50, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Н
                <div className={styles.infoCellDetail}>Наумов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Р
                <div className={styles.infoCellDetail}>Рорбек</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ф
                <div className={styles.infoCellDetail}>Фревиль</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ш
                <div className={styles.infoCellDetail}>Шилов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Э
                <div className={styles.infoCellDetail}>Эстеррейх</div>
                </div>
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
        propsObj[0].nominals[3].state, propsObj[0].nominals[4].state, propsObj[1].nominals[0].state, propsObj[1].nominals[1].state, propsObj[1].nominals[2].state,
        propsObj[1].nominals[3].state,
        propsObj[1].nominals[4].state,
        propsObj[1].nominals[5].state,
        propsObj[2].nominals[0].state,
        propsObj[2].nominals[1].state,
        propsObj[2].nominals[2].state,
        propsObj[2].nominals[3].state,
        propsObj[2].nominals[4].state,
        propsObj[2].nominals[5].state,
        propsObj[2].nominals[6].state,
        
        )


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


