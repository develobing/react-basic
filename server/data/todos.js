const defaultTodos = [
  {
    id: 'todo1',
    content: 'Javascript 공부하기',
    isDone: false,
    userId: 'user1',
    createdAt: new Date('2024-12-25'),
    updatedAt: new Date('2024-12-25'),
    isDeleted: false,
  },
  {
    id: 'todo2',
    content: 'React 공부하기',
    isDone: false,
    userId: 'user1',
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
    isDeleted: false,
  },
  {
    id: 'todo3',
    content: '영어 마스터하기',
    isDone: false,
    userId: 'user2',
    createdAt: new Date('2025-01-05'),
    updatedAt: new Date('2025-01-05'),
    isDeleted: false,
  },
  {
    id: 'todo4',
    content: '일본어 공부하기',
    isDone: false,
    userId: 'user2',
    createdAt: new Date('2025-01-03'),
    updatedAt: new Date('2025-01-03'),
    isDeleted: false,
  },
  {
    id: 'todo5',
    content: '중국어 공부하기',
    isDone: false,
    userId: 'user3',
    createdAt: new Date('2025-01-07'),
    updatedAt: new Date('2025-01-07'),
    isDeleted: false,
  },
];

export const Todos = [...defaultTodos];
