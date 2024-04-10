import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from './components/NavBar/Navbar';
//import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login.jsx"
function App() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        setUser={setUser}
        user={user}
      />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path='/Login'element={<Login />} />
      </Routes>
     
    </Router>
  );
}

export default App;
