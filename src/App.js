import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/include/Footer';
import Header from './components/include/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
