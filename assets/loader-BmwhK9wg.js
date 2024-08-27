import{a as i}from"./vendor-BpSrBs7K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const l="https://pixabay.com/api/",u="43222860-c920ce4922a75b9f5ac3c35c2";async function m(c,t){const r=new URLSearchParams({key:u,q:c,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});return(await i(`${l}?${r}`)).data}function f(c){return c.map(({webformatURL:t,largeImageURL:r,tags:o,likes:e,views:s,comments:a,downloads:n})=>`<li class="gallery-item">
        <div class="thumb">
            <a class="gallery-link" href="${r}">
              <img
                class="gallery-image"
                src="${t}"
                alt="${o}"
              />
            </a>
              <ul class="description-list">
                <li class="description-items"><span class="accent">Likes </span>${e}</li>
                <li class="description-items"><span class="accent">Views </span>${s}</li>
                <li class="description-items"><span class="accent">Comments </span>${a}</li>
                <li class="description-items"><span class="accent">Downloads </span>${n}</li>
              </ul>
        </div>
      </li>`).join("")}const y=document.querySelector(".js-search-form "),g=document.querySelector(".search-input"),h=document.querySelector("ul.gallery"),d=document.querySelector(".loader"),S=document.querySelector(".load-more"),L=document.querySelector(".js-guard");function $(){d.classList.toggle("hidden")}export{$ as a,m as b,f as c,L as d,y as f,h as g,g as i,S as l};
//# sourceMappingURL=loader-BmwhK9wg.js.map
