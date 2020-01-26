/* eslint-disable */
import React, { Component, Fragment } from 'react';

import Button from '../button/Button';
import NominalInfo from './nominalInfo';

class NominalInfoSandbox extends Component {
  state = {
    isOpen: false,
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
    let styleDef = ((this.props.thisYear <=1895 && this.props.thisYear >= 1866)||(this.props.thisYear <=1928 && this.props.thisYear >= 1917))
    ?{writingMode: 'vertical-lr', fontSize: '10px', marginLeft: 'auto',marginRight: 'auto', }:null
    return (
      
      <Fragment>
        <div className= 'nominalPointer' onClick={this.openModal} title ={`Смотреть общую статистику по номиналу`} style = {styleDef}>{this.props.thisNominal}
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

export default NominalInfoSandbox;
/* eslint-enable */
