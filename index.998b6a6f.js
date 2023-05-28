function e(e){return null==e.poster_path?"https://img.freepik.com/darmowe-zdjecie/kolaz-w-tle-filmu_23-2149876032.jpg?w=740&t=st=1685302200~exp=1685302800~hmac=8c53b6db3490cd10fa6f9535b417ac3d7181839ed50758564abb2784f02a1611":`https://image.tmdb.org/t/p/original${e.poster_path}`}function t(t){!function(t){const n=document.querySelector(".modal-movie"),o=document.querySelector(".backdrop"),a=`\n    <div class="modal-movie__poster-box">\n      <img class="modal-movie__poster" src=${e(t)} alt="${t.original_title}" />\n    </div>\n    <button class="modal-movie__btn-close">&times\n    </button>\n\n    <div class="modal-movie__info">\n      <h2 class="modal-movie__title">${t.title}</h2>\n\n      <ul class="modal-movie__list">\n        <li class="modal-movie__item modal-movie__item--label">vote / votes</li>\n        <li class="modal-movie__item modal-movie__item--value">\n          <span class="modal-movie__vote">${t.vote_average.toFixed(1)}</span> <span>/ </span><span>${t.vote_count}</span>\n        </li>\n        <li class="modal-movie__item modal-movie__item--label">popularity</li>\n        <li class="modal-movie__item modal-movie__item--value"><span class="modal-movie__popularity">${t.popularity.toFixed(1)}</span></li>\n        <li class="modal-movie__item modal-movie__item--label">original title</li>\n        <li class="modal-movie__item modal-movie__item--value"><span class="modal-movie__original-title">${t.original_title}</span></li>\n        <li class="modal-movie__item modal-movie__item--label">genre</li>\n        <li class="modal-movie__item modal-movie__item--value"><span class="modal-movie__genre"></span></li>\n      </ul>\n      <div class="modal-movie__description">\n        <h3 class="modal-movie__about">about</h3>\n        <p class="modal-movie__text">${t.overview}</p>\n      </div>\n\n      <div class="modal-movie__btns">\n        <button class="modal-movie__btn-watched">add to watched</button>\n        <button class="modal-movie__btn-queue" data-id=${t.id}>add to queue</button>\n      </div>\n    </div>\n  `;function i(){o.classList.add("is-hidden")}n.innerHTML=a,n.querySelector(".modal-movie__btn-close").addEventListener("click",(()=>{i()})),o.addEventListener("click",(e=>{e.target===o&&i()})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&i()}))}(t)}const n="4c48f56c563cad897bb4af72634cd546",o=document.querySelector(".result__container");function a(n){o.innerHTML="",n.forEach((n=>{const a=function(n){const o=document.createElement("div");o.classList.add("movie__card");const a=document.createElement("a");a.href="#";const i=document.createElement("img");i.classList.add("movie__poster"),i.src=`${e(n)}`,a.appendChild(i);const s=document.createElement("ul");s.classList.add("movie__short-descr");const l=document.createElement("li");l.classList.add("movie__title"),l.textContent=n.original_title,s.appendChild(l);const c=document.createElement("li");return c.classList.add("movie__genre"),c.textContent=`${n.genres} | ${n.release_date.slice(0,4)}`,s.appendChild(c),o.appendChild(a),o.appendChild(s),i.addEventListener("click",(e=>{e.preventDefault();document.querySelector(".backdrop").classList.remove("is-hidden"),t(n)})),o}(n);o.appendChild(a)}))}async function i(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${n}&language=en-US`),o=await t.json();return o.genres.map((e=>e.name)).join(", ")}catch(e){return console.error(e),""}}document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".header__form"),t=document.querySelector(".form__input"),a=document.querySelector(".form__button");function i(e){e.preventDefault();const a=t.value.trim();""!==a?async function(e){const t=`https://api.themoviedb.org/3/search/movie?api_key=${n}&query=${encodeURIComponent(e)}`;(async()=>{c(t)})()}(a):(o.innerHTML="",d())}e.addEventListener("submit",i),a.addEventListener("click",i)}));let s=1;function l(e,t,n){const o=document.createElement("button");return o.textContent=e,o.disabled=t,n&&o.classList.add("pagination-button--current"),o.classList.add("pagination-button"),o}async function c(e){try{const t=await fetch(`${e}&page=${s}`),n=await t.json(),o=Math.ceil(n.total_pages/20),d=n.results.map((e=>i(e.id))),m=await Promise.all(d);n.results.forEach(((e,t)=>{e.genres=m[t]})),a(n.results),function(e,t){const n=document.querySelector(".pagination-container");n.innerHTML="";const o=l("<",1===s,!1);if(o.addEventListener("click",(async()=>{s--,await c(t)})),o.classList.add("pagination-button--previous"),n.appendChild(o),e<=7)for(let o=1;o<=e;o++){const e=l(o.toString(),o===s,o===s);e.addEventListener("click",(async()=>{s=o,await c(t)})),n.appendChild(e)}else{const o=l("1",1===s,1===s);o.addEventListener("click",(async()=>{s=1,await c(t)})),n.appendChild(o);let a=Math.max(2,s-2),i=Math.min(e-1,s+2);s<=3?i=5:s>=e-2&&(a=e-4),a>2&&n.appendChild(l("...",!1));for(let e=a;e<=i;e++){const o=l(e.toString(),e===s,e===s);o.addEventListener("click",(async()=>{s=e,await c(t)})),n.appendChild(o)}i<e-1&&n.appendChild(l("...",!1));const d=l(e.toString(),s===e,s===e);d.addEventListener("click",(async()=>{s=e,await c(t)})),n.appendChild(d)}const a=l(">",s===e,!1);a.addEventListener("click",(async()=>{s++,await c(t)})),a.classList.add("pagination-button--next"),n.appendChild(a)}(o,e)}catch(e){console.log("Error",e)}}async function d(){c(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${n}`)}d();const m=new class{getFromLS(){let e;return e=null===localStorage.getItem("movies")?[]:JSON.parse(localStorage.getItem("movies")),e}saveIntoLS(e){const t=this.getFromLS();t.push(e),localStorage.setItem("movies",JSON.stringify(t))}};document.addEventListener("click",(e=>{if(e.target.classList.contains("modal-movie__btn-queue")){const t=e.target.offsetParent,n={id:e.target.dataset.id,name:t.querySelector(".modal-movie__title").textContent,poster:t.querySelector(".modal-movie__poster").src};m.saveIntoLS(n)}})),localStorage.clear();const r=document.querySelector(".header__toggle"),u=document.body;localStorage.getItem("darkModeEnabled")&&u.classList.add("dark-mode"),r.addEventListener("click",(e=>{e.preventDefault(),u.classList.toggle("dark-mode");const t=u.classList.contains("dark-mode");localStorage.setItem("darkModeEnabled",t)}));const _=document.querySelector(".cookies"),p=document.querySelector("#accept-cookies");document.addEventListener("DOMContentLoaded",(function(){sessionStorage.getItem("cookiesAccepted")?_.style.display="none":setTimeout((()=>{_.style.display="block"}),3e3)})),p.addEventListener("click",(function(){_.style.display="none",sessionStorage.setItem("cookiesAccepted",!0)}));
//# sourceMappingURL=index.998b6a6f.js.map
