import React from 'react'
import { render } from '@testing-library/react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAuth } from '../../redux/admin-catalog-reducer'


const mapStateToProps = (store) =>{
    debugger
    return {state: store.AdminCatalog}
}
export default connect(mapStateToProps,{setAuth})(Header)