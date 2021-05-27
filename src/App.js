import './App.css';
import Hangman from './components/Hangman.js';
import cloud1 from './cloud1.png';
import cloud2 from './cloud2.png';


function App() {
  return (
    <div className="text-center main">
      <div className="bg-warning-light shadow text-light py-2">
        <p className="font-fam-raleway mb-0 lead">Welcome to</p>
        <h1 className="font-fam-raleway display-4">Hangman</h1>        
      </div>



      <div className="container">
        <img src={cloud1} alt="cloud 1" className='cloud cloud1'/>
        <img src={cloud2} alt="cloude 2" className='cloud cloud2'/>
        <Hangman/>
      </div>
      <footer className="mt-5 bg-dark py-3 text-light">
        <p className="lead">Created by Simphiwe Nkabinde</p>
        <p className="lead">Built with React JavaScript Library</p>
      </footer>
    </div>
  );
}

export default App;
