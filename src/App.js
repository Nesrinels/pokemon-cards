import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Types from './Pages/Types';
import Cards from './Pages/Cards';
import Card from './Pages/Card';
import Error404 from './Pages/Error404';

import Header from './Components/Header';

import GlobalContext from './Providers/GlobalContext';
import { defaultGlobal } from './Providers/dataGlobal';

function App() {
  const [dataGlobal, setDataGlobal] = useState(defaultGlobal);

  const setData = (data) => {
    setDataGlobal((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={{ setData, dataGlobal }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/error404" element={<Error404 />} />
            <Route path="/:type" element={<Cards />} />
            <Route path="/:type/:id" element={<Card />} />
            <Route path="/" element={<Types />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;