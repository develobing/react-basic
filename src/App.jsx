import Login from './components/login/Login';

const userId = 'sally';
const userPw = '5555';

const App = () => {
  const user1 = 'robin';

  const login = (userInfo) => {
    console.log('userInfo', userInfo);

    if (userInfo.email === userId && userInfo.password === userPw) {
      alert('로그인에 성공하셨습니다.');
    } else {
      alert('아이디와 비밀번호를 확인해주세요.');
    }
  };

  return (
    <>
      <Login email={user1} password="1234" onLogin={login} />
    </>
  );
};

export default App;
