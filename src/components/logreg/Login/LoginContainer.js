import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { login } from '../../../redux/auth-reducer';
import LoginPage from './LoginPage';



const LoginContainer = () => {

    const {success, message, buttonDisable} = useSelector((store) => {
        return {
            success: store.loginPage.success,
            message: store.loginPage.message,
            buttonDisable: store.loginPage.buttonDisable
        }
    });
    const dispatch = useDispatch();

    const loginMe = (email, password) => {
        dispatch(login(email, password))
    };

    return (
        <LoginPage message={message} success={success} loginMe={loginMe} buttonDisable={buttonDisable}/>
    );
};

export default LoginContainer;