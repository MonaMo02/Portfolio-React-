import './App.css';
import Home from './Sections/Main/HomeScreen';
import Header from './Sections/Main/Header';
import Footer from './Sections/Main/Footer';

function App() {
  return (
    <div className="App">
        <div>
          <Header />
          <Home /> 
          <Footer />
        </div>
    </div>
  );
}

export default App;
