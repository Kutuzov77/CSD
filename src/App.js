import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Header from './Components/Common/Header/NavScrollExample';
import {BrowserRouter, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       {/* <Header/> */}
    <Routes>
      <Route exact path='/' element={<Login/>}></Route>
    </Routes>
    
    </BrowserRouter>
            
    
    </div>
  );
}

export default App;
