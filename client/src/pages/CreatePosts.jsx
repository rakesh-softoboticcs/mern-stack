import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'

const CreatePosts = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{errors,isValid},reset } = useForm({
    mode:"all",
    reValidateMode:"onChange",
    defaultValues:{}
  });

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/posts',data).then((response)=>{
      navigate('/')
    },{
      headers:{
        Authorization:`Bearer ${sessionStorage.getItem('accessToken')}`
      }
    })
    reset();
  }
  return (
    <>
      <div>Create a Post</div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="my-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
     
            placeholder="Username"
            {...register("username", { required: true })}
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username?.type === "required" && <p className="text-danger">user name is required</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
   
            {...register("title", { required: true })}
            aria-invalid={errors.title ? "true" : "false"}
          />
          {errors.title?.type === "required" && <p className="text-danger">Title is required</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="postText">
          <Form.Label>Post</Form.Label>
          <textarea
            type="text"
            placeholder="Post"
            className="form-control"
        
            {...register("postText", { required: true })}
            aria-invalid={errors.postText ? "true" : "false"}
          ></textarea>
          {errors.postText?.type === "required" && <p className="text-danger">Post is required</p>}
        </Form.Group>

       
        <Button variant="primary" type="submit" disabled={!isValid} >
          Create Post
        </Button>
      </Form>
    </>
  );
};

export default CreatePosts;
