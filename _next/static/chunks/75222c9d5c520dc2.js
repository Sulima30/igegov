(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63687,e=>{"use strict";var o=e.i(43476),t=e.i(71645);function i(){let[e,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let e=()=>{i(window.scrollY>300)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,o.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"Voltar ao topo",className:`
        fixed bottom-6 right-56 z-50
        pointer
        h-14 w-14 rounded-full
        flex items-center justify-center
        bg-gradient-to-tr from-[#0f4098] to-[#3a4f7f]
        shadow-lg
        transition-all duration-300
        hover:scale-110 hover:shadow-xl
        active:scale-95
        ${e?"opacity-100 animate-softPulse":"opacity-0 pointer-events-none"}
      `,children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6",children:(0,o.jsx)("polyline",{points:"6 15 12 9 18 15"})})})}e.s(["default",()=>i])}]);