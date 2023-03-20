import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Things from './Things';

const App = ()=> {
  const [things, setThings] = useState([]);
  useEffect(()=> {
    const fetchThings = async()=> {
      const response = await fetch('/api/things');
      const things = await response.json();
      setThings(things);
    };
    fetchThings();
  }, []);


  return (
    <div>
      <h1>My Uni App</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/things'>Things ({ things.length })</Link>
      </nav>
      <Routes>
        <Route path='/' element={ <h1>Home</h1> } />
        <Route path='/things' element={ <Things things={ things } /> } />
      </Routes>
    </div>
  );
};

export default App;
