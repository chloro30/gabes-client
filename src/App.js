import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/include/Footer';
import Header from './components/include/Header';
import Main from './components/main/Main';
import LoginForm from './components/member/LoginForm';
import RegisterForm from './components/member/RegisterForm';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
