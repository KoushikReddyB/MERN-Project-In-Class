import logo from './logo.svg';
import './App.css';
import Registration from './components/Signup'

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>counselor & visiter management system</p>
      </header>
      <div className="App-body">
       <Registration />
      </div>
    </div>
  );
}

export default App;
