import React from 'react';
import {connect} from 'react-redux';
import {loginAccount} from '../actions/user';
import Signin from '../components/SignIn/index';
const index = ({user,loginAccount})=>{
    return <>
      <Signin user={user.toJS()} loginAccount={loginAccount}/>
    </>;
};


function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(
  mapStateToProps,
  {
    loginAccount,
  },
)(index);

