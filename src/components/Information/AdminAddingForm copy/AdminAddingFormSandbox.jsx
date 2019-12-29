/* eslint-disable */
import React, { Component, Fragment } from 'react';
import AdminAddingForm from './AdminAddingForm';
import Button from '../button/Button';
import { connect } from 'react-redux';
import {changeDataBaseCeilInfo} from './../../../redux/admin-catalog-reducer'

class AdminAddingFormSandbox extends Component {
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
        <span onClick={this.openModal}>+</span>
        <AdminAddingForm
         
          description ={this.props.description}
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          
          changeDataBaseCeilInfo = {this.props.changeDataBaseCeilInfo}
          // onSubmit={this.handleSubmit}
        >
        </AdminAddingForm>
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {

  }
}

const AdminAddingFormSandboxContainer = connect(mapStateToProps,{changeDataBaseCeilInfo})(AdminAddingFormSandbox)


export default AdminAddingFormSandboxContainer;
/* eslint-enable */
