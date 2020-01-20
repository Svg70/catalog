import React, { Component } from 'react'
import AddingFormSandbox from '../Information/AddingForm/AddingFormSandbox'
import YearInfoSandbox from '../Information/yearInfo/yearInfoSandbox'
import NominalInfoSandbox from '../Information/nominalInfo/nominalInfoSandbox'
import styles from './mainTable.module.css'
import CommonWindowContainer from '../Information/CommonWindow/CommonWindowContainer'
import { useSelector } from 'react-redux'
import Krutilka from './../../images/preloader.gif'
import UpperInfoRow from '../../tableConstructor/UpperIvfoRow'
class MainTable extends Component {
    render() {
        return <div className={styles.scrollArea}>
            {!this.props.preloader ? <table className={styles.tablestyle} width="80%" border="1" cellpadding="4" >


                <tr>
                    <td>Год</td>
                    <td colspan="4"><YearInfoSandbox thisYear={1917} thisUpravl={'Шипов'} /></td>
                    <td colspan="27"><YearInfoSandbox thisYear={1918} thisUpravl={'Пятаков'} /></td>
                    <td colspan="23"><YearInfoSandbox thisYear={1919} thisUpravl={'Крестинский'} /></td>
                    <td colspan="8"><YearInfoSandbox thisYear={1921} thisUpravl={'Крестинский'} /></td>
                    <td colspan="12"><YearInfoSandbox thisYear={1922} thisUpravl={'Крестинский'} /></td>
                    <td colspan="23"><YearInfoSandbox thisYear={1923} thisUpravl={'Сокольников'} /></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1924} thisUpravl={'Сокольников'} /></td>
                    <td colspan="6"><YearInfoSandbox thisYear={1925} thisUpravl={'Сокольников'} /></td>
                    <td colspan="3"><YearInfoSandbox thisYear={1928} thisUpravl={'Сокольников'} /></td>
                </tr>
                <Header />
                <UpperInfoRow info={this.props.state} userIsAuth={this.props.userIsAuth} />
            </table> : <div><img src={Krutilka} /></div>}
        </div>
    }
}




const Header = (props) => {

    let headerArr17 = [250, 1000].map(i => { return (<td colspan="2"><NominalInfoSandbox thisYear={1917} thisNominal={i} thisUpravl={'Шипов'} /></td>) })
    let headerArr18a = [1, 3, 5, 10].map(i => { return (<td ><NominalInfoSandbox thisYear={1918} thisNominal={i} thisUpravl={'Пятаков'} /></td>) })
    let headerArr18b = [25, 50].map(i => { return (<td colspan="2"><NominalInfoSandbox thisYear={1918} thisNominal={i} thisUpravl={'Пятаков'} /></td>) })
    let headerArr18c = [100].map(i => { return (<td colspan="4"><NominalInfoSandbox thisYear={1918} thisNominal={i} thisUpravl={'Пятаков'} /></td>) })
    let headerArr18d = [250, 500, 1000].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear={1918} thisNominal={i} thisUpravl={'Пятаков'} /></td>) })
    let headerArr18e = [5000].map(i => { return (<td colspan="2"><NominalInfoSandbox thisYear={1918} thisNominal={i} thisUpravl={'Пятаков'} /></td>) })
    let headerArr18f = [10000].map(i => { return (<td colspan="4"><NominalInfoSandbox thisYear={1918} thisNominal={i} thisUpravl={'Пятаков'} /></td>) })
 
    let headerArr19a = [15, 30, 60].map(i => { return (<td ><NominalInfoSandbox thisYear={1919} thisNominal={i} thisUpravl={'Пятаков'} /></td>) })
    let headerArr19b = [100, 250].map(i => { return (<td colspan="2"><NominalInfoSandbox thisYear={1919} thisNominal={i} thisUpravl={'Крестинский'} /></td>) })
    let headerArr19c = [500].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear={1919} thisNominal={i} thisUpravl={'Крестинский'} /></td>) })
    let headerArr19d = [1000].map(i => { return (<td colspan="5"><NominalInfoSandbox thisYear={1919} thisNominal={i} thisUpravl={'Крестинский'} /></td>) })
    let headerArr19e = [5000, 10000].map(i => { return (<td colspan="4"><NominalInfoSandbox thisYear={1919} thisNominal={i} thisUpravl={'Крестинский'} /></td>) })
  
    let headerArr21a = [5000].map(i => { return (<td colspan="2"><NominalInfoSandbox thisYear={1921} thisNominal={i} thisUpravl={'Крестинский'} /></td>) })
    let headerArr21b = [10000].map(i => { return (<td ><NominalInfoSandbox thisYear={1921} thisNominal={i} thisUpravl={'Крестинский'} /></td>) })
    let headerArr21c = [25000, 50000].map(i => { return (<td colspan="2"><NominalInfoSandbox thisYear={1921} thisNominal={i} thisUpravl={'Крестинский'} /></td>) })
    let headerArr21d = [10000].map(i => { return (<td><NominalInfoSandbox thisYear={1921} thisNominal={i} thisUpravl={'Крестинский'} /></td>) })

    
    
    let headerArr22 = [1, 3, 5, 10, 25, 50, 100, 250, 500, 1000, 5000, 10000].map(i => { return (<td ><NominalInfoSandbox thisYear={1922} thisNominal={i} thisUpravl={'Крестинский'} /></td>) })
    
    let headerArr23a = [1, 5].map(i => { return (<td colspan="2"><NominalInfoSandbox thisYear={1923} thisNominal={i} thisUpravl={'Сокольников'} /></td>) })
    let headerArr23b = [10, 25, 50, 100].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear={1923} thisNominal={i} thisUpravl={'Сокольников'} /></td>) })
    let headerArr23c = [250, 500, 1000, 5000, 10000, 15000, 25000].map(i => { return (<td><NominalInfoSandbox thisYear={1923} thisNominal={i} thisUpravl={'Сокольников'} /></td>) })


    let headerArr24a = [0.5, 1].map(i => { return (<td ><NominalInfoSandbox thisYear={1924} thisNominal={i} thisUpravl={'Сокольников'} /></td>) })
    let headerArr24b = [3, 5].map(i => { return (<td colspan="2"><NominalInfoSandbox thisYear={1924} thisNominal={i} thisUpravl={'Сокольников'} /></td>) })
    
    let headerArr25 = [3, 5].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear={1925} thisNominal={i} thisUpravl={'Сокольников'} /></td>) })
    let headerArr28 = [1].map(i => { return (<td colspan="3"><NominalInfoSandbox thisYear={1928} thisNominal={i} thisUpravl={'Сокольников'} /></td>) })
    

    let headerArrLowString17 = [250, 500].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'Временное правительство'}>Вр</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Советское правительство'}>С</div>
            </td>
        </>)
    })
    let headerArrLowString18a = [1, 3, 5, 10].map(i => {
        return (<>
            <td>
                
            </td>
        </>)
    })
    let headerArrLowString18b = [25, 50].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'серия АА'}>АА</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'серия АБ'}>АБ</div>
            </td>
        </>)
    })
    let headerArrLowString18c = [100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'серия АА'}>АА</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'серия АБ'}>АБ</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'серия АВ'}>АВ</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'серия АГ'}>АГ</div>
            </td>
        </>)
    })
    let headerArrLowString18d = [250, 500, 1000].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'серия АА'}>АА</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'серия АБ'}>АБ</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'серия АГ'}>АГ</div>
            </td>
        </>)
    })
    let headerArrLowString18e = [5000].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'А'}>А</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Б'}>Б</div>
            </td>
        </>)
    })
    let headerArrLowString18k = [10000].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'А(г)'}>А(г)</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'А(в)'}>А(в)</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Б(г)'}>Б(г)</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Б(в)'}>Б(в)</div>
            </td>
        </>)
    })
    let headerArrLowString19a = [15, 30, 60].map(i => {
        return (<>
            <td>     
            </td>
        </>)
    })
    let headerArrLowString19b = [100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'Горизонтальные цифры'}>гц</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Вертикальные цифры'}>вц</div>
            </td>
        </>)
    })
    let headerArrLowString19с = [250].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'Водяной знак цифры'}>ц</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак звезды'}>з</div>
            </td>
        </>)
    })
    let headerArrLowString19d = [500].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'Водяной знак горизонтальные цифры'}>гц</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак вертикальные цифры'}>вц</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак звезды'}>з</div>
            </td>
        </>)
    })
    let headerArrLowString19e = [1000].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'Водяной знак горизонтальные цифры'}>гц</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак вертикальные цифры'}>вц</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак узор'}>у</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак звезды'}>з</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак теневые звезды'}>тз</div>
            </td>
        </>)
    })
    let headerArrLowString19f = [5000, 10000].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'Водяной знак горизонтальные цифры'}>гц</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак вертикальные цифры'}>вц</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак узор'}>у</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак звезды'}>з</div>
            </td>
        </>)
    })
    let headerArrLowString21a = [5000].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'Без ошибки'}>бо</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'С ошибкой'}>со</div>
            </td>
        </>)
    })
    let headerArrLowString21b = [10000].map(i => {
        return (<>
            <td>
                
            </td>

        </>)
    })
    let headerArrLowString21c = [25000, 50000].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'Водяной знак теневые звезды'}>тз</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак звезды'}>з</div>
            </td>
        </>)
    })
    let headerArrLowString21d = [100000].map(i => {
        return (<>
            <td>
                
            </td>

        </>)
    })
    let headerArrLowString22 = [1].map(i => {
        return (<>
            <td colspan = "12">          
            </td>
        </>)
    })
    let headerArrLowString23a = [1, 5].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'Первый выпуск'}>1в</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Второй выпуск'}>2в</div>
            </td>
        </>)
    })
    let headerArrLowString23b = [10, 25, 50, 100].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'Первый выпуск'}>1в</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Второй выпуск'}>2в</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Водяной знак звезды'}>з</div>
            </td>
        </>)
    })
    let headerArrLowString23с = [1].map(i => {
        return (<>
            <td colspan="7">     
            </td>
        </>)
    })
    let headerArrLowString24a = [1].map(i => {
        return (<>
            <td colspan="2">     
            </td>
        </>)
    })
    let headerArrLowString24b = [3, 5].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'и'}>и</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'i'}>i</div>
            </td>
        </>)
    })
    let headerArrLowString25 = [3, 5].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'Однолитерка'}>А</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'АА'}>АА</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'Аа'}>Аа</div>
            </td>
        </>)
    })
    let headerArrLowString28 = [1].map(i => {
        return (<>
            <td>
                <div className={styles.infoCell} title={'1'}>1</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'2'}>2</div>
            </td>
            <td>
                <div className={styles.infoCell} title={'3'}>3</div>
            </td>
        </>)
    })
    return (
        <>
            <tr>
                <td>Номинал</td>
                {headerArr17}{headerArr18a}{headerArr18b}{headerArr18c}
                {headerArr18d}{headerArr18e}{headerArr18f}{headerArr19a}
                {headerArr19b}{headerArr19c}{headerArr19d}{headerArr19e}
                {headerArr21a}{headerArr21b}{headerArr21c}{headerArr21d}
                {headerArr22}{headerArr23a}{headerArr23b}{headerArr23c}
                {headerArr24a}{headerArr24b}{headerArr25}{headerArr28}

            </tr>
            <tr>
                <td>Кассир</td>
            {headerArrLowString17}{headerArrLowString18a}{headerArrLowString18b}
            {headerArrLowString18c}{headerArrLowString18d}{headerArrLowString18e}
            {headerArrLowString18k}{headerArrLowString19a}{headerArrLowString19b}
            {headerArrLowString19с}{headerArrLowString19d}{headerArrLowString19e}
            {headerArrLowString19f}{headerArrLowString21a}{headerArrLowString21b}
            {headerArrLowString21c}{headerArrLowString21d}{headerArrLowString22}
            {headerArrLowString23a}{headerArrLowString23b}{headerArrLowString23с}
            {headerArrLowString24a}{headerArrLowString24b}{headerArrLowString25}
            {headerArrLowString28}
            </tr>
        </>
    )
}

export default MainTable

