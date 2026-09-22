import { useState } from "react";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

function ProfileEditForm({ userId }) {
  const [nickname, setNickname] = useState("");
  const { mutate } = useUpdateProfile();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname.trim()) return;

    mutate({ userId, nickname });
    setNickname("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="닉네임 수정"
      />
      <button type="submit">수정</button>
    </form>
  );
}

export default ProfileEditForm;
