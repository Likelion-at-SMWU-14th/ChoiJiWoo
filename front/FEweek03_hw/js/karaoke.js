const searchBtn =
    document.getElementById("searchBtn");
const keywordInput =
    document.getElementById("keyword");
const songContainer =
    document.getElementById("songContainer");

searchBtn.addEventListener("click", () => {
    const keyword = keywordInput.value.trim();
    fetch(`https://api.manana.kr/karaoke/singer/${keyword}.json`)
        .then((response) => response.json())
        .then((data) => {

            if (data.length === 0) {
                songContainer.innerHTML = `<p>검색 결과가 없습니다.</p>`;
                return;
            }

            const result = data.map((song) => {
                return `
                    <div class="song-card">
                        <h3>${song.title}</h3>
                        <p>가수 : ${song.singer}</p>
                        <p>번호 : ${song.no}</p>
                        <p>브랜드 : ${song.brand}</p>
                        <p>제목 : $ㄹ{song.title}</p>
                        <p>작곡가 : ${song.composer}</p>
                        <p>작사가 : ${song.lyricist}</p>
                        <p>노래 발매일 : ${song.release}</p>
                    </div>
                `;
            });

            songContainer.innerHTML = result.join("");
        })
        .catch((error) => {

            console.log(error);
            songContainer.innerHTML = `<p>에러가 발생했습니다.</p>`;
        });

});