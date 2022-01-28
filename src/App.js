import { Route, Routes } from 'react-router-dom';
import './App.css';
import CompanyIntro from './components/about/intro/CompanyIntro';
import Footer from './components/include/Footer';
import Header from './components/include/Header';
import Main from './components/main/Main';
import LoginForm from './components/member/LoginForm';
import RegisterForm from './components/member/RegisterForm';
import Coffee from './components/menu/coffee/Coffee';
import StoreArea from './components/store/StoreArea';
import FaqPage from './components/whatsnew/FaqPage';
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
          <Route path="/about/intro" element={<CompanyIntro />} />
          <Route path="/menu/coffee" element={<Coffee />} />
          <Route path="/board/notice" element={<Notice />} />
          <Route path="/board/faq" element={<FaqPage />} />
          {/* <Route path="/board/event" element={<Event />} /> */}
          <Route path="/store" element={<StoreArea />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
