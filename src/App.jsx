import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';
import Resume from './components/Resume';
import OldResume from './components/OldResume';
import './App.css';
import './reset.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/oldresume" element={<OldResume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
