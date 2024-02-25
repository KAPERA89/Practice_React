import React from 'react'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


const Form = () => {

    const schema = yup.object().shape({
      fullName : yup.string().required("Your FullName is required!"),
      email: yup.string().email().required(),
      age: yup.number().positive().integer().min(18).required(),
      password: yup.string().min(4).max(20).required(),
      confirmPassword: yup.string().oneOf([yup.ref("password"), null], "passwords don't match").required()  
      //null : mean we want just this field
      //oneOf : mean that we want the confirmPassword be like password field
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
      resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
      console.log(data);
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='full Name...' {...register("fullName")}/>
            <p style={{color:'red'}}>{errors.fullName?.message}</p>
            <input type="text" placeholder='Email...' {...register("email")}/>
            <p style={{color:'red'}}>{errors.email?.message}</p>
            <input type="number" placeholder='Age...' {...register("age")}/>
            <p style={{color:'red'}}>{errors.age?.message}</p>
            <input type="password" placeholder='Password...' {...register("password")}/>
            <p style={{color:'red'}}>{errors.password?.message}</p>
            <input type="password" placeholder='Confirm Password...' {...register("confirmPassword")}/>
            <p style={{color:'red'}}>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form