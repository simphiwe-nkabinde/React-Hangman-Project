import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Hangman from './components/Hangman.js';
import cloud1 from './cloud1.png';
import cloud2 from './cloud2.png';


function App() {
  return (
    <div className="text-center bg-light">
      <div className="bg-warning-light shadow text-light py-2">
        <a href="/" className="text-decoration-none text-light">
        <p className="font-fam-raleway mb-0 lead">Welcome to</p>
        <h1 className="font-fam-raleway display-4">Hangman</h1>  
        </a>      
      </div>

      <BrowserRouter>
        <div className="container">
          <Route path="/about" component={About}/>
          <img src={cloud1} alt="cloud 1" className='cloud cloud1'/>
          <img src={cloud2} alt="cloude 2" className='cloud cloud2'/>
          <Route exact={true} path="/" component={Hangman}/>
        </div>
      </BrowserRouter>

      <footer className="bg-dark py-3 text-light">
        <a href="/about" className="lead text-decoration-none text-light">About</a>
      </footer>
    </div>
  );
}

export default App;
