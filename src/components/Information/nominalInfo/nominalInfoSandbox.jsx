/* eslint-disable */
import React, { Component, Fragment } from 'react';

import Button from '../button/Button';
import NominalInfo from './nominalInfo';
import { getTotalYearNominalCountThunk } from '../../../redux/statistics-reducer';
import { connect } from 'react-redux';
class NominalInfoSandbox extends Component {
  state = {
    isOpen: false,
  }
  getData = () => {

    this.props.getTotalYearNominalCountThunk(this.props.thisYear, this.props.thisNominal, this.props.thisUpravl)
    this.openModal()
  }
  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    console.log('Submit function!');
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  render() {
    let styleDef = ((this.props.thisYear <=1895 && this.props.thisYear >= 1866 && this.props.thisNominal>9)||(this.props.thisYear <=1928 && this.props.thisYear >= 1895 && this.props.thisNominal > 9))
    ?{writingMode: 'vertical-lr',webkitTransform: 'rotate(-180deg)', fontSize: '10px',width: '9px', marginLeft: 'auto', marginRight: 'auto'}:{width: '9px', marginLeft: 'auto', marginRight: 'auto' }
    return (
      
      <Fragment>
        <div className= 'nominalPointer' onClick={this.getData} title ={`Смотреть общую статистику по номиналу`} style = {styleDef} >{this.props.thisNominal}
        </div>
        <NominalInfo
          info = {this.props.info}
          thisYear = {this.props.thisYear}
          thisNominal ={this.props.thisNominal}
          thisUpravl = {this.props.thisUpravl}
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p> */}
        </NominalInfo>

      </Fragment>
    );
  }
}
const mapStateToProps = (store) => ({

})

export default connect(mapStateToProps,{getTotalYearNominalCountThunk})(NominalInfoSandbox)


/* eslint-enable */
