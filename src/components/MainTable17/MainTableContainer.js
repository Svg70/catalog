import React from 'react'

import { connect } from 'react-redux';

import { compose } from 'redux';
import MainTable from './mainTable';
import {getCatalogList} from '../../redux/admin-catalog-reducer'

class MainTableContainer17 extends React.Component{   
    componentDidMount(){
        this.props.getCatalogList(10)

    }
    render(){
        let itemsArray = this.props.state.catalogItems17

    return <MainTable state = {itemsArray} preloader = {this.props.state.preloader} userIsAuth={this.props.userIsAuth}/>
    }
}

const mapStateToProps = (store) => ({
    state: store.AdminCatalog,
    userIsAuth: store.loginPage.userIsAuth
})

export default connect(mapStateToProps,{getCatalogList})(MainTableContainer17)