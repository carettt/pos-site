(this["webpackJsonppos-site"]=this["webpackJsonppos-site"]||[]).push([[0],{18:function(n,e,t){},19:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),i=t.n(o),a=t(8),c=t.n(a),s=(t(18),t(12)),u=(t(19),t(2)),l=t(3);function m(){var n=Object(l.a)(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: ",";\n    color: ",';\n    height: 100vh;\n    text-rendering: optimizeLegibility;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n  h1 {\n    font-size: 2rem;\n    text-align: center;\n    text-transform: uppercase;\n  }\n  img {\n    border-radius: 5px;\n    height: auto;\n    width: 10rem;\n  }\n  div {\n    text-align: center;\n  }\n  small {\n    display: block;\n  }\n  a {\n    color: ',";\n    text-decoration: none;\n  }\n  .installBtn {\n    border-style: none;\n    padding: 10px;\n    border-radius: 5px;\n    text-transform: uppercase;\n    font-size: rem;\n    background: ",";\n    color: ",';\n    font-weight: bolder;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  }\n  .installBtn:hover {\n    color: ',";\n    background-color: ",";\n    padding: 5px;\n    border-style: solid;\n    border-width: 5px;\n    border-color: ",";\n  }\n"]);return m=function(){return n},n}var d=Object(u.b)(m(),(function(n){return n.theme.primaryDark}),(function(n){return n.theme.primaryLight}),(function(n){return n.theme.primaryHover}),(function(n){return n.theme.primaryLight}),(function(n){return n.theme.primaryDark}),(function(n){return n.theme.primaryLight}),(function(n){return n.theme.primaryDark}),(function(n){return n.theme.primaryLight})),f={primaryDark:"#fcf1b8",primaryLight:"#000000",primaryHover:"#999999",mobile:"576px"};function p(){var n=Object(l.a)(["\n  position: absolute;\n  top: 5%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 100;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return p=function(){return n},n}var h=u.c.button(p(),(function(n){var e=n.open,t=n.theme;return e?t.primaryDark:t.primaryLight}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"translateX(20px)":"translateX(0)"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),b=function(n){var e=n.open,t=n.setOpen;return Object(r.jsxs)(h,{open:e,onClick:function(){return t(!e)},children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})};function j(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n  z-index: 1;\n\n  transform: ",";\n\n  @media (max-width: ",") {\n    width: 100%;\n  }\n\n  a {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: ",";\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: ",") {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return j=function(){return n},n}var g=u.c.nav(j(),(function(n){return n.theme.primaryLight}),(function(n){return n.open?"translateX(0)":"translateX(-100%)"}),(function(n){return n.theme.mobile}),(function(n){return n.theme.primaryDark}),(function(n){return n.theme.mobile}),(function(n){return n.theme.primaryHover})),x=function(n){var e=n.open;return Object(r.jsxs)(g,{open:e,children:[Object(r.jsx)("a",{href:"/",children:"Home"}),Object(r.jsx)("a",{href:"/",children:"Install"}),Object(r.jsx)("a",{href:"/",children:"Documentation"}),Object(r.jsx)("a",{href:"/",children:"Contribute"})]})},y=function(){var n,e,t=Object(o.useState)(!1),i=Object(s.a)(t,2),a=i[0],c=i[1],l=Object(o.useRef)();return n=l,e=function(){return c(!1)},Object(o.useEffect)((function(){var t=function(t){n.current&&!n.current.contains(t.target)&&e(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[n,e]),Object(r.jsx)(u.a,{theme:f,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsxs)("div",{ref:l,children:[Object(r.jsx)(b,{open:a,setOpen:c}),Object(r.jsx)(x,{open:a,setOpen:c}),Object(r.jsx)("h1",{children:"this is pos.js"}),Object(r.jsx)("button",{className:"installBtn",children:"Install pos.js"})]})]})})},v=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),i(n),a(n)}))};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),v()}},[[22,1,2]]]);
//# sourceMappingURL=main.d4438dfb.chunk.js.map