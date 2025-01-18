import { useState } from 'react';

const Login = ({ initialEmail, initialPassword, onLogin }) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  const submit = () => {
    const userInfo = { email, password };
    onLogin(userInfo);
  };

  const handleChange = (event) => {
    const input = event.target;
    setEmail(input.value);
  };

  const handleChangePassword = (event) => {
    const input = event.target;
    setPassword(input.value);
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
            maxLength="10"
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
            onChange={handleChangePassword}
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn primary" onClick={submit}>
            로그인
          </button>
          <button type="submit" className="btn success">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
