import logo from './logo.svg';
import './App.css';
import InputCompany from './components/InputCompany';
import StockDashboard from './components/StockList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<InputCompany />
		<StockDashboard />
	  </header>
    </div>
  );
}

export default App;
