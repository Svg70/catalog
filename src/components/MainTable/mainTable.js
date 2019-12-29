import React, { Component } from 'react'
import AddingFormSandbox from '../Information/AddingForm/AddingFormSandbox'
import YearInfoSandbox from '../Information/yearInfo/yearInfoSandbox'
import NominalInfoSandbox from '../Information/nominalInfo/nominalInfoSandbox'
import styles from './mainTable.module.css'
import { dal } from '../../dal/dal'
import AdminAddingFormSandbox from '../Information/AdminAddingForm copy/AdminAddingFormSandbox'
import AdminNumbersAddingFormSandboxContainer from '../Information/AdminNumbersAddingForm/AdminNumbersAddingFormSandbox'
import CommonWindowContainer from '../Information/CommonWindow/CommonWindowContainer'

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
                    <td colspan="108">Ростовцев</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="42"><YearInfoSandbox year='1855' /></td>
                    <td colspan="42"><YearInfoSandbox year='1856' /></td>
                    <td colspan="24"><YearInfoSandbox year='1857' /></td>
                </tr>
                <Header state={this.props.state.catalogItems[0]} />
                <UpperInfoRow info={this.props.state.catalogItems} userIsAuth={this.props.userIsAuth} />
            </table>
        </div>
    }
}




const Header = (props) => {

    let headerArr55 = [1, 3, 5, 10, 25, 50, 100].map(i => { return (<td colspan="6"><NominalInfoSandbox i={i} /></td>) })
    let headerArrDir55 = [1, 3, 5, 10, 25, 50, 100].map(i => {
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
    let headerArr56 = [1, 3, 5, 10, 25, 50].map(i => { return (<td colspan="7"><NominalInfoSandbox i={i} /></td>) })
    let headerArrDir56 = [1, 3, 5, 10, 25, 50].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>В
                <div className={styles.infoCellDetail}>Владимирцов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
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
    let headerArr57 = [1, 3, 5].map(i => { return (<td colspan="8"><NominalInfoSandbox i={i} /></td>) })
    let headerArrDir57 = [1, 3, 5 ].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell}>В
                <div className={styles.infoCellDetail}>Владимирцов</div>
                </div>
            </td>
            <td>
                <div className={styles.infoCell}>Е
                <div className={styles.infoCellDetail}>Ерогин</div>
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
    return (
        <>
            <tr>
                <td>Номинал</td>
                {headerArr55}{headerArr56}{headerArr57}
            </tr>
            <tr>
                <td>Кассир</td>
            {headerArrDir55}{headerArrDir56}{headerArrDir57}
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
    let propsObj = props.info
    let concatArray = props.info.row

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
        return (<>
            <td>{item.status ? <div className={styles.infoCell}><CommonWindowContainer description={item} />
                <div className={styles.infoCellDetail}>Смотреть информацию</div>
            </div> :
                <div className={styles.infoCell}><AddingFormSandbox description={item} />
                    <div className={styles.infoCellDetail}>Запрос на добавление в каталог</div></div>}
            </td>
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


