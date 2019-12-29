import React from 'react'

import { connect } from 'react-redux';

import { compose } from 'redux';
import MainTable from './mainTable';
import {getCatalogList} from './../../redux/admin-catalog-reducer'

class MainTableContainer extends React.Component{
    
    componentDidMount(){
        this.props.getCatalogList()
    }
    render(){
        return <MainTable state = {this.props.state} userIsAuth={this.props.userIsAuth}/>
    }
}

const mapStateToProps = (store) => ({
    state: store.AdminCatalog,
    userIsAuth: store.loginPage.userIsAuth
})

export default connect(mapStateToProps,{getCatalogList})(MainTableContainer)