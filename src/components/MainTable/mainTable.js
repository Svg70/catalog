import React, { Component } from 'react'
import Sandbox from '../Information/modal/Sandbox'
import AddingFormSandbox from '../Information/AddingForm/AddingFormSandbox'
import YearInfoSandbox from '../Information/yearInfo/yearInfoSandbox'
import NominalInfoSandbox from '../Information/nominalInfo/nominalInfoSandbox'
import styles from './mainTable.module.css'

class MainTable extends Component {
    constructor(props) {
        super(props)

    }

    render() {



        return <div>
            
        <table className = {styles.tablestyle} width="80%" border="1" cellpadding="4" >
                <caption>'Here will be best bonistics catalog'</caption>
                <tr>
                    <td>Кассир</td>
                    <td colspan="42">Ростовцев</td>
                </tr>
                <tr>
                    <td>Год</td>
                    <td colspan="42"><YearInfoSandbox/></td>
                </tr>
                <Header state={this.props.catalogItems[0]} />
                <UpperInfoRow info={this.props.catalogItems} />

                {/* <tr>
                    
                {catalogArray}
                </tr> */}

            </table>
        </div>
    }
}

const Header = (props) => {

    let headerArr = props.state.consistOf.map(i => { return (<td colspan="6"><NominalInfoSandbox i ={i} /></td>) })
    let headerArrDir = props.state.consistOf.map(i => {
        return (<>
            <td>В</td>
            <td>Л</td>
            <td>П</td>
            <td>С</td>
            <td>Ч</td>
            <td>Щ</td>
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
    let rowsArray = props.info.map( i => <InfoRow info = {i}/>)
    return(
        <>
        {rowsArray}
        </>
        )
}

const InfoRow = (props) => {
    debugger

        let propsObj = props.info
        let concatArray = propsObj.oneRuble.state.concat(propsObj.threeRuble.state, propsObj.fiveRuble.state,
            propsObj.tenRuble.state, propsObj.twentyFiveRuble.state, propsObj.fiftyRuble.state, propsObj.oneHundredRuble.state
        )
        console.log(concatArray)
        let catalogArray = concatArray.map((item) => {
            return (
                <td>{item.status ? <div className = {styles.infoCell}><Sandbox description ={item.description}/>
                <div className = {styles.infoCellDetail}>Смотреть информацию</div>
                </div> :
                <div className = {styles.infoCell}><AddingFormSandbox description ={item.description}/>
                <div className = {styles.infoCellDetail}>Запрос на добавление в каталог</div></div>}</td>
            )
        })
        return (
            <tr>
                <td>{propsObj.kassir}</td>
                {catalogArray}

            </tr>)

}

// let catalogArray = this.props.state.catalogItems.map((item) => { return (<InfoRow kassir={item.kassir} number={item.number} items={item.items} />) })



export default MainTable


