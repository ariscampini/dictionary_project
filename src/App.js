import Dictionary from "./Dictionary"
import image from './image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={image} className="App-image img-fluid" alt="cute monster"/>  
        </header>
          <Dictionary/>
        <footer className="text-center">
          This project was coded by Arianna Scampini and is {" "} 
          <a className= "footer" rel="noreferrer"  href="https://github.com/ariscampini/react-weatherapp-finalproject" 
          target="_blank">open source on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
