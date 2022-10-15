import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavbarItem from './components/Navbar/NavbarItem';
import Author from './pages/Author/Author';
import Collection from './pages/Collection/Collection';
import Items from './pages/Items/Items';
import Users from './pages/Users/Users';

function App() {
  return (
    <div>
      <NavbarItem />
      <Routes>
        <Route path="/" exact element={<Items />} />
        <Route path="/author" element={<Author />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
export default App;
