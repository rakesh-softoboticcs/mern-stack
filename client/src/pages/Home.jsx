import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const posts = await axios.get("http://localhost:3001/posts",{headers:{
      accessToken:sessionStorage.getItem("accessToken")
    }});
    setPosts(posts.data);
  };
  return (
    <>
      {posts.map(({ id, title, postText, username }) => (
        <div className="post" key={id} onClick={()=>navigate(`/post/${id}`)}>
          <div className="title">{title}</div>
          <div className="body">{postText}</div>
          <div className="footer">{username}</div>
        </div>
      ))}
    </>
  );
};

export default Home;
