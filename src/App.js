import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar.js';

import Assesment from './Assesment.js'

import MainSearchBar from './MainSearchBar.js'; 

import './App.css';

function App() {

  return (

    <div className="App">

        <Router>

        <Navbar/>

        <Routes>

          <Route path="/" element={<MainSearchBar/>} />

  //Lakshay codEd

        </Routes>

      </Router>

      <Assesment/>

    </div>

  );

}



export default App;
