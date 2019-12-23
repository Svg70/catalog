import React, { Component } from 'react'
import Sandbox from '../Information/modal/Sandbox'
import AddingFormSandbox from '../Information/AddingForm/AddingFormSandbox'
import YearInfoSandbox from '../Information/yearInfo/yearInfoSandbox'
import NominalInfoSandbox from '../Information/nominalInfo/nominalInfoSandbox'
import styles from './mainTable.module.css'
import { dal } from '../../dal/dal'
import AdminAddingFormSandbox from '../Information/AdminAddingForm copy/AdminAddingFormSandbox'
import AdminNumbersAddingFormSandboxContainer from '../Information/AdminNumbersAddingForm/AdminNumbersAddingFormSandbox'

class MainTable extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }

    render() {

        return <div>
            <table className={styles.tablestyle} width="80%" border="1" cellpadding="4" >

                <tr>
                    <td>Кассир</td>
                    <td colspan="96">Ростовцев</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="42"><YearInfoSandbox year='1855' /></td>
                    <td colspan="36"><YearInfoSandbox year='1856' /></td>
                    <td colspan="18"><YearInfoSandbox year='1857' /></td>
                </tr>
                <Header state={this.props.state.catalogItems[0]} />
                <UpperInfoRow info={this.props.state.catalogItems} adminIsAuth={this.props.state.adminIsAuth} />
            </table>
        </div>
    }
}

const Header = (props) => {

    let headerArr = props.state.consistOf.map(i => { return (<td colspan="6"><NominalInfoSandbox i={i} /></td>) })
    let headerArrDir = props.state.consistOf.map(i => {
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
            <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Поморский</div>
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
            <td>
            <div className={styles.infoCell}>Щ
                <div className={styles.infoCellDetail}>Щерба</div>
                </div>
            </td>
        </>)
    })
    return (
        <>
            <tr>
                <td>Номинал</td>
                {headerArr}
            </tr>
            <tr>
                <td>Кассир</td>
                {headerArrDir}
            </tr>
        </>
    )
}


const UpperInfoRow = (props) => {
    let rowsArray = props.info.map(i => <InfoRow key={i.id} info={i} adminIsAuth={props.adminIsAuth} />)
    return (
        <>
            {rowsArray}
        </>
    )
}

const InfoRow = (props) => {

    let propsObj = props.info
    let concatArray = propsObj.nominals[0].state.concat(propsObj.nominals[1].state, propsObj.nominals[2].state,
        propsObj.nominals[3].state, propsObj.nominals[4].state, propsObj.nominals[5].state, propsObj.nominals[6].state, propsObj.nominals[7].state,
        propsObj.nominals[8].state,
        propsObj.nominals[9].state,
        propsObj.nominals[10].state,
        propsObj.nominals[11].state,
        propsObj.nominals[12].state,
        propsObj.nominals[13].state,
        propsObj.nominals[14].state,
        propsObj.nominals[15].state

    )
    console.log(concatArray)

    // renderSwitch(param) {
    //     switch(param) {
    //       case 'foo':
    //         return 'bar';
    //       default:
    //         return 'foo';
    //     }
    //   }



    let catalogArray = concatArray.map((item) => {
        return (<>{props.adminIsAuth ? <td>

            {item.status ? <div className={styles.infoCell}><AdminNumbersAddingFormSandboxContainer item={item} />
                <div className={styles.infoCellDetail}>добавление в уже существующую запись</div>
            </div> :
                <div className={styles.infoCell}><AdminAddingFormSandbox item={item} />
                    <div className={styles.infoCellDetail}>добавление ранее не зарегистрированной поиции</div></div>}

        </td> :
            <td>{item.status ? <div className={styles.infoCell}><Sandbox description={item.description} />
                <div className={styles.infoCellDetail}>Смотреть информацию</div>
            </div> :
                <div className={styles.infoCell}><AddingFormSandbox description={item.description} />
                    <div className={styles.infoCellDetail}>Запрос на добавление в каталог</div></div>}
            </td>}
        </>
        )
    })
    return (
        <tr>
            <td>{propsObj.kassir}</td>
            {catalogArray}
        </tr>)

}
export default MainTable


