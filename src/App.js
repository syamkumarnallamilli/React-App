import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/Header.js';
import SidebarWithButton from './components/sidebar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchAppBar/>
        <SidebarWithButton/> 
      </header>
    </div>
  );
}

export default App;
