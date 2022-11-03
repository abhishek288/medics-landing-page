
import './App.css';
import Cta from './components/CTA/Cta';
import Features from './components/features/Features';
import Footer from './components/footer/footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Working from './components/working/Working';

function App() {
  return (
    <div className="App">

        <Navbar />
        <Intro />
        <Features />
        <Working />
        <Cta />
        <Footer />

    </div>
  );
}

export default App;
