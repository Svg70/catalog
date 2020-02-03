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
    let cellColor = props.info.id %2 != 0 ? "#d3d2d2": "white"
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
                <div className={styles.infoCell} ><AddingFormSandbox description={item} sign={'O'} />
                </div>}
            </td>
        </>
        )
    })
    return (
        <>
            <tr style = {{background: cellColor}}>
                <td style = {{backgroundColor: cellColor, position: ''}}><div >{props.info.kassir}</div></td>
                {catalogArray}
                </tr>
        </>)

}
export default UpperInfoRow
