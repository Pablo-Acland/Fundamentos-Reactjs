import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {
    
    const {register, formState: { errors }, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser

    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        console.log(data)
        props.updateUser(props.currentUser.id, data)
        e.target.reset()
    };
   

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
            {...register('name', {
                required: true,
            })}
            placeholder="Ingrese el nombre a Editar" 
            className='form-control my-3'/>
        
        {errors.name?.type === 'required' && (
            <span className='text-danger text-small d-block mb-2'>
                Debe de Ingresar el nombre
            </span>
        )}
        <label>Username</label>
        <input
            {...register('username', {
                required: true,
            })}
            placeholder="Ingrese el nombre de Usuario a Editar" 
            className='form-control my-3'/>
        {errors.username?.type === 'required' && (
            <span className='text-danger text-small d-block mb-2'>
                Debe de Ingresar el nombre del Usuario
            </span>
        )}
        <button className='btn btn-primary' type='submit'>Edit user</button>
    </form>
    )
}

export default EditUserForm