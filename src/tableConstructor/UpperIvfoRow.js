import React, { Component } from 'react'
import AddingFormSandbox from './../components/Information/AddingForm/AddingFormSandbox'
import styles from './UpperInfoRow.module.css'
import CommonWindowContainer from './../components/Information/CommonWindow/CommonWindowContainer'

const UpperInfoRow = (props) => {
    let rowsArray = props.info.map(i => <InfoRow key={i.id} info={i} userIsAuth={props.userIsAuth} />)
    return (
        <>
            {rowsArray}
        </>
    )
}

const InfoRow = (props) => {
    let info = props.info.row
    let nominalsArr = []
    info.map(item => { 
      for(let i = 0; i < item.nominals.length; i++){
        nominalsArr = nominalsArr.concat(item.nominals[i])
    }})
    let concatArray = []
    for(let i = 0; i < nominalsArr.length; i++){
        concatArray = concatArray.concat(nominalsArr[i].state)}

    let catalogArray = concatArray.map((item) => {
        return (<>

            <td>{item.status ? <div className={styles.infoCell}><CommonWindowContainer description={item} />
            </div> :
                <div className={styles.infoCell} ><AddingFormSandbox description={item} sign={'+'} />
                </div>}
            </td>
        </>
        )
    })
    return (
        <>
            <tr >
                <td >{props.info.kassir}</td>
                {catalogArray}
            </tr>
        </>)

}
export default UpperInfoRow