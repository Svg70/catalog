/* eslint-disable */
import React, { Component, Fragment } from 'react';

import Button from '../button/Button';
import YearInfo from './yearInfo';

class YearInfoSandbox extends Component {
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
    return (
      <Fragment>

        
        <div className= 'yearPointer' onClick={this.openModal}>{this.props.thisYear}
        <div className= 'yearPointerDescr'>Смотреть общую статистику по году</div>
        </div>
        <YearInfo
          thisYear = {this.props.thisYear}
          info ={this.props.info}
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        
        </YearInfo>

      </Fragment>
    );
  }
}

export default YearInfoSandbox;
/* eslint-enable */
