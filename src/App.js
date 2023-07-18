import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import NavScrollExample from './components/Common/Header/NavScrollExample.jsx'
import {BrowserRouter, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <NavScrollExample/>
    <Routes>
      <Route exact path='/' element={<Login/>}></Route>
    </Routes>
    
    </BrowserRouter>
            
    
    </div>
  );
}

export default App;
