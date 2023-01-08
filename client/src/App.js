import { Route, Routes,Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreatePosts from "./pages/CreatePosts";
import Post from "./pages/Post";
import { Container, Nav, Navbar} from "react-bootstrap";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <div className="App">
     <Navbar bg="primary" variant="dark" expand="lg" className="w-100">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white text-decoration-none">
            <Link to="/" className="me-3">Home</Link>
            <Link to="/createpost" className="mx-3">Create Post</Link>
            <Link to="/login" className="mx-3">Login</Link>
            <Link to="/register" className="mx-3">Registration</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePosts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

      </Routes>
    </div>
  );
}

export default App;
