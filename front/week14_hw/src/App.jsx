import SignUpForm from "./components/SignUpForm";
import MyPage from "./components/MyPage";
import ProfileEditForm from "./components/ProfileEditForm";
import DeleteAccountButton from "./components/DeleteAccountButton";

function App() {
  const userId = 1;
  return (
    <div>
      <h1>회원 관리</h1>
      <SignUpForm />
      <MyPage userId={userId} />
      <ProfileEditForm userId={userId} />
      <DeleteAccountButton userId={userId} />
    </div>
  );
}

export default App;
