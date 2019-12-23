/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Modal from './NumberInfo';
import NumberInfo from './NumberInfo';


class NumberInfoSandbox extends Component {
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
        <span onClick={this.openModal}>{this.props.name}</span>
        <NumberInfo
          numbers = {this.props.numbers}
          description = {this.props.description}
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        </NumberInfo>
      </Fragment>
    );
  }
}
export default NumberInfoSandbox;

