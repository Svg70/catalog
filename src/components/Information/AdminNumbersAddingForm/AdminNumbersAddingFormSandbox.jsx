/* eslint-disable */
import React, { Component, Fragment } from 'react';
import AdminNumbersAddingForm from './AdminNumbersAddingForm';
import Button from '../button/Button';
import { connect } from 'react-redux';
import {changeDataBaseCeilInfo} from '../../../redux/admin-catalog-reducer'

class AdminNumbersAddingFormSandbox extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  // handleSubmit = (common, varieties) => {
  //   debugger
    
  //   let nominal = this.props.item.description.nominal
  //   let number = this.props.item.number
  //   console.log('Submit function!');
  //   this.props.changeDataBaseCeilInfo( nominal, number, common, varieties)
    
  // }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Fragment>
        <span onClick={this.openModal}>И</span>
        <AdminNumbersAddingForm
          item ={this.props.item}
          description ={this.props.item.description}
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          number ={this.props.item.number}
          changeDataBaseCeilInfo = {this.props.changeDataBaseCeilInfo}
          // onSubmit={this.handleSubmit}
        >
        </AdminNumbersAddingForm>
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {

  }
}

const AdminNumbersAddingFormSandboxContainer = connect(mapStateToProps,{changeDataBaseCeilInfo})(AdminNumbersAddingFormSandbox)


export default AdminNumbersAddingFormSandboxContainer;
/* eslint-enable */
