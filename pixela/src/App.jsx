import './App.css';
import { Routes, Route } from 'react-router-dom';
import './Components/fonts.css'
import Home from './Home/home.jsx';
import Member from './Members/members.jsx';
import Song from './Songs/song.jsx';
import Market from './Markets/market.jsx';
import Company from './Company/company.jsx';
import Contact from './Contact/contact.jsx';
import Login from './User/Login.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Member" element={<Member />} />
      <Route path="/Song" element={<Song />} />
      <Route path="/Market" element={<Market />} />
      <Route path="/Company" element={<Company />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
