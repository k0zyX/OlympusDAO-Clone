import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Features from './components/Features';
import Introducing from './components/Introducing';
import OlyZaps from './components/OlyZaps';
import HowOlympusWorks from './components/HowOlympusWorks';
import Sustainable from './components/Sustainable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Features/>
      <Introducing/>
      <OlyZaps/>
      <HowOlympusWorks/>
      <Sustainable/>
      <Footer/>

    </div>
  );
}

export default App;
