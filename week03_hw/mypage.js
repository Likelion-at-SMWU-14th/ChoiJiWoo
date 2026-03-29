const logoutIconBtn = document.querySelector(".btn-logout-icon");

logoutIconBtn.addEventListener("click", function () {
    alert("로그아웃 되었습니다.");
    window.location.href = "./login.html";
});