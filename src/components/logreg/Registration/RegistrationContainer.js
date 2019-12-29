import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { register } from '../../../redux/registration-reducer';
import RegistrationPage from './RegistrationPage';



const RegistrationContainer = () => {

    const {success, message, buttonDisable} = useSelector((store) => {
        return {
            success: store.registrationPage.success,
            message: store.registrationPage.message,
            buttonDisable: store.registrationPage.buttonDisable
        }
    });
    const dispatch = useDispatch();

    const registerMe = (email, password, name, surname, patronic, telephone) => {
        dispatch(register(email, password, name, surname, patronic, telephone))
    };

    return (
        <RegistrationPage message={message} success={success} registerMe={registerMe} buttonDisable= {buttonDisable}/>
    );
};

export default RegistrationContainer;