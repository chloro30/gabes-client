import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import History from './components/gabes/history/History';
import CompanyIntro from './components/gabes/intro/CompanyIntro';
import Footer from './components/include/Footer';
import Header from './components/include/Header';
import Main from './components/main/Main';
import MemberInfo from './components/member/mypage/MemberInfo';
import RegisterForm from './components/member/RegisterForm';
import Coffee from './components/menu/coffee/Coffee';
import Desert from './components/menu/desert/Desert';
import StoreArea from './components/store/StoreArea';
import FaqPage from './components/whatsnew/FaqPage';
import Notice from './components/whatsnew/notice/Notice';
import NoticeDetail from './components/whatsnew/notice/NoticeDetail';
import NoticeUpdate from './components/whatsnew/notice/NoticeUpdate';
import NoticeUpForm from './components/whatsnew/notice/NoticeUpForm';

function App() {

    //로그인 상태 관리
    const [isLogin, setIsLogin] = useState(false);

    useEffect(()=>{
      if(sessionStorage.getItem('user_id') === null){
        //sessionStorage에 Key가 user_id라는 데이터가 없다면...
        // console.log(`로그인 상태인가? => ${isLogin}`);
      }else{
        //sessionStorage에 Key가 user_id라는 데이터가 있다면...
        setIsLogin(true);
        // console.log(`로그인 상태인가? => ${isLogin}`);
      }
    }, [isLogin]);
    
    // console.log(`로그인 된 아이디: ${sessionStorage.getItem('user_id')}`);


  return (
    <div className="App">
      <Header isLogin={isLogin} />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* 회원등록 */}
          <Route path="/register" element={<RegisterForm />} />
          {/* gnb 메뉴 */}
          <Route path="/about/intro" element={<CompanyIntro />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/menu/coffee" element={<Coffee />} />
          <Route path="/menu/desert" element={<Desert />} />
          <Route path="/board/notice" element={<Notice />} />
          <Route path="/board/notice/upload" element={<NoticeUpForm />} />
          <Route path="/board/notice/:no" element={<NoticeDetail />} />
          <Route path="/board/notice/update/:no" element={<NoticeUpdate />} />
          <Route path="/board/faq" element={<FaqPage />} />
          <Route path="/store" element={<StoreArea />} />
          {/* login 메뉴 */}
          <Route path="/mypage" element={<MemberInfo />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
