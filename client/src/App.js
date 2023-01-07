
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CreatePosts from './pages/CreatePosts';


function App() {
 
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/createpost' element={<CreatePosts/>} />
      </Routes>
    
    </div>
  );
}

export default App;
