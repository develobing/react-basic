import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Todo = ({ userInfo }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) navigate('/login');
  }, []);

  return userInfo ? (
    <>
      <TodoHeader userName={userInfo?.name} />
      <TodoList />
    </>
  ) : (
    <></>
  );
};

export default Todo;
