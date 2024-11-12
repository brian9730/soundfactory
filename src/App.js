import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'explore':
        return <Explore />;
      case 'library':
        return <Library />;
      case 'likedMusic':
        return <LikedMusic />;
      default:
        return <Home />;
    }
  };

  return (
      <div className="app">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className="content">
          {renderComponent()}
        </div>
      </div>
  );
}

export default App;

