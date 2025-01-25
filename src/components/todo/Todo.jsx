import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Todo = ({ userInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) navigate('/login');
    else fetchTodos();
  }, []);

  const loadToken = () => {
    const token = localStorage.getItem('token');
    return token;
  };

  const fetchTodos = () => {
    const token = loadToken();

    // TODO 목록을 가져와서 실행 할것임
    axios
      .get('http://localhost:5555/api/todos', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        console.log('response', response);
        const todos = response.data.data.todos;
        console.log('todos', todos);

        dispatch({ type: 'TODO_LIST', payload: todos });
      });
  };

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
