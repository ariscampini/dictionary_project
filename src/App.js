import image from './image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       

       <img src={image} className="App-image img-fluid" alt="Image"/>  
      </header>
    </div>
  );
}

export default App;
