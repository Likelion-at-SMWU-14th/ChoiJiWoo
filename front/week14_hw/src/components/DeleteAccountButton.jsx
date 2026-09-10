import { useDeleteUser } from "../hooks/useDeleteUser";

function DeleteAccountButton({ userId }) {
  const { mutate, isPending } = useDeleteUser();

  const handleDelete = () => {
    mutate(userId);
  };

  return (
    <button onClick={handleDelete} disabled={isPending}>
      {isPending ? "처리중..." : "회원 탈퇴"}
    </button>
  );
}

export default DeleteAccountButton;
