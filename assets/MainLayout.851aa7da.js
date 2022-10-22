import{v as ht,c as Ve,g as pt,a as yt,Q as gt}from"./QBtn.b329a95e.js";import{c as _,h as Z,a as bt,b as wt,d as Oe,e as Ct}from"./render.7a3e8658.js";import{c as m,h as S,r as L,j as Ue,o as U,k as F,n as Le,l as I,g as M,m as P,p as O,w,a as ze,q as ae,H as _e,s as $,t as Ie,u as qt,v as Tt,P as xt,x as St,y as oe,z as he,A as Me,B as pe,C as xe,D as ye,E as Lt,G as je,I as zt,J as ie,b as Et,K as kt,L as Bt,M as R,N as $t,d as W,O as He,Q as Pt}from"./index.70e25171.js";var Vt=_({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:n.value},Z(o.default))}}),Ot=_({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:n.value,role:"toolbar"},Z(o.default))}});function _t(){const e=L(!Ue.value);return e.value===!1&&U(()=>{e.value=!0}),e}const Ke=typeof ResizeObserver!="undefined",De=Ke===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Se=_({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,r,t={width:-1,height:-1};function i(c){c===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(clearTimeout(n),n=null,r){const{offsetWidth:c,offsetHeight:d}=r;(c!==t.width||d!==t.height)&&(t={width:c,height:d},o("resize",t))}}const{proxy:f}=M();if(Ke===!0){let c;const d=a=>{r=f.$el.parentNode,r?(c=new ResizeObserver(i),c.observe(r),s()):a!==!0&&I(()=>{d(!0)})};return U(()=>{d()}),F(()=>{clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():r&&c.unobserve(r))}),Le}else{let a=function(){clearTimeout(n),d!==void 0&&(d.removeEventListener!==void 0&&d.removeEventListener("resize",i,P.passive),d=void 0)},b=function(){a(),r&&r.contentDocument&&(d=r.contentDocument.defaultView,d.addEventListener("resize",i,P.passive),s())};const c=_t();let d;return U(()=>{I(()=>{r=f.$el,r&&b()})}),F(a),f.trigger=i,()=>{if(c.value===!0)return S("object",{style:De.style,tabindex:-1,type:"text/html",data:De.url,"aria-hidden":"true",onLoad:b})}}}}),Mt=_({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:r}}=M(),t=ze(ae,O);if(t===O)return console.error("QHeader needs to be child of QLayout"),O;const i=L(parseInt(e.heightHint,10)),s=L(!0),f=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),c=m(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?i.value:0;const u=i.value-t.scroll.value.position;return u>0?u:0}),d=m(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),a=m(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),b=m(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=m(()=>{const u=t.rows.value.top,q={};return u[0]==="l"&&t.left.space===!0&&(q[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(q[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),q});function v(u,q){t.update("header",u,q)}function h(u,q){u.value!==q&&(u.value=q)}function z({height:u}){h(i,u),v("size",u)}function T(u){a.value===!0&&h(s,!0),n("focusin",u)}w(()=>e.modelValue,u=>{v("space",u),h(s,!0),t.animate()}),w(c,u=>{v("offset",u)}),w(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),w(s,u=>{t.animate(),n("reveal",u)}),w(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&v("size",i.value),v("space",e.modelValue),v("offset",c.value),F(()=>{t.instances.header===g&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const u=bt(o.default,[]);return e.elevated===!0&&u.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(S(Se,{debounce:0,onResize:z})),S("header",{class:b.value,style:C.value,onFocusin:T},u)}}});const Ge={dark:{type:Boolean,default:null}};function Je(e,o){return m(()=>e.dark===null?o.dark.isActive:e.dark)}var Ht=_({name:"QList",props:{...Ge,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:o}){const n=M(),r=Je(e,n.proxy.$q),t=m(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S("div",{class:t.value,role:"list"},Z(o.default))}});function Dt(e,o,n){let r;function t(){r!==void 0&&(_e.remove(r),r=void 0)}return F(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){r={condition:()=>n.value===!0,handler:o},_e.add(r)}}}const Wt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Qt=["before-show","show","before-hide","hide"];function At({showing:e,canShow:o,hideOnRouteChange:n,handleShow:r,handleHide:t,processOnMount:i}){const s=M(),{props:f,emit:c,proxy:d}=s;let a;function b(u){e.value===!0?h(u):C(u)}function C(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const q=f["onUpdate:modelValue"]!==void 0;q===!0&&(c("update:modelValue",!0),a=u,I(()=>{a===u&&(a=void 0)})),(f.modelValue===null||q===!1)&&v(u)}function v(u){e.value!==!0&&(e.value=!0,c("before-show",u),r!==void 0?r(u):c("show",u))}function h(u){if(f.disable===!0)return;const q=f["onUpdate:modelValue"]!==void 0;q===!0&&(c("update:modelValue",!1),a=u,I(()=>{a===u&&(a=void 0)})),(f.modelValue===null||q===!1)&&z(u)}function z(u){e.value!==!1&&(e.value=!1,c("before-hide",u),t!==void 0?t(u):c("hide",u))}function T(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?v:z)(a)}w(()=>f.modelValue,T),n!==void 0&&ht(s)===!0&&w(()=>d.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),i===!0&&U(()=>{T(f.modelValue)});const g={show:C,hide:h,toggle:b};return Object.assign(d,g),g}const Rt=[null,document,document.body,document.scrollingElement,document.documentElement];function Ft(e,o){let n=pt(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return Rt.includes(n)?window:n}function Ze(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function et(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ne;function ge(){if(ne!==void 0)return ne;const e=document.createElement("p"),o=document.createElement("div");Ve(e,{width:"100%",height:"200px"}),Ve(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let r=e.offsetWidth;return n===r&&(r=o.clientWidth),o.remove(),ne=n-r,ne}function Nt(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let G=0,be,we,J,Ce=!1,We,Qe,Y;function Xt(e){Yt(e)&&Ie(e)}function Yt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=qt(e),n=e.shiftKey&&!e.deltaX,r=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||r?e.deltaY:e.deltaX;for(let i=0;i<o.length;i++){const s=o[i];if(Nt(s,r))return r?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ae(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function re(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;(J===void 0||o!==window.innerHeight)&&(J=n-o,document.scrollingElement.scrollTop=r),r>J&&(document.scrollingElement.scrollTop-=Math.ceil((r-J)/8))}))}function Re(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:r,overflowX:t}=window.getComputedStyle(o);be=et(window),we=Ze(window),We=o.style.left,Qe=o.style.top,o.style.left=`-${be}px`,o.style.top=`-${we}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,$.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",re,P.passiveCapture),window.visualViewport.addEventListener("scroll",re,P.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ae,P.passiveCapture))}$.is.desktop===!0&&$.is.mac===!0&&window[`${e}EventListener`]("wheel",Xt,P.notPassive),e==="remove"&&($.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",re,P.passiveCapture),window.visualViewport.removeEventListener("scroll",re,P.passiveCapture)):window.removeEventListener("scroll",Ae,P.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=We,o.style.top=Qe,window.scrollTo(be,we),J=void 0)}function Ut(e){let o="add";if(e===!0){if(G++,Y!==void 0){clearTimeout(Y),Y=void 0;return}if(G>1)return}else{if(G===0||(G--,G>0))return;if(o="remove",$.is.ios===!0&&$.is.nativeMobile===!0){clearTimeout(Y),Y=setTimeout(()=>{Re(o),Y=void 0},100);return}}Re(o)}function It(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Ut(o))}}}function jt(){let e;const o=M();function n(){clearTimeout(e)}return Tt(n),F(n),{removeTimeout:n,registerTimeout(r,t){clearTimeout(e),yt(o)===!1&&(e=setTimeout(r,t))}}}const Ee={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Kt=Object.keys(Ee);Ee.all=!0;function Fe(e){const o={};for(const n of Kt)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Ee:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function Ne(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function Gt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),xt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function qe(e,o,n){const r=xe(e);let t,i=r.left-o.event.x,s=r.top-o.event.y,f=Math.abs(i),c=Math.abs(s);const d=o.direction;d.horizontal===!0&&d.vertical!==!0?t=i<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=s<0?"up":"down":d.up===!0&&s<0?(t="up",f>c&&(d.left===!0&&i<0?t="left":d.right===!0&&i>0&&(t="right"))):d.down===!0&&s>0?(t="down",f>c&&(d.left===!0&&i<0?t="left":d.right===!0&&i>0&&(t="right"))):d.left===!0&&i<0?(t="left",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down"))):d.right===!0&&i>0&&(t="right",f<c&&(d.up===!0&&s<0?t="up":d.down===!0&&s>0&&(t="down")));let a=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,a=!0,t==="left"||t==="right"?(r.left-=i,f=0,i=0):(r.top-=s,c=0,s=0)}return{synthetic:a,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:r,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:c},offset:{x:i,y:s},delta:{x:r.left-o.event.lastX,y:r.top-o.event.lastY}}}}let Jt=0;var Te=wt({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&$.has.touch!==!0)return;function r(i,s){n.mouse===!0&&s===!0?Ie(i):(n.stop===!0&&pe(i),n.prevent===!0&&Me(i))}const t={uid:"qvtp_"+Jt++,handler:o,modifiers:n,direction:Fe(n),noop:Le,mouseStart(i){Ne(i,t)&&St(i)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(Ne(i,t)){const s=i.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,s){if($.is.firefox===!0&&he(e,!0),t.lastEvt=i,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Me(d),i.cancelBubble===!0&&pe(d),Object.assign(d,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:d}}pe(i)}const{left:f,top:c}=xe(i);t.event={x:f,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:c}},move(i){if(t.event===void 0)return;const s=xe(i),f=s.left-t.event.x,c=s.top-t.event.y;if(f===0&&c===0)return;t.lastEvt=i;const d=t.event.mouse===!0,a=()=>{r(i,d);let v;n.preserveCursor!==!0&&n.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Gt(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),d===!0){const z=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{z(),h()},50):z()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(i,t.event.mouse);const{payload:v,synthetic:h}=qe(i,t,!1);v!==void 0&&(t.handler(v)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&a(),t.event.lastX=v.position.left,t.event.lastY=v.position.top,t.event.lastDir=h===!0?void 0:v.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){a(),t.event.detected=!0,t.move(i);return}const b=Math.abs(f),C=Math.abs(c);b!==C&&(t.direction.horizontal===!0&&b>C||t.direction.vertical===!0&&b<C||t.direction.up===!0&&b<C&&c<0||t.direction.down===!0&&b<C&&c>0||t.direction.left===!0&&b>C&&f<0||t.direction.right===!0&&b>C&&f>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,s){if(t.event!==void 0){if(ye(t,"temp"),$.is.firefox===!0&&he(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(qe(i===void 0?t.lastEvt:i,t).payload);const{payload:f}=qe(i===void 0?t.lastEvt:i,t,!0),c=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";oe(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}$.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Fe(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),ye(o,"main"),ye(o,"temp"),$.is.firefox===!0&&he(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function le(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const Xe=150;var Zt=_({name:"QDrawer",inheritAttrs:!1,props:{...Wt,...Ge,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Qt,"on-layout","mini-state"],setup(e,{slots:o,emit:n,attrs:r}){const t=M(),{proxy:{$q:i}}=t,s=Je(e,i),{preventBodyScroll:f}=It(),{registerTimeout:c,removeTimeout:d}=jt(),a=ze(ae,O);if(a===O)return console.error("QDrawer needs to be child of QLayout"),O;let b,C,v;const h=L(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),z=m(()=>e.mini===!0&&h.value!==!0),T=m(()=>z.value===!0?e.miniWidth:e.width),g=L(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=m(()=>e.persistent!==!0&&(h.value===!0||tt.value===!0));function q(l,p){if(Q(),l!==!1&&a.animate(),B(0),h.value===!0){const E=a.instances[ee.value];E!==void 0&&E.belowBreakpoint===!0&&E.hide(!1),H(1),a.isContainer.value!==!0&&f(!0)}else H(0),l!==!1&&fe(!1);c(()=>{l!==!1&&fe(!0),p!==!0&&n("show",l)},Xe)}function y(l,p){j(),l!==!1&&a.animate(),H(0),B(N.value*T.value),ve(),p!==!0?c(()=>{n("hide",l)},Xe):d()}const{show:x,hide:k}=At({showing:g,hideOnRouteChange:u,handleShow:q,handleHide:y}),{addToHistory:Q,removeFromHistory:j}=Dt(g,k,u),A={belowBreakpoint:h,hide:k},V=m(()=>e.side==="right"),N=m(()=>(i.lang.rtl===!0?-1:1)*(V.value===!0?1:-1)),ke=L(0),X=L(!1),ue=L(!1),Be=L(T.value*N.value),ee=m(()=>V.value===!0?"left":"right"),se=m(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),de=m(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(V.value?"R":"L")>-1||i.platform.is.ios===!0&&a.isContainer.value===!0),K=m(()=>e.overlay===!1&&g.value===!0&&h.value===!1),tt=m(()=>e.overlay===!0&&g.value===!0&&h.value===!1),ot=m(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&X.value===!1?" hidden":"")),it=m(()=>({backgroundColor:`rgba(0,0,0,${ke.value*.4})`})),$e=m(()=>V.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),nt=m(()=>V.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),rt=m(()=>{const l={};return a.header.space===!0&&$e.value===!1&&(de.value===!0?l.top=`${a.header.offset}px`:a.header.space===!0&&(l.top=`${a.header.size}px`)),a.footer.space===!0&&nt.value===!1&&(de.value===!0?l.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(l.bottom=`${a.footer.size}px`)),l}),lt=m(()=>{const l={width:`${T.value}px`,transform:`translateX(${Be.value}px)`};return h.value===!0?l:Object.assign(l,rt.value)}),at=m(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),ut=m(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(X.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${z.value===!0?"mini":"standard"}`+(de.value===!0||K.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+($e.value===!0?" q-drawer--top-padding":""))),st=m(()=>{const l=i.lang.rtl===!0?e.side:ee.value;return[[Te,vt,void 0,{[l]:!0,mouse:!0}]]}),dt=m(()=>{const l=i.lang.rtl===!0?ee.value:e.side;return[[Te,Pe,void 0,{[l]:!0,mouse:!0}]]}),ct=m(()=>{const l=i.lang.rtl===!0?ee.value:e.side;return[[Te,Pe,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){mt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}w(h,l=>{l===!0?(b=g.value,g.value===!0&&k(!1)):e.overlay===!1&&e.behavior!=="mobile"&&b!==!1&&(g.value===!0?(B(0),H(0),ve()):x(!1))}),w(()=>e.side,(l,p)=>{a.instances[p]===A&&(a.instances[p]=void 0,a[p].space=!1,a[p].offset=0),a.instances[l]=A,a[l].size=T.value,a[l].space=K.value,a[l].offset=se.value}),w(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),w(()=>e.behavior+e.breakpoint,ce),w(a.isContainer,l=>{g.value===!0&&f(l!==!0),l===!0&&ce()}),w(a.scrollbarWidth,()=>{B(g.value===!0?0:void 0)}),w(se,l=>{D("offset",l)}),w(K,l=>{n("on-layout",l),D("space",l)}),w(V,()=>{B()}),w(T,l=>{B(),me(e.miniToOverlay,l)}),w(()=>e.miniToOverlay,l=>{me(l,T.value)}),w(()=>i.lang.rtl,()=>{B()}),w(()=>e.mini,()=>{e.modelValue===!0&&(ft(),a.animate())}),w(z,l=>{n("mini-state",l)});function B(l){l===void 0?I(()=>{l=g.value===!0?0:T.value,B(N.value*l)}):(a.isContainer.value===!0&&V.value===!0&&(h.value===!0||Math.abs(l)===T.value)&&(l+=N.value*a.scrollbarWidth.value),Be.value=l)}function H(l){ke.value=l}function fe(l){const p=l===!0?"remove":a.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function ft(){clearTimeout(C),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,C=setTimeout(()=>{ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function vt(l){if(g.value!==!1)return;const p=T.value,E=le(l.distance.x,0,p);if(l.isFinal===!0){E>=Math.min(75,p)===!0?x():(a.animate(),H(0),B(N.value*p)),X.value=!1;return}B((i.lang.rtl===!0?V.value!==!0:V.value)?Math.max(p-E,0):Math.min(0,E-p)),H(le(E/p,0,1)),l.isFirst===!0&&(X.value=!0)}function Pe(l){if(g.value!==!0)return;const p=T.value,E=l.direction===e.side,te=(i.lang.rtl===!0?E!==!0:E)?le(l.distance.x,0,p):0;if(l.isFinal===!0){Math.abs(te)<Math.min(75,p)===!0?(a.animate(),H(1),B(0)):k(),X.value=!1;return}B(N.value*te),H(le(1-te/p,0,1)),l.isFirst===!0&&(X.value=!0)}function ve(){f(!1),fe(!0)}function D(l,p){a.update(e.side,l,p)}function mt(l,p){l.value!==p&&(l.value=p)}function me(l,p){D("size",l===!0?e.miniWidth:p)}return a.instances[e.side]=A,me(e.miniToOverlay,T.value),D("space",K.value),D("offset",se.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("on-layout",K.value),n("mini-state",z.value),b=e.showIfAbove===!0;const l=()=>{(g.value===!0?q:y)(!1,!0)};if(a.totalWidth.value!==0){I(l);return}v=w(a.totalWidth,()=>{v(),v=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?x(!1):l()})}),F(()=>{v!==void 0&&v(),clearTimeout(C),g.value===!0&&ve(),a.instances[e.side]===A&&(a.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const l=[];h.value===!0&&(e.noSwipeOpen===!1&&l.push(Lt(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),st.value)),l.push(Oe("div",{ref:"backdrop",class:ot.value,style:it.value,"aria-hidden":"true",onClick:k},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>ct.value)));const p=z.value===!0&&o.mini!==void 0,E=[S("div",{...r,key:""+p,class:[at.value,r.class]},p===!0?o.mini():Z(o.default))];return e.elevated===!0&&g.value===!0&&E.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Oe("aside",{ref:"content",class:ut.value,style:lt.value},E,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>dt.value)),S("div",{class:"q-drawer-container"},l)}}}),eo=_({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=M(),r=ze(ae,O);if(r===O)return console.error("QPageContainer needs to be child of QLayout"),O;je(zt,!0);const t=m(()=>{const i={};return r.header.space===!0&&(i.paddingTop=`${r.header.size}px`),r.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(i.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),i});return()=>S("div",{class:"q-page-container",style:t.value},Z(o.default))}});const{passive:Ye}=P,to=["both","horizontal","vertical"];var oo=_({name:"QScrollObserver",props:{axis:{type:String,validator:e=>to.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,i;w(()=>e.scrollTarget,()=>{c(),f()});function s(){r!==null&&r();const b=Math.max(0,Ze(t)),C=et(t),v={top:b-n.position.top,left:C-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const h=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:b,left:C},n.directionChanged=n.direction!==h,n.delta=v,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=Ft(i,e.scrollTarget),t.addEventListener("scroll",d,Ye),d(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",d,Ye),t=void 0)}function d(b){if(b===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[C,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{v(C),r=null}}}const{proxy:a}=M();return U(()=>{i=a.$el.parentNode,f()}),F(()=>{r!==null&&r(),c()}),Object.assign(a,{trigger:d,getPosition:()=>n}),Le}}),io=_({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:r}}=M(),t=L(null),i=L(r.screen.height),s=L(e.container===!0?0:r.screen.width),f=L({position:0,direction:"down",inflectionPoint:0}),c=L(0),d=L(Ue.value===!0?0:ge()),a=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=m(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),C=m(()=>d.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${d.value}px`}:null),v=m(()=>d.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${d.value}px`,width:`calc(100% + ${d.value}px)`}:null);function h(y){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};f.value=x,e.onScroll!==void 0&&n("scroll",x)}}function z(y){const{height:x,width:k}=y;let Q=!1;i.value!==x&&(Q=!0,i.value=x,e.onScrollHeight!==void 0&&n("scroll-height",x),g()),s.value!==k&&(Q=!0,s.value=k),Q===!0&&e.onResize!==void 0&&n("resize",y)}function T({height:y}){c.value!==y&&(c.value=y,g())}function g(){if(e.container===!0){const y=i.value>c.value?ge():0;d.value!==y&&(d.value=y)}}let u;const q={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:i,containerHeight:c,scrollbarWidth:d,totalWidth:m(()=>s.value+d.value),rows:m(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:f,animate(){u!==void 0?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),u=void 0},155)},update(y,x,k){q[y][x]=k}};if(je(ae,q),ge()>0){let k=function(){y=null,x.classList.remove("hide-scrollbar")},Q=function(){if(y===null){if(x.scrollHeight>r.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(k,300)},j=function(A){y!==null&&A==="remove"&&(clearTimeout(y),k()),window[`${A}EventListener`]("resize",Q)},y=null;const x=document.body;w(()=>e.container!==!0?"add":"remove",j),e.container!==!0&&j("add"),Et(()=>{j("remove")})}return()=>{const y=Ct(o.default,[S(oo,{onScroll:h}),S(Se,{onResize:z})]),x=S("div",{class:a.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:t},[S(Se,{onResize:T}),S("div",{class:"absolute-full",style:C.value},[S("div",{class:"scroll",style:v.value},[x])])]):x}}});const uo=kt({__name:"MainLayout",setup(e){const o=L(!1);return(n,r)=>{const t=Pt("router-view");return $t(),Bt(io,{view:"lHh Lpr lFf"},{default:R(()=>[W(Mt,{elevated:""},{default:R(()=>[W(Ot,null,{default:R(()=>[W(gt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:r[0]||(r[0]=i=>o.value=!o.value)}),W(Vt,null,{default:R(()=>[He(" Quasar App ")]),_:1})]),_:1})]),_:1}),W(Zt,{modelValue:o.value,"onUpdate:modelValue":r[1]||(r[1]=i=>o.value=i),"show-if-above":"",bordered:""},{default:R(()=>[W(Ht,null,{default:R(()=>[He(" sdfsdf ")]),_:1})]),_:1},8,["modelValue"]),W(eo,null,{default:R(()=>[W(t)]),_:1})]),_:1})}}});export{uo as default};
