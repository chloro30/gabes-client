import { Route, Routes } from 'react-router-dom';
import './App.css';
import History from './components/gabes/history/History';
import CompanyIntro from './components/gabes/intro/CompanyIntro';
import Footer from './components/include/Footer';
import Header from './components/include/Header';
import Main from './components/main/Main';
import LoginForm from './components/member/LoginForm';
import RegisterForm from './components/member/RegisterForm';
import Coffee from './components/menu/coffee/Coffee';
import Desert from './components/menu/desert/Desert';
import StoreArea from './components/store/StoreArea';
// import Event from './components/whatsnew/event/Event';
import FaqPage from './components/whatsnew/FaqPage';
import Notice from './components/whatsnew/notice/Notice';
import NoticeDetail from './components/whatsnew/notice/NoticeDetail';
import NoticeUpdate from './components/whatsnew/notice/NoticeUpdate';
import NoticeUpForm from './components/whatsnew/notice/NoticeUpForm';

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
          <Route path="/about/history" element={<History />} />
          <Route path="/menu/coffee" element={<Coffee />} />
          <Route path="/menu/desert" element={<Desert />} />
          <Route path="/board/notice" element={<Notice />} />
          <Route path="/board/notice/upload" element={<NoticeUpForm />} />
          <Route path="/board/notice/:no" element={<NoticeDetail />} />
          <Route path="/board/notice/update/:no" element={<NoticeUpdate />} />
          <Route path="/board/faq" element={<FaqPage />} />
          {/* <Route path="/board/event" element={<Event />} /> */}
          <Route path="/store" element={<StoreArea />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
