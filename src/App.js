import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import NavigationBar from './components/navigation/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeView } from './views/home/HomeView';
import { AllEventsView } from './views/events/AllEventsView';

class App extends React.Component {
  render() {
    return (
      <>
        <NavigationBar>
          <Container>
          <BrowserRouter>
          <Routes>
              <Route
              path='/events'
              element={<AllEventsView/>}>
              </Route>
              <Route
              path='/home'
              element={HomeView}>
              </Route>
          </Routes>
          </BrowserRouter>
        </Container>
        </NavigationBar>
      </>
    );
  }
}

export default App;
