const e=document.querySelector(".movies-list");!async function(){await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=4c48f56c563cad897bb4af72634cd546&page=1").then((e=>e.json())).then((t=>{t.results.forEach((t=>{const i=`<div class="movie-card">\n        <a href="#"> <img class="movie-poster" src="https://image.tmdb.org/t/p/original${t.poster_path}" /></a>\n        <ul class="movie-short-descr">\n          <li class="movie-title">${t.original_title}</li>\n          <li class="movie-genre">${t.release_date} | ${t.genre_ids}</li>\n        </ul>\n      </div>`;e.insertAdjacentHTML("beforeend",i)}))})).catch((e=>console.error(e)))}();
//# sourceMappingURL=index.19d4b40b.js.map