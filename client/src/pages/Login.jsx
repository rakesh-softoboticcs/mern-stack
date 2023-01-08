import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState:{errors,isValid},reset } = useForm({
      mode:"all",
      reValidateMode:"onChange",
      defaultValues:{}
    });

    const onSubmit = (data)=>{
        axios.post('http://localhost:3001/auth/login',{username:data.username,password:data.password}).then((res)=>{
            reset();
            if(res.data.error) {alert(res.data.error)}
            else {
            
              sessionStorage.setItem("accessToken",res.data.accessToken)
              navigate('/')
            }
        })
    }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="my-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
           
            placeholder="Username"
            {...register("username", { required: true })}
            aria-invalid={errors.username ? "true" : "false"}
            autoComplete="off"
          />
          {errors.username?.type === "required" && <p className="text-danger">user name is required</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
           
            placeholder="Password"
            autoComplete="off"
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && <p className="text-danger">Title is required</p>}
        </Form.Group>

      

       <div className="d-flex justify-content-between">
       <Button variant="primary" type="submit" disabled={!isValid} >
          Login
        </Button>
        <Button variant="primary" onClick={()=>navigate('/register')}>
          Register
        </Button>
       </div>
       
      </Form>
  )
}

export default Login