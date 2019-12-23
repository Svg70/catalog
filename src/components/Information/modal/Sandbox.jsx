/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import Button from '../button/Button';

class Sandbox extends Component {
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
    let cellStyle = this.props.description.photos.photo1 && this.props.description.photos.photo2 ? 'activeImageStatus' : null
    return (
      <Fragment>
        <span onClick={this.openModal} className={cellStyle}>И</span>
        <Modal
          description={this.props.description}
          title="Test Dialog window"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        </Modal>
      </Fragment>
    );
  }
}
export default Sandbox;

