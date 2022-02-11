import React from 'react'
import { useForm } from "react-hook-form";
import styleFrom from './form.module.css'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
export const Form =()=>{
    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    })
    const validationOpt = { resolver: yupResolver(formSchema) }
    const {register, formState:{errors}, handleSubmit, reset} = useForm(validationOpt);

const onSubmit =(data)=>{
    alert(JSON.stringify(data))
    reset()
}
    return(
        <div className={styleFrom.body}>
            <div className={styleFrom.header}>
                <h3 className={styleFrom.header__h3}>Welcom</h3>
                <h1 className={styleFrom.header__h1}>Join the Community</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styleFrom.form}>

                <div>
                    <label className={styleFrom.form__label}> E-Mail or Username</label>
                    <input {...register('email',{
                        required:"Поле повинно бути заповнене!",

                    })} type='email' className={styleFrom.form__input}/>
                   <div> {errors?.email && <p>{errors.email.message}</p>}</div>
                </div>
                <div>
                    <label className={styleFrom.form__label}> Password</label>
                    <input {...register('password') } type='password' className={styleFrom.form__input}/>
                    <div> {errors?.password && <p>{errors.password?.message}</p>}</div>
                </div>


                <input type="submit"/>
                <div className={styleFrom.spans}>
                <span className={styleFrom.span1}>Already a member</span>
                <a className={styleFrom.span2} href='https://learn.javascript.ru/'>Login Here &rarr;</a>
                </div>
            </form>
        </div>
    )
}

