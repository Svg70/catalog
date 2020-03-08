/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import styles from './Modal.module.css';

class CommonWindowContainer extends Component {
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
   
    //let cellStyle = this.props.description.photos.photo1 && this.props.description.photos.photo2 ? styles.activeImageStatus : styles.unactiveImageStatus
    let cellStyle = null
    let informationSymbol = this.props.description.year >=1917?'✓':`${this.props.description.numbers.length}`
    return (
      <Fragment>
        <span onClick={this.openModal} className={cellStyle} title = {`Смотреть информацию ${this.props.description.nominal} руб. ${this.props.description.year} года ${this.props.description.upravl}-${this.props.description.kassir}-${this.props.description.director}`}>{informationSymbol}</span>
        <Modal
          description={this.props.description}
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        </Modal>
      </Fragment>
    );
  }
}
export default CommonWindowContainer;

