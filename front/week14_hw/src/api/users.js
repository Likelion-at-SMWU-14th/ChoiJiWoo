// 회원가입
export const signUp = async ({ username, password }) => {
  console.log("POST /api/users", { username, password });

  return {
    id: 1,
    username,
  };
};

// 마이페이지 조회
export const fetchMyPage = async (userId) => {
  console.log(`GET /api/users/${userId}`);

  return {
    id: userId,
    username: "지우",
    email: "example@test.com",
  };
};

// 개인정보 수정
export const updateProfile = async ({ userId, ...updatedFields }) => {
  console.log(`PUT /api/users/${userId}`, updatedFields);

  return {
    id: userId,
    ...updatedFields,
  };
};

// 회원 탈퇴
export const deleteUser = async (userId) => {
  console.log(`DELETE /api/users/${userId}`);

  return { id: userId };
};