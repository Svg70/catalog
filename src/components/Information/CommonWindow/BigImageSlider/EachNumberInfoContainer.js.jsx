/* eslint-disable */
import React, { Component, Fragment } from 'react';
import BigImageSlider from './EachNumberInfo';
import scale from './../../../../images/scale.png'

class BigImageSliderContainer extends Component {
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
        <div onClick={this.openModal}><img style ={{width : '20px', right: '5%', cursor: 'pointer'}} src = {scale}/></div>
        <BigImageSlider
          item = {this.props.item}
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>
        </BigImageSlider>

      </Fragment>
    );
  }
}

export default BigImageSliderContainer;
/* eslint-enable */
