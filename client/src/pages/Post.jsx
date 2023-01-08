import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Button, Card } from "react-bootstrap";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    getPosts();
    getComments();
  }, []);


  const getPosts = async () => {
    const { data } = await axios.get(`http://localhost:3001/posts/byId/${id}`,{headers:{
      accessToken:sessionStorage.getItem("accessToken")
    }});

    setPost(data);
  };

  const getComments = async () => {
    const { data: comments } = await axios.get(
      `http://localhost:3001/comments/${id}`,{headers:{
        accessToken:sessionStorage.getItem("accessToken")
      }}
    );
    console.log(comments);
    setComments(comments);
  };

  const addComment = async () => {
    const { data: comment } = await axios.post(
      "http://localhost:3001/comments",
      {
        commentsBody: newComment,
        PostId: id,
      }
    );
 

    setComments([...comments,comment]);
    setNewComment("")
  };
  return (
    <Container className="d-flex justify-content-between col-12">
      <div className="leftSide  me-3 col-6">
        <div className="post">
          <div className="title">{post.title}</div>
          <div className="body">{post.postText}</div>
          <div className="footer">{post.username}</div>
        </div>
      </div>
      <div className="rightSide col-6 d-flex flex-column justify-content-center align-items-center ">
        <Container className="mx-3 my-3">
          <textarea
            className="form-control my-3"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <Button variant="primary" onClick={addComment}>
            Add comment
          </Button>
        </Container>
        <Container className="listOfComments mx-3 my-3">
          {comments &&
            comments.map((comment) => {
              console.log(comment);
              return (
                <Card key={comment.id} className="p-3 my-3">
                  {comment.commentsBody}
                </Card>
              );
            })}
        </Container>
      </div>
    </Container>
  );
};

export default Post;
