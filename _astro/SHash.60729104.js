import{p as e}from"./purify.es.0c4e1f83.js";const c=({_search:s})=>{const t=new URL(window.location.href).hash;let o=e.sanitize(t,{USE_PROFILES:{html:!1,mathMl:!1,svg:!1}});o&&(o=o.slice(1),window.location=`https://kbve.com/search/?q=${o}`)};export{c as default};