import logo from './logo.svg';
import './App.css';

import ConnectApi from "./components/ConnectApi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConnectApi />
      </header>
    </div>
  );
}

export default App;
