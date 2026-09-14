import { useMyPage } from "../hooks/useMyPage";

function MyPage({ userId }) {
  const { data, isPending, isError } = useMyPage(userId);

  if (isPending) return <p>로딩중...</p>;
  if (isError) return <p>에러가 발생했습니다.</p>;

  return (
    <div>
      <p>아이디: {data?.username}</p>
      <p>이메일: {data?.email}</p>
    </div>
  );
}

export default MyPage;
