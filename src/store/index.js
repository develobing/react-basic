import { createStore } from 'redux';

// Redux 용어 정리
// State: 데이터 Store
// Reducer: 데이터를 가지고 있는 공간이자 액션을 처리기
// Action: 데이터를 변경하는 방법
const reducer = (previousState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOGIN':
      return {
        userInfo: payload,
      };

    case 'LOGOUT':
      return {
        userInfo: null,
      };

    default:
      return {
        userInfo: null,
      };
  }
};

const store = createStore(reducer);

export default store;
