import React from 'react'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import FilterCartelera from './Components/FilterCartelera/FilterCartelera';
import NavBar from './Components/NavBar/NavBar';
import Carousel from './Components/Carousel/Carousel';

function App() {
  return (
    <BrowserRouter>
        <Route path='/' component={NavBar} />
        <Route path='/' component={Carousel} />
        <Route path='/' component={FilterCartelera} />

    </BrowserRouter>
  );
}

export default App;
