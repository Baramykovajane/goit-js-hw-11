import{a as p,S as m,i as s}from"./assets/vendor-4sM5MW40.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g="https://pixabay.com/api/",h="52792458-b846233229dd28b7897b8b61b";function y(i){return p.get(g,{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw console.error("Error fetching images:",t),t})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const t=i.map(({webformatURL:r,largeImageURL:a,tags:e,likes:o,views:n,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${r}" alt="${e}" loading="lazy"/>
          <div class="info">
            <p>👍 ${o}</p>
            <p>👁️ ${n}</p>
            <p>💬 ${f}</p>
            <p>⬇️ ${d}</p>
          </div>
        </a>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),b.refresh()}function v(){c.innerHTML=""}function S(){l.classList.add("active")}function E(){l.classList.remove("active")}const u=document.querySelector(".form"),q=u.querySelector('input[name="search-text"]');u.addEventListener("submit",i=>{i.preventDefault();const t=q.value.trim();if(!t){s.error({icon:"fa-solid fa-ban",iconColor:"#2222",message:"Please enter a search term!",backgroundColor:"#EF4040",timeout:3e3,close:!1,position:"topRight"});return}v(),S(),y(t).then(r=>{if(r.hits.length===0){s.info({icon:"fa-solid fa-ban",iconColor:"#2222",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",timeout:3e3,close:!1,position:"topRight"});return}L(r.hits)}).catch(r=>{s.error({icon:"fa-solid fa-ban",iconColor:"#2222",message:"Something went wrong. Please try again!",backgroundColor:"#EF4040",timeout:3e3,close:!1,position:"topRight"}),console.error("Error:",r)}).finally(()=>{E()})});
//# sourceMappingURL=index.js.map
