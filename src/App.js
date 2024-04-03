import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Photos from './Photos';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route 
      path='/'
      element={<Home/>}
      />
    <Route 
    path='/post'
    element={<Post/>}/>
    <Route
    path='/photos'
    element={<Photos/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
