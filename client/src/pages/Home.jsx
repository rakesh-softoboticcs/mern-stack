import {useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
      getPosts()
      
  
    },[])
  
    const getPosts = async()=>{
      const posts = await axios.get('http://localhost:3001/posts')
      setPosts(posts.data)
    }
  return (
    <>
    <div>
    <Link to="/createpost">Create a post</Link>
    </div>
    {
        posts.map(({id,title,postText,username})=>(
          <div className='post' key={id}>
          <div className='title'>{title}</div>
          <div className='body'>{postText}</div>
          <div className='footer'>{username}</div>
         </div>
        ))
      }</>
  )
}

export default Home
