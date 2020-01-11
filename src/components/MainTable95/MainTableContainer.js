import React from 'react'

import { connect } from 'react-redux';

import { compose } from 'redux';
import MainTable from './mainTable';
import {getCatalogList66, getCatalogList66a, getCatalogList66b, getCatalogList66c} from '../../redux/admin-catalog-reducer'

class MainTableContainer66 extends React.Component{
    
    componentDidMount(){
        this.props.getCatalogList66(5)
        this.props.getCatalogList66a(6)
        this.props.getCatalogList66b(7)
        this.props.getCatalogList66c(8)
    }

    //this.props.state concat
    render(){

        let itemsArray = this.props.state.catalogItems66.concat(this.props.state.catalogItems66a, this.props.state.catalogItems66b, this.props.state.catalogItems66c)
        return <MainTable state = {itemsArray} preloader = {this.props.state.preloader} userIsAuth={this.props.userIsAuth}/>
    }
}

const mapStateToProps = (store) => ({
    state: store.AdminCatalog,
    userIsAuth: store.loginPage.userIsAuth
})

export default connect(mapStateToProps,{getCatalogList66,getCatalogList66a, getCatalogList66b, getCatalogList66c})(MainTableContainer66)