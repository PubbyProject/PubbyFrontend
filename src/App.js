import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navigation/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Router from './routes/PubbyRouter';

function App() {
  return (
    <>
    <div className="App">
      <NavigationBar>
        <Container>
          <Router/>
      </Container>
      </NavigationBar>
    </div>
    </>
  );
}

export default App;
