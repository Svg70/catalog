import React from 'react'
import {useForm} from "react-hook-form";
import { Redirect } from 'react-router-dom';
import './Register.css'
const RegistrationPage = ({registerMe, success, message, buttonDisable}) =>{
    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        console.log(data)
        registerMe(data.email, data.password, data.name, data.surname, data.patronic, data.telephone)
    };

    // if(success) return <Redirect to='/login' />



    return<>
    <div className='register'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Зарегистрируйтесь</p>
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

                <input ref={register({required: true})} name='name' placeholder='введите имя'
                       className={errors.name ? 'input_error' : 'input'} type="name"/>
                {errors.name && <span className='loginError'>Необходимо заполнить поле</span>}


                <input ref={register({required: true})} name='surname' placeholder='введите фамилию'
                       className={errors.surname ? 'input_error' : 'input'} type="surname"/>
                {errors.surname && <span className='loginError'>Необходимо заполнить поле</span>}

                <input ref={register({required: true})} name='patronic' placeholder='введите отчество'
                       className={errors.patronic ? 'input_error' : 'input'} type="patronic"/>
                {errors.patronic && <span className='loginError'>Необходимо заполнить поле</span>}

                <input ref={register({required: true})} name='telephone' placeholder='введите номер телефона'
                       className={errors.telephone ? 'input_error' : 'input'} type="telephone"/>
                {errors.telephone && <span className='loginError'>Необходимо заполнить поле</span>}

                <button type='submit' className='btn' disabled={buttonDisable}>Регистрация</button>
            </form>
        </div>
    </>
}
export default RegistrationPage