import { useDispatch, useSelector } from 'react-redux';

const TodoHeader = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const userInfo = state.userInfo;
  console.log('state', state);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <header class="header">
      <div class="header-left">
        <span class="header-logo">{userInfo.name}님, 오늘 할 일</span>
      </div>

      <div class="header-right">
        <button class="btn primary" onClick={logout}>
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default TodoHeader;
