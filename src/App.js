import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Cards />
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
