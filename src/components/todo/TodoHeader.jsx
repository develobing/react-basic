import { useDispatch, useSelector } from 'react-redux';

const TodoHeader = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const userInfo = state.userInfo;

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <header className="header">
      <div className="header-left">
        <span className="header-logo">{userInfo.name}님, 오늘 할 일</span>
      </div>

      <div className="header-right">
        <button className="btn primary" onClick={logout}>
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default TodoHeader;
