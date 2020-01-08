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
            {!this.props.state.preloader? <table className={styles.tablestyle} width="80%" border="1" cellpadding="4" >

                <tr>
                    <td>Управляющий</td>
                    <td colspan="24">Ростовцев</td>
                    <td colspan="78">Ламанский</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="24"><YearInfoSandbox thisYear={1858} info={this.props.state.catalogItems58} /></td>
                    <td colspan="21"><YearInfoSandbox thisYear={1859} info={this.props.state.catalogItems58} /></td>
                    <td colspan="15"><YearInfoSandbox thisYear={1860} info={this.props.state.catalogItems58} /></td>
                    <td colspan="20"><YearInfoSandbox thisYear={1861} info={this.props.state.catalogItems58} /></td>
                    <td colspan="22"><YearInfoSandbox thisYear={1862} info={this.props.state.catalogItems58} /></td>
                </tr>
                <Header state={this.props.state.catalogItems58} />

                    <UpperInfoRow info={this.props.state.catalogItems58} userIsAuth={this.props.userIsAuth} />
            </table>: <div><img src={Krutilka} /></div>}
        </div>
    }
}

const Header = (props) => {

    let headerArr58 = [1, 3, 5, 10].map(i => { return (<td colspan="6"><NominalInfoSandbox thisYear={1858} thisNominal={i} info={props.state} /></td>) })
    let headerArrDir58 = [1, 3, 5, 10].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Поморский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Семенов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ч
                <div className={styles.infoCellDetail}>Чухломин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ш
                <div className={styles.infoCellDetail}>Шитц</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Щ
                <div className={styles.infoCellDetail}>Щерба</div>
                </div>
            </td>
        </>)
    })
    let headerArr59 = [1, 3, 5].map(i => { return (<td colspan="7"><NominalInfoSandbox thisYear={1859} thisNominal={i} info={props.state} /></td>) })
    let headerArrDir59 = [1, 3, 5].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Б
                <div className={styles.infoCellDetail}>Березайский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Павловский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Семенов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ч
                <div className={styles.infoCellDetail}>Чухломин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Ш
                <div className={styles.infoCellDetail}>Шитц</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Щ
                <div className={styles.infoCellDetail}>Щерба</div>
                </div>
            </td>
        </>)
    })
    let headerArr60 = [1, 3, 5].map(i => { return (<td colspan="5"><NominalInfoSandbox thisYear={1860} thisNominal={i} info={props.state} /></td>) })
    let headerArrDir60 = [1, 3, 5].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Б
                <div className={styles.infoCellDetail}>Березайский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Павловский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Семенов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Щ
                <div className={styles.infoCellDetail}>Щерба</div>
                </div>
            </td>
        </>)
    })
    let headerArr61 = [1, 3, 5, 10].map(i => { return (<td colspan="5"><NominalInfoSandbox thisYear={1861} thisNominal={i} info={props.state} /></td>) })
    let headerArrDir61 = [1, 3, 5, 10].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Б
                <div className={styles.infoCellDetail}>Березайский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Павловский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Семенов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Щ
                <div className={styles.infoCellDetail}>Щерба</div>
                </div>
            </td>
        </>)

    })
    let headerArr62 = [1, 3].map(i => { return (<td colspan="11"><NominalInfoSandbox thisYear={1862} thisNominal={i} info={props.state} /></td>) })
    let headerArrDir62 = [1, 3].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>Б
                <div className={styles.infoCellDetail}>Березайский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Л
                <div className={styles.infoCellDetail}>Лихошерстов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Н
                <div className={styles.infoCellDetail}>Наумов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>П
                <div className={styles.infoCellDetail}>Павловский</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Р
                <div className={styles.infoCellDetail}>Рорбек</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>С
                <div className={styles.infoCellDetail}>Семенов</div>
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
                <div className={styles.infoCell}>Щ
                <div className={styles.infoCellDetail}>Щерба</div>
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
                {headerArr58}{headerArr59}{headerArr60}{headerArr61}{headerArr62}
            </tr>
            <tr>
                <td>Кассир</td>
                {headerArrDir58}{headerArrDir59}{headerArrDir60}{headerArrDir61}{headerArrDir62}
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


    let propsObj = props.info.row
    let concatArray = propsObj[0].nominals[0].state.concat(propsObj[0].nominals[1].state, propsObj[0].nominals[2].state,
        propsObj[0].nominals[3].state, propsObj[1].nominals[0].state, propsObj[1].nominals[1].state, propsObj[1].nominals[2].state, propsObj[2].nominals[0].state,
        propsObj[2].nominals[1].state,
        propsObj[2].nominals[2].state,
        propsObj[3].nominals[0].state,
        propsObj[3].nominals[1].state,
        propsObj[3].nominals[2].state,
        propsObj[3].nominals[3].state,
        propsObj[4].nominals[0].state,
        propsObj[4].nominals[1].state,

    )


    let catalogArray = concatArray.map((item) => {
        return (<>

            <td>{item.status ? <div className={styles.infoCell}><CommonWindowContainer description={item} />
                <div className={styles.infoCellDetail}>Смотреть информацию</div>
            </div> :
                <div className={styles.infoCell}><AddingFormSandbox description={item} sign={'+'} />
                    <div className={styles.infoCellDetail}>Запрос на добавление в каталог</div></div>}
            </td>
        </>
        )
    })
    return (
        <>
            <tr>
                <td>{props.info.kassir}</td>
                {catalogArray}
            </tr>
        </>)

}
export default MainTable


