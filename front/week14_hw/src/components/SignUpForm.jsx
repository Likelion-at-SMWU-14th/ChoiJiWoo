import { useState } from "react";
import { useSignUp } from "../hooks/useSignup";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;

    mutate({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="아이디 입력"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호 입력"
      />
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignUpForm;
