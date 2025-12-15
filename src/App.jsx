import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Facilities from './pages/Facilities';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;

