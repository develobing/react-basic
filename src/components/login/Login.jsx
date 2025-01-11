const Login = () => {
  return (
    <div class="login-container">
      <form class="login-form" action="todo.html" method="GET">
        <h1>로그인 222</h1>
        <div class="input-group">
          <label for="email">이메일</label>
          <input type="text" id="email" name="email" maxlength="10" required />
        </div>
        <div class="input-group">
          <label for="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            maxlength="10"
            required
          />
        </div>

        <div class="button-group">
          <button type="submit" class="btn primary">
            로그인
          </button>
          <button type="submit" class="btn success">
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
