import Login from './components/login/Login';
import Todo from './components/todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

const correctUserInfo = {
  email: 'robin@google.com',
  password: '1234',
  name: '로빈',
};

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((store) => store.userInfo);
  const isLoggedIn = userInfo !== null;

  const onLogin = (userInfo) => {
    const { email, password } = userInfo;

    if (
      email === correctUserInfo.email &&
      password === correctUserInfo.password
    ) {
      alert('로그인에 성공하셨습니다.');
      dispatch({ type: 'LOGIN', payload: correctUserInfo });
      navigate('/todo');
    } else {
      alert('아이디와 비밀번호를 확인해주세요.');
    }
  };

  return (
    <Routes>
      <Route path="/" element={<h2>루트 라우트</h2>}></Route>
      <Route path="/login" element={<Login onLogin={onLogin} />}></Route>
      <Route path="/todo" element={<Todo userInfo={userInfo} />}></Route>
      <Route path="*" element={<h2>404 - 없는 페이지 입니다.</h2>}></Route>
    </Routes>
  );
};

export default App;
