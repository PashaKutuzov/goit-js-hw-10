import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as S,i as f}from"./assets/vendor-BbbuE1sJ.js";let i=null,r=null;const n=document.querySelector("[data-start]"),h=document.querySelector("#datetime-picker"),w=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]"),v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(f.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(i=t,n.disabled=!1)}};S("#datetime-picker",v);window.addEventListener("load",()=>{n.disabled=!0});n.addEventListener("click",()=>{i&&(r&&clearInterval(r),n.disabled=!0,h.disabled=!0,q(i))});function q(e){r=setInterval(()=>{const o=e-new Date;if(o<=0){clearInterval(r),m(0,0,0,0),f.success({title:"Finished",message:"Time's up!"}),h.disabled=!1,n.disabled=!0;return}const{days:s,hours:l,minutes:c,seconds:d}=a(o);m(s,l,c,d)},1e3)}function m(e,t,o,s){w.textContent=String(e),b.textContent=u(t),g.textContent=u(o),D.textContent=u(s)}function u(e){return String(e).padStart(2,"0")}function a(e){const c=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),y=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:y,seconds:p}}console.log(a(2e3));console.log(a(14e4));console.log(a(2414e4));
//# sourceMappingURL=1-timer.js.map
