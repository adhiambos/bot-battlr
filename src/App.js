import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './components/Home';
import './App.css';

function App() {
  const [botsArray, setBotsArray] = useState([]);
  const [favouriteBots, setFavouriteBots] = useState([]);

  useEffect(() => {
    const url = "https://bot-data-1lv2.onrender.com/bots";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBotsArray(data));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            botsArray={botsArray}
            setBotsArray={setBotsArray}
            favouriteBots={favouriteBots}
            setFavouriteBots={setFavouriteBots}
          />
        }
      />
      <Route
        path="/details"
        element={
          <Details
            botsArray={botsArray}
            setBotsArray={setBotsArray}
            favouriteBots={favouriteBots}
            setFavouriteBots={setFavouriteBots}
          />
        }
      />
      <Route
        path="/details/:id"
        element={
          <Details
            botsArray={botsArray}
            setBotsArray={setBotsArray}
            favouriteBots={favouriteBots}
            setFavouriteBots={setFavouriteBots}
          />
        }
      />
    </Routes>
  );
}

export default App;