import './App.css';
import Modal from './components/Modal.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span class="circle1"></span>
        <span class="circle2"></span>
         <h2> Simple, traffic-based pricing</h2>
         <h3> Sign-up for our 30-day trial. No credit card required.</h3>
      </header>
      <Modal/>
    </div>
  );
}

export default App;
