import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import ActorsContainer from './components/actorsContainer';
import Actress from './components/actress';
import Films from './components/films';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="Oscars 2019" />
        <Route exact path="/" render={() => <Home title="Oscar Winners" />} />
        <Route path="/actors" render={() => <ActorsContainer />} />
        <Route path="/actress" component={Actress} />
        <Route path="/films" component={Films} />
      </div>
    </BrowserRouter>
  );
}

export default App;
