import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CreatePosts = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = (data) => console.log(data);
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Post"
        
            {...register("postText", { required: true })}
            aria-invalid={errors.postText ? "true" : "false"}
          />
          {errors.postText?.type === "required" && <p className="text-danger">Post is required</p>}
        </Form.Group>

       
        <Button variant="primary" type="submit" >
          Create Post
        </Button>
      </Form>
    </>
  );
};

export default CreatePosts;
