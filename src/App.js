import logo from './TaxClicklogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Watch this space! Our new website is launching soon.
          </p>
          <p>
          For any enquiries please email <strong>info@taxclick.co.uk</strong>         

        </p>
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
