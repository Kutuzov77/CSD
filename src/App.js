import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import NavScrollExample from './Components/Common/Header/NavScrollExample'
import Table from './pages/Table/Table';
import {BrowserRouter, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <NavScrollExample/>
    <Routes>
      <Route exact path='/' element={<Login/>}></Route>
      <Route exact path='/table' element={<Table/>}></Route>
    </Routes>
    
    </BrowserRouter>
            
    
    </div>
  );
}

export default App;
