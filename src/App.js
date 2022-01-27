import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/include/Footer';
import Header from './components/include/Header';
import Main from './components/main/Main';
import LoginForm from './components/member/LoginForm';
import RegisterForm from './components/member/RegisterForm';
import Coffee from './components/menu/coffee/Coffee';
import Notice from './components/whatsnew/Notice';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* login */}
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          {/* gnb */}
          <Route path="/menu/coffee" element={<Coffee />} />
          <Route path="/board/notice" element={<Notice />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
