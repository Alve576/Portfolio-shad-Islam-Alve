import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resume from './Pages/Resume/Resume';
import Contact from './Pages/Contact/Contact'
import initializeAppFirebase from './Firebase/firebase.init';
function App() {
  initializeAppFirebase()
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
