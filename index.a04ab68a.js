function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;function a(){document.getElementById("pre-load").classList.add("hidden")}null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i("etrig"),i("8h1Dk");var c=i("ecLez"),s=(c=i("ecLez"),i("hHCHd")),d=i("etrig"),r=i("7IoHk");const l=document.querySelector(".result__container");function u(t){if(l.innerHTML="",0===t.length)return e(r).Notify.failure("Search result not successful. Enter the correct movie name and try again"),void m();t.forEach((e=>{const t=function(e){const t=document.createElement("div");t.classList.add("movie__card");const n=document.createElement("a");n.href="#";const o=document.createElement("img");o.classList.add("movie__poster"),o.src=`${(0,s.getPosterLink)(e)}`,n.appendChild(o);const i=document.createElement("ul");i.classList.add("movie__short-descr");const a=document.createElement("li");a.classList.add("movie__title"),a.textContent=e.original_title,i.appendChild(a);const c=document.createElement("li");return c.classList.add("movie__genre"),c.textContent=`${e.genres} | ${e.release_date.slice(0,4)}`,i.appendChild(c),t.appendChild(n),t.appendChild(i),o.addEventListener("click",(t=>{t.preventDefault();document.querySelector(".backdrop").classList.remove("is-hidden"),(0,d.openModal)(e)})),t}(e);l.appendChild(t)}))}async function m(){g(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${c.API_KEY}`)}document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".header__form"),t=document.querySelector(".form__input"),n=document.querySelector(".form__button");function o(e){e.preventDefault();const n=t.value.trim();""!==n?(document.getElementById("pre-load").classList.remove("hidden"),async function(e){const t=`https://api.themoviedb.org/3/search/movie?api_key=${c.API_KEY}&query=${encodeURIComponent(e)}`;v(1),await new Promise((e=>setTimeout(e,500))),g(t),a()}(n)):(l.innerHTML="",v(1),m())}e.addEventListener("submit",o),n.addEventListener("click",o)})),m();c=i("ecLez");async function p(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${c.API_KEY}&language=en-US`),n=await t.json();return n.genres.map((e=>e.name)).join(", ")}catch(e){return console.error(e),""}}let f=1;function h(e,t,n){const o=document.createElement("button");return o.textContent=e,o.disabled=t,o.addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})})),n&&o.classList.add("pagination-button--current"),o.classList.add("pagination-button"),o}async function g(e){try{const t=await fetch(`${e}&page=${f}`),n=await t.json(),o=Math.ceil(n.total_pages/20),i=n.results.map((e=>p(e.id))),a=await Promise.all(i);n.results.forEach(((e,t)=>{e.genres=a[t]})),u(n.results),function(e,t){const n=document.querySelector(".pagination-container");n.innerHTML="";const o=h("◀",1===f,!1);if(o.addEventListener("click",(async()=>{f--,await g(t)})),o.classList.add("pagination-button--previous"),n.appendChild(o),e<=7)for(let o=1;o<=e;o++){const e=h(o.toString(),o===f,o===f);e.addEventListener("click",(async()=>{f=o,await g(t)})),n.appendChild(e)}else{if(window.screen.width>=768){const e=h("1",1===f,1===f);e.addEventListener("click",(async()=>{f=1,await g(t)})),n.appendChild(e)}let o=Math.max(2,f-2),i=Math.min(e-1,f+2);window.screen.width<768&&(o=Math.max(1,f-2),i=Math.min(e,f+2)),f<=3?i=5:f>=e-2&&(o=e-4),window.screen.width>=768&&o>2&&n.appendChild(h("...",!0));for(let e=o;e<=i;e++){const o=h(e.toString(),e===f,e===f);o.addEventListener("click",(async()=>{f=e,await g(t)})),n.appendChild(o)}if(window.screen.width>=768){i<e-1&&n.appendChild(h("...",!0));const o=h(e.toString(),f===e,f===e);o.addEventListener("click",(async()=>{f=e,await g(t)})),n.appendChild(o)}}const i=h("▶",f===e,!1);i.addEventListener("click",(async()=>{f++,await g(t)})),i.classList.add("pagination-button--next"),n.appendChild(i)}(o,e)}catch(e){console.log("Error",e)}}function v(e){f=e}!async function(){g(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${c.API_KEY}`)}();function L(e){const t=localStorage.getItem(e);return JSON.parse(t)}function w(e,t,n){!function(e,t,n){const o=L(t)||[];if(-1===o.findIndex((t=>t.id===e.id))){o.push(e);const i=JSON.stringify(o);localStorage.setItem(t,i),console.log("Film został zapisany w localStorage.");const a=L(n);if(a){const t=a.findIndex((t=>t.id===e.id));if(-1!==t){a.splice(t,1);const e=JSON.stringify(a);localStorage.setItem(n,e),console.log("Film został usunięty z drugiej listy.")}}}}(e,t,n)}function y(e){const t=L(e);t?t.forEach((e=>{console.log(e.title)})):console.log("Brak filmów na liście.")}document.querySelector(".modal-movie").addEventListener("click",(e=>{const t=e.target;if(t.classList.contains("modal-movie__btn-queue")){const e=JSON.parse(t.dataset.movie);console.log(e),w(e,"queueList","watchedList"),y("queueList")}else if(t.classList.contains("modal-movie__btn-watched")){const e=JSON.parse(t.dataset.movie);console.log(e),w(e,"watchedList","queueList"),y("watchedList")}})),i("iB7wN"),i("jUMkF");document.getElementById("scrollBtn").addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),i("3hsLY");
//# sourceMappingURL=index.a04ab68a.js.map