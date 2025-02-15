import{a as c,S as d,i as l}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="https://pixabay.com",f="/api";function m(a){const r=new URLSearchParams({key:"48827773-420cc6a3931f90379a2431d96",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=u+f+`?${r}`;return c.get(s)}function g(a,r){const s=document.querySelector(r),o=a.map(t=>`<li class="gallery-item">
            <a class='gallery-link' href="${t.largeImageURL}">
              <img class="li-img"
              src="${t.webformatURL}" 
              alt="${t.tags}/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</tr>
                    <tr><td>>${t.likes}</td><td>${t.views}</td><td>${t.comments}</td><td>${t.downloads}</tr>
                </table>

              
          
              
              
                </div>
              </a>
            </li>
            
    `).join("");s.insertAdjacentHTML("afterbegin",o),new d(r+" a",{captionsData:"alt",captionDelay:250}).refresh()}const p=document.querySelector(".form"),h=document.querySelector(".input-search"),n=document.querySelector(".wait-msg");p.addEventListener("submit",a=>{a.preventDefault();const r=a.target;let s=h.value.trim();if(!s){l.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"});return}n.innerHTML='"Wait, the image is loaded" <span class="loader"></span>',m(s).then(o=>{o.data.hits.length==0?l.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}):g(o.data.hits,".gallery"),n.textContent=""}).catch(o=>{n.textContent="Ups ...",console.log(o)}),r.reset()});
//# sourceMappingURL=index.js.map
