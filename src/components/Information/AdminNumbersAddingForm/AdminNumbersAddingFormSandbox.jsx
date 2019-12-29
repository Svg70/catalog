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


  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Fragment>
        <span onClick={this.openModal}>И</span>
        <AdminNumbersAddingForm
          
          description ={this.props.description}
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          
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
