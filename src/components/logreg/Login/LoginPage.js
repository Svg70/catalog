import React from 'react'
import {useForm, reset} from "react-hook-form";
import { Redirect, NavLink } from 'react-router-dom';
import './Login.css'
const LoginPage = ({loginMe, success, message, buttonDisable}) =>{

    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        console.log(data)
        loginMe(data.email, data.password)
    };

    // if(success) return <Redirect to='/catalog' />



    return<>
    <div className='register'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Войдите в каталог</p>
                {
                    (message && <span className='success'>{message}</span>)
                   
                }
                <input ref={register((
                    {
                        required: 'Field is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Invalid email address"
                        }
                    }))} name='email' placeholder='е-мейл' className={errors.email ? 'input_error' : 'input'}
                       type="text"/>
                {errors.email && errors.email.message && <span className='loginError'>{errors.email.message}</span>}
                <input ref={register({required: true})} name='password' placeholder='пароль'
                       className={errors.password ? 'input_error' : 'input'} type="password"/>
                {errors.password && <span className='loginError'>Необходимо заполнить поле</span>}

                <button type='submit' className='btn' disabled={buttonDisable}>Войти</button>

                <div>Ранее не зарегистрированы?<br/>Пройдите <NavLink to='./registration'>регистрацию</NavLink></div>
            </form>
        </div>
    </>
}
export default LoginPage