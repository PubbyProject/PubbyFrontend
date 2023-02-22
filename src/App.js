import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import NavigationBar from './components/navigation/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeView } from './views/home/HomeView';
import { AllEventsView } from './views/events/AllEventsView';

function App() {
  return (
    <>
    <div className="App">
      <NavigationBar>
        <Container>
        <BrowserRouter>
        <Routes>
            <Route
            path='/events'
            element={<AllEventsView/>}>
            </Route>
            <Route
            path='/'
            element={HomeView}>
            </Route>
        </Routes>
        </BrowserRouter>
      </Container>
      </NavigationBar>
    </div>
    </>
  );
}

export default App;
