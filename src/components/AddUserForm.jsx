import React from 'react';
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        data.id = null
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
            {...register('name', {
                required: true,
            })}
            placeholder="Ingrese el nombre" 
            className='form-control my-3'>
        </input>
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
            placeholder="Ingrese el nombre de Usuario" 
            className='form-control my-3'>
            </input>
        {errors.username?.type === 'required' && (
            <span className='text-danger text-small d-block mb-2'>
                Debe de Ingresar el nombre del Usuario
            </span>
        )}
        <button className='btn btn-primary' type='submit'>Edit user</button>
    </form>
    );
}
 
export default AddUserForm;