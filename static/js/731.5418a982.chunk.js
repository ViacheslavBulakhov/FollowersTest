"use strict";(self.webpackChunkfollowers_test=self.webpackChunkfollowers_test||[]).push([[731],{876:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,o,i,s,a,l,c,u,p=t(165),f=t(433),x=t(861),g=t(439),d=t(791),h=t(243),m=t(218),w=t(413),A=t.p+"static/media/UserPhoto.a7eb1124d6de5b18f550.png",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",Z=t(168),v=t(924),S=t.p+"static/media/CardBackground.f105c89a8c09bde75c23.png",j=v.ZP.div(r||(r=(0,Z.Z)(["\n  position: relative;\n  display: flex;\n  width: 380px;\n  height: 460px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n  padding: 36px 28px;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),k=v.ZP.div(o||(o=(0,Z.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n"]))),E=v.ZP.div(i||(i=(0,Z.Z)(["\n  background-image: url(",");\n  display: inline-block;\n  width: 308px;\n  height: 168px;\n"])),S),F=v.ZP.div(s||(s=(0,Z.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1;\n"]))),y=v.ZP.div(a||(a=(0,Z.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 380px;\n  height: 8px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),Y=v.ZP.li(l||(l=(0,Z.Z)(["\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: rgb(235, 216, 255);\n  margin-bottom: 26px;\n"]))),N=v.ZP.button(c||(c=(0,Z.Z)(["\n  padding: 14px 28px;\n\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;\n  border-radius: 10.3108px;\n  cursor: pointer;\n  width: 196px;\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n"]))),P=t(184);function O(n){var e=n.user,t=e.tweets,r=e.followers,o=e.id,i=n.setUsers,s=(0,d.useState)((function(){var n=(JSON.parse(localStorage.getItem("users"))||[]).find((function(n){return n.id===o}));return!(!n||!n.isFollowing)&&n.isFollowing})),a=(0,g.Z)(s,2),l=a[0],c=a[1],u=(0,d.useState)((function(){var n=(JSON.parse(localStorage.getItem("users"))||[]).find((function(n){return n.id===o}));return n&&n.followers?n.followers:r})),p=(0,g.Z)(u,2),x=p[0],h=p[1];(0,d.useEffect)((function(){i((function(n){return n.map((function(n){return n.id===o?(0,w.Z)((0,w.Z)({},n),{},{isFollowing:l}):n}))}))}),[l,i,o]);var m=function(n){return n.some((function(n){return n.id===o}))?(0,f.Z)(n.map((function(n){return n.id===o?(0,w.Z)((0,w.Z)({},n),{},{isFollowing:!n.isFollowing,followers:l?n.followers-1:n.followers+1}):(0,w.Z)({},n)}))):[].concat((0,f.Z)(n),[{id:o,isFollowing:!l,followers:r+1}])},Z=function(){h(l?function(n){return n-1}:function(n){return n+1}),c((function(n){return!n}))};return(0,P.jsxs)(j,{children:[(0,P.jsx)(k,{children:(0,P.jsx)("img",{src:b,alt:"logo"})}),(0,P.jsx)(E,{}),(0,P.jsx)(F,{children:(0,P.jsx)("img",{src:A,alt:"logo"})}),(0,P.jsx)(y,{}),(0,P.jsxs)("ul",{style:{display:" flex",flexDirection:"column",alignItems:"center"},children:[(0,P.jsx)(Y,{children:(0,P.jsxs)("p",{children:[(0,P.jsx)("span",{children:t})," TWEETS"]})}),(0,P.jsx)(Y,{children:(0,P.jsxs)("p",{children:[(0,P.jsx)("span",{children:function(n){var e=n.toString().length;if(e<=3)return n;var t=n.toString().slice(e-3),r=n.toString().slice(0,e-3);return"".concat(r,",").concat(t)}(x)})," FOLLOWERS"]})}),(0,P.jsx)(N,{onClick:function(){return function(n,e){var t=JSON.parse(localStorage.getItem("users"))||[];if(0===t.length)return localStorage.setItem("users",JSON.stringify([{id:n,followers:e+1,isFollowing:!0}])),void Z();var r=m(t);localStorage.setItem("users",JSON.stringify(r)),Z()}(o,r)},style:{background:"".concat(l?"#5CD3A8":"#EBD8FF")},children:l?"Following":"Follow"})]})]})}var T,B,C=v.ZP.button(u||(u=(0,Z.Z)(["\n  margin: 0 auto;\n  display: block;\n  margin-top: 10px;\n  padding: 14px 28px;\n\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;\n  border-radius: 10.3108px;\n  background-color: aqua;\n  cursor: pointer;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n"])));function I(n){var e=n.setPage;return(0,P.jsx)(C,{onClick:function(){return e((function(n){return n+1}))},children:"Load More"})}var Q,q=v.ZP.div(T||(T=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n\n  margin: 10px 0 10px 0;\n  padding: 14px 28px;\n\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 3.43693px 3.43693px;\n  border-radius: 10.3108px;\n  background-color: aqua;\n  align-items: center;\n"]))),U=v.ZP.select(B||(B=(0,Z.Z)(["\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 20px;\n  padding: 12px;\n  margin-left: 10px;\n  cursor: pointer;\n\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n\n  & option {\n    background-color: #fff;\n    color: #333;\n  }\n"]))),L=function(n){var e=n.setFilter,t=(0,d.useState)(""),r=(0,g.Z)(t,2),o=r[0],i=r[1];return(0,P.jsxs)(q,{children:[(0,P.jsx)("h3",{children:"Filter The Users List"}),(0,P.jsxs)(U,{value:o,onChange:function(n){return t=n.target.value,i(t),void e(t);var t},children:[(0,P.jsx)("option",{value:"",children:"Select an option"}),["All","follow","following"].map((function(n){return(0,P.jsx)("option",{value:n,children:n},n)}))]})]})},R=v.ZP.ul(Q||(Q=(0,Z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n"]))),D=function(){return m.ZP.success("That's all users")};function W(){var n=(0,d.useState)([]),e=(0,g.Z)(n,2),t=e[0],r=e[1],o=(0,d.useState)(1),i=(0,g.Z)(o,2),s=i[0],a=i[1],l=(0,d.useState)(!0),c=(0,g.Z)(l,2),u=c[0],w=c[1],A=(0,d.useState)("all"),b=(0,g.Z)(A,2),Z=b[0],v=b[1];(0,d.useEffect)((function(){function n(){return(n=(0,x.Z)((0,p.Z)().mark((function n(){var e,t;return(0,p.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.Z.get("/users?p=".concat(s,"&l=3"));case 3:if(e=n.sent,0!==(t=e.data).length){n.next=8;break}return D(),n.abrupt("return");case 8:r((function(n){return[].concat((0,f.Z)(n),(0,f.Z)(t))})),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}u?w(!1):function(){n.apply(this,arguments)}()}),[s,u]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(L,{setFilter:v}),(0,P.jsxs)("div",{children:[(0,P.jsx)(m.x7,{}),t.length>0&&(0,P.jsx)(R,{children:function(n){switch(n){case"follow":return t.filter((function(n){return!n.isFollowing}));case"following":return t.filter((function(n){return n.isFollowing}));default:return t}}(Z).map((function(n){return(0,P.jsx)(O,{user:n,setUsers:r},n.id)}))}),(0,P.jsx)(I,{setPage:a})]})]})}h.Z.defaults.baseURL="https://64511247e1f6f1bb22a72c81.mockapi.io/api/v1"}}]);
//# sourceMappingURL=731.5418a982.chunk.js.map