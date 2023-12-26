import logo from './logo.svg';
import './App.css';
import Reg from './components/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <p> Counselor and Visitor Management System </p>
      </header>
      <div className="App-body">
        <Reg />
      </div>
    </div>
  );
}

export default App;