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

        
        <div className= 'yearPointer' onClick={this.openModal}>1855
        <div className= 'yearPointerDescr'>Смотреть общую статистику по году</div>
        </div>
        <YearInfo

          description ={this.props.description}
          title="Test Dialog window"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p> */}
        </YearInfo>

      </Fragment>
    );
  }
}

export default YearInfoSandbox;
/* eslint-enable */
