const TodoHeader = () => {
  return (
    <header class="header">
      <div class="header-left">
        <span class="header-logo">오늘 할 일</span>
      </div>

      <div class="header-right">
        <button class="btn primary">로그아웃</button>
      </div>
    </header>
  );
};

export default TodoHeader;
