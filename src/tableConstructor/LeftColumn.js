import React, { Component } from 'react'
import AddingFormSandbox from './../components/Information/AddingForm/AddingFormSandbox'
import styles from './UpperInfoRow.module.css'
import CommonWindowContainer from './../components/Information/CommonWindow/CommonWindowContainer'

const LeftColumn = (props) => {
    let rowsArray = props.info.map(i => <InfoRow key={i.id} info={i} userIsAuth={props.userIsAuth} />)
    return (
        <>
        <table     style = {{position: 'absolute', zIndex: '2', top: '0px'}}></table>
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
            <tr style = {{backgroundColor: '#E0FFFF'}}>
                <td style = {{backgroundColor: '#7FFFD4'}}>{props.info.kassir}</td>
                
                </tr>
        </>)

}
export default LeftColumn