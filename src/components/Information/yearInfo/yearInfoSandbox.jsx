/* eslint-disable */
import React, { Component, Fragment } from 'react';
import YearInfo from './yearInfo';
import { getTotalYearCountThunk } from '../../../redux/statistics-reducer';
import { connect } from 'react-redux';

class YearInfoSandbox extends Component {
  state = {
    isOpen: false,
  }
  getData = () => {
    debugger
    this.props.getTotalYearCountThunk(this.props.thisYear, this.props.thisUpravl)
    this.openModal()
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

        
        <div className= 'yearPointer' onClick={this.getData} title={`Смотреть общую статистику по ${this.props.thisYear} году`}>{this.props.thisYear}
        </div>
        <YearInfo
          thisYear = {this.props.thisYear}
          thisUpravl = {this.props.thisUpravl}
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

const mapStateToProps = (store) => ({

})

export default connect(mapStateToProps,{getTotalYearCountThunk})(YearInfoSandbox)

/* eslint-enable */
