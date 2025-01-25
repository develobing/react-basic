import Login from './components/login/Login';
import Todo from './components/todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

// API 통신
// 프론트         서버
// request -> response

// 어떤 API 요청(request)인지 어떻게 구분?
// 1. URL
// /api/login
// 2. Method
// GET / POST / PUT / DELETE
// API SERVER - 데이터가 저장되어 프론트에서 API 통신이란거로 데이터를 불러올 수 있는 서버

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((store) => store.userInfo);
  const isLoggedIn = userInfo !== null;

  const saveToken = (token) => {
    localStorage.setItem('token', token);
  };

  const loadToken = () => {
    const token = localStorage.getItem('token');
    return token;
  };

  useEffect(() => {
    const token = loadToken();
    if (token) {
      afterLogin(token);
    }
  }, []);

  const onLogin = (userInfo) => {
    axios
      .post('http://localhost:5555/api/auth/login', userInfo)
      .then((response) => {
        console.log('로그인 정보 - response', response);

        const responseData = response.data;
        const serverData = responseData.data;

        // JWT 토큰 파싱
        const token = serverData.token;

        // 토큰 저장
        saveToken(token);

        // 로그인 성공 후, 유저 정보 가져오기
        afterLogin(token, true);
      })
      .catch((error) => {
        console.log('로그인 에러 - error', error);
        alert('아이디와 패스워드를 확인해주세요.');
      });
  };

  const afterLogin = (token, isLogin = false) => {
    const jwt = parseJWT(token);
    const userId = jwt.payload.id;

    axios
      .get('http://localhost:5555/api/users/' + userId)
      .then((response) => {
        const loginUserInfo = response.data.data;
        console.log('loginUserInfo', loginUserInfo);
        if (isLogin) alert('로그인 성공');

        dispatch({
          type: 'LOGIN',
          payload: loginUserInfo,
        });
        navigate('/todo');
      })
      .catch((error) => {
        alert('유저 정보를 가져오는데 실패하였습니다.');
      });
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />}></Route>
      <Route path="/login" element={<Login onLogin={onLogin} />}></Route>
      <Route path="/todo" element={<Todo userInfo={userInfo} />}></Route>
      <Route path="*" element={<h2>404 - 없는 페이지 입니다.</h2>}></Route>
    </Routes>
  );
};

export default App;

function parseJWT(token) {
  // 토큰을 '.' 기준으로 분리
  const parts = token.split('.');

  if (parts.length !== 3) {
    throw new Error('Invalid JWT token');
  }

  // Base64Url 디코딩을 위한 함수
  function base64UrlDecode(base64Url) {
    // Base64Url을 표준 Base64로 변환
    let base64 = base64Url
      .replace(/-/g, '+') // '-'를 '+'로 변환
      .replace(/_/g, '/'); // '_'를 '/'로 변환

    // 패딩(=)이 없으면 추가
    while (base64.length % 4) {
      base64 += '=';
    }

    // Base64 디코딩
    const decoded = atob(base64);
    try {
      return JSON.parse(decoded);
    } catch (e) {
      throw new Error('Invalid JSON in token');
    }
  }

  // 각 파트를 디코딩
  const header = base64UrlDecode(parts[0]);
  const payload = base64UrlDecode(parts[1]);

  // 서명 부분은 디코딩할 수 없고, 보통 서명을 검증하는 용도로 사용됩니다
  const signature = parts[2];

  return { header, payload, signature };
}
