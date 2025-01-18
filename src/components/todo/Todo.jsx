import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const Todo = ({ userInfo }) => {
  return (
    <>
      <TodoHeader userName={userInfo.name} />
      <TodoList />
    </>
  );
};

export default Todo;
