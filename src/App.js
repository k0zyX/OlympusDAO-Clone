import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Features from './components/Features';
import Introducing from './components/Introducing';
import OlyZaps from './components/OlyZaps';
import HowOlympusWorks from './components/HowOlympusWorks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Features/>
      <Introducing/>
      <OlyZaps/>
      <HowOlympusWorks/>
    </div>
  );
}

export default App;
