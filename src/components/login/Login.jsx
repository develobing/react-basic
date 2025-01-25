import axios from 'axios';
import { useState } from 'react';

const Login = ({ initialEmail = '', initialPassword = '', onLogin }) => {
  const [formData, setFormData] = useState({
    email: initialEmail,
    password: initialPassword,
  });
  const { email, password } = formData;

  const submit = () => {
    const userInfo = { email, password };
    onLogin(userInfo);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
  };

  // API 테스트 함수
  const fetchUsers = () => {
    const apiHost = 'http://localhost:5555';

    // 유저 정보 불러오기
    axios.get(apiHost + '/api/users').then((response) => {
      console.log('response', response);
    });

    // 로그인 API 테스트
    axios
      .post(`${apiHost}/api/auth/login`, {
        email: 'user1@google.com',
        password: 'user1',
      })
      .then((response) => {
        console.log('로그인 정보 - response', response);
      });
  };

  return (
    <div className="login-container">
      <div className="login-form" action="todo.html" method="GET">
        <h1>로그인</h1>
        <div className="input-group">
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            name="email"
            maxLength="20"
            required
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            maxLength="10"
            required
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn primary" onClick={submit}>
            로그인
          </button>
          <button type="submit" className="btn success">
            회원가입
          </button>
          <button type="submit" className="btn warning" onClick={fetchUsers}>
            테스트
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
