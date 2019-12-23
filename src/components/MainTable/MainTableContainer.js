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
        return <MainTable state = {this.props.state}/>
    }
}

const mapStateToProps = (store) => ({
    state: store.AdminCatalog
})
//join this 3 HOC below in ONE Compose
// let AuthRedirectComponent = withAuthRedirect(ContentContainer)
// let WithRouterProfileContainer = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {setProfile: setProfileAC,  profileShow: profileShowThunkCreator})(WithRouterProfileContainer)
export default connect(mapStateToProps,{getCatalogList})(MainTableContainer)