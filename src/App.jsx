import { useState } from 'react';
import Login from './components/login/Login';
import Todo from './components/todo/Todo';

const userId = 'sally';
const userPw = '5555';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user1 = 'robin';

  const onLogin = (userInfo) => {
    console.log('userInfo', userInfo);
    const { email, password } = userInfo;

    if (email === userId && password === userPw) {
      alert('로그인에 성공하셨습니다.');
      setIsLoggedIn(true);
    } else {
      alert('아이디와 비밀번호를 확인해주세요.');
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Todo />
      ) : (
        <Login initialEmail={user1} initialPassword="1234" onLogin={onLogin} />
      )}
    </>
  );
};

export default App;
