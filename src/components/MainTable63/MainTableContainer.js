import React from 'react'

import { connect } from 'react-redux';

import { compose } from 'redux';
import MainTable from './mainTable';
import {getCatalogList63} from '../../redux/admin-catalog-reducer'

class MainTableContainer63 extends React.Component{
    
    componentDidMount(){
        this.props.getCatalogList63(4)
        
    }
    render(){
        debugger
        return <MainTable state = {this.props.state} userIsAuth={this.props.userIsAuth}/>
    }
}

const mapStateToProps = (store) => ({
    state: store.AdminCatalog,
    userIsAuth: store.loginPage.userIsAuth
})

export default connect(mapStateToProps,{getCatalogList63})(MainTableContainer63)