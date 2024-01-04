import logo from './logo.svg';
import './App.css';
import Reg from './components/Register'
import Show from './components/Show'
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Appbar from './components/Appbar'
function App() {
  function Page(){
    return(
      <div>
          <BrowserRouter>
             <Routes>
                <Route path="/reg" element={<Reg />} />
                <Route path="/sho" element={<Show />} />
                <Route path="/log" element={<Login />} />
             </Routes>
          </BrowserRouter>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counselor and Visitor Management System</p>
      </header>
      <div className="App-body">
        <Appbar />
       <Page /> 
      </div>
    </div>
  );
}

export default App;