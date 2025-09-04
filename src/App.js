import './App.css';
import Newsapp from './components/Newsapp';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login';
import Navbar from './components/Navbar';
function App() {
   return (
   <div>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/newsapp" element={<Newsapp/>}/>
      </Routes>
   
   </div>)
}

export default App;
