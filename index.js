import{a as u,S as f,i as l}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com",g="/api";function p(a){const r=new URLSearchParams({key:"48827773-420cc6a3931f90379a2431d96",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=m+g+`?${r}`;return u.get(o)}let c;function h(a){const r=document.querySelector(".gallery"),o=a.map(s=>`<li class="gallery-item">
            <a class='gallery-link' href="${s.largeImageURL}">
              <img class="li-img"
              src="${s.webformatURL}" 
              alt="${s.tags}/> 
              <div class="li-text">
                <table class="table">
                    <tr><td>Likes</td><td>Views</td><td>Comment</td><td>Downloads</tr>
                    <tr><td>>${s.likes}</td><td>${s.views}</td><td>${s.comments}</td><td>${s.downloads}</tr>
                </table>
              
                </div>
              </a>
            </li>
            
    `).join("");r.insertAdjacentHTML("afterbegin",o),c=new f(".gallery a",{captionsData:"alt",captionDelay:250,close:"true"}),c.refresh()}const d=document.querySelector(".form"),y=document.querySelector(".input-search"),n=document.querySelector(".wait-msg");d.addEventListener("submit",a=>{a.preventDefault(),document.querySelector(".gallery").innerHTML="";let r=y.value.trim();if(!r){l.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Input search string"});return}n.innerHTML='"Wait, the image is loaded" <span class="loader"></span>',p(r).then(o=>{o.data.hits.length==0?l.show({backgroundColor:"rgba(239, 64, 64, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"true",position:"topRight",title:"Error",titleColor:"#fff",titleSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}):h(o.data.hits),n.textContent=""}).catch(o=>{n.textContent="Ups ...",console.log(o)}),d.reset()});
//# sourceMappingURL=index.js.map
