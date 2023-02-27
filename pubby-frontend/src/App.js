import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavigationBar from './components/navigation/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/home/HomeView';
import AllEventsView from './views/events/AllEventsView';

function App() {
    return (
      <div className='App'>
        <Router>
          <NavigationBar/>
          <Routes>
            <Route exact path='/' element={<HomeView/>}/>
            <Route path='/events' element={<AllEventsView/>}/>
          </Routes>
        </Router>
      </div>
    );
}

export default App;
