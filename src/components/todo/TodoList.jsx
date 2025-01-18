const TodoList = () => {
  return (
    <section class="container">
      <div class="todo-container">
        <h1>오늘 할 일</h1>

        <main>
          <div class="todo-input">
            <input
              type="text"
              class="new-task"
              placeholder="할 일을 입력하세요"
            />
            <button class="btn primary" onclick="handleAddTask()">
              추가하기
            </button>
          </div>

          <ul class="todo-list">
            <li>
              <span>React 공부하기</span>
              <div class="button-group">
                <button class="btn success" onclick="completeTask(this)">
                  완료
                </button>
                <button class="btn delete" onclick="deleteTask(this)">
                  삭제
                </button>
              </div>
            </li>
          </ul>
        </main>
      </div>

      <div class="complete-container">
        <h2>완료한 일</h2>
        <ul class="complete-list">
          <li>
            <span class="strike">HTML 공부하기</span>
            <div class="button-group">
              <button class="btn warning" onclick="cancelComplete(this)">
                취소
              </button>
            </div>
          </li>

          <li>
            <span class="strike">CSS 공부하기</span>
            <div class="button-group">
              <button class="btn warning" onclick="cancelComplete(this)">
                취소
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
