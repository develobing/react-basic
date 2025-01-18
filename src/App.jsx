import { useState } from 'react';
import Login from './components/login/Login';
import Todo from './components/todo/Todo';
import { useDispatch, useSelector } from 'react-redux';

const correctUserInfo = {
  email: 'robin@google.com',
  password: '1234',
  name: '로빈',
};

const App = () => {
  const dispatch = useDispatch();
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
    } else {
      alert('아이디와 비밀번호를 확인해주세요.');
    }
  };

  return (
    <>
      {isLoggedIn ? <Todo userInfo={userInfo} /> : <Login onLogin={onLogin} />}
    </>
  );
};

export default App;
