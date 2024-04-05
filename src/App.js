import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Photos from './Photos';
import Users from './Users';
import Head from './component/Head';

function App() {
  return (
    <div className='bg'>
      
    <BrowserRouter>
    <Head />
    <Routes>
      <Route 
      path='/'
      element ={<Home/>}
      />
    <Route 
    path='/post'
    element={<Post/>}/>
    <Route
    path='/photos'
    element={<Photos/>}/>
    <Route
    path='/user'
    element={<Users/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
