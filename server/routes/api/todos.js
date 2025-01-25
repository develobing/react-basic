import express from 'express';
import _ from 'lodash';
import { Todos } from '../../data/todos.js';
import { auth } from '../../middlewares/auth.js';
import { generateRandomId } from '../../utils/common.js';

const router = express.Router();

// 할일 전체 조회
router.get('/', auth, (req, res) => {
  const userId = req.loginUserId;
  const validTodos = Todos.filter((todo) => !todo.isDeleted);
  const myTodos = validTodos.filter((todo) => todo.userId === userId);

  res.json({
    isSuccess: true,
    message: '할일 전체 조회 성공',
    data: {
      todos: myTodos,
    },
  });
});

// 할일 상세 조회
router.get('/:id', auth, (req, res) => {
  res.json({
    isSuccess: true,
    message: '할일 상세 조회 성공',
    data: {
      todo: Todos.find((todo) => todo.id === req.params.id),
    },
  });
});

// 할일 작성
router.post('/', auth, (req, res) => {
  const newTodo = req.body;
  newTodo.id = generateRandomId();
  newTodo.userId = req.loginUserId;
  newTodo.isDone = false;
  newTodo.createdAt = new Date();
  newTodo.updatedAt = new Date();
  Todos.push(newTodo);

  res.json({
    isSuccess: true,
    message: '할일 작성 성공',
    data: {
      todo: newTodo,
    },
  });
});

// 할일 수정
router.put('/:id', auth, (req, res) => {
  const updatedTodo = req.body;
  const targetTodo = Todos.find((todo) => todo.id === req.params.id);
  targetTodo.content = updatedTodo.content;
  targetTodo.isDone = updatedTodo.isDone;
  targetTodo.updatedAt = new Date();

  res.json({
    isSuccess: true,
    message: '할일 수정 성공',
    data: {
      todo: targetTodo,
    },
  });
});

// 할일 삭제
router.delete('/:id', auth, (req, res) => {
  const targetTodo = Todos.find((todo) => todo.id === req.params.id);
  targetTodo.isDeleted = true;

  res.json({
    isSuccess: true,
    message: '할일 삭제 성공',
  });
});

export default router;
