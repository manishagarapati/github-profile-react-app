import React from 'react';
import logo from './logo.svg';
import './App.css';
import GithubContainer from './components/githubcontainercomponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="80" height="80" />
       <GithubContainer/>
      </header>
    </div>
  );
}

export default App;
