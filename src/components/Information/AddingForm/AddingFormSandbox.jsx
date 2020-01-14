/* eslint-disable */
import React, { Component, Fragment } from 'react';
import AddingForm from './AddingForm';
import Button from '../button/Button';

class AddingFormSandbox extends Component {
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

        
        <span onClick={this.openModal} title ={`добавление в каталог ${this.props.description.nominal} руб. ${this.props.description.year} года ${this.props.description.upravl}-${this.props.description.kassir}-${this.props.description.director}`}>{this.props.sign}</span>
        <AddingForm

          description ={this.props.description}
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
         </AddingForm>

      </Fragment>
    );
  }
}

export default AddingFormSandbox;
/* eslint-enable */
