import React from 'react'

import { connect } from 'react-redux';

import { compose } from 'redux';
import MainTable from './mainTable';
import {getCatalogList} from '../../redux/admin-catalog-reducer'

class MainTableContainer95 extends React.Component{   
    componentDidMount(){
        this.props.getCatalogList(9)

    }
    render(){
        let itemsArray = this.props.state.catalogItems95
        return <MainTable state = {itemsArray} preloader = {this.props.state.preloader} userIsAuth={this.props.userIsAuth}/>
    }
}

const mapStateToProps = (store) => ({
    state: store.AdminCatalog,
    userIsAuth: store.loginPage.userIsAuth
})

export default connect(mapStateToProps,{getCatalogList})(MainTableContainer95)