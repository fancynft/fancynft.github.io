(this["webpackJsonp@fancynft/react-app"]=this["webpackJsonp@fancynft/react-app"]||[]).push([[16],{345:function(t,e,n){"use strict";n.r(e),function(t){var a=n(1),s=n.n(a),i=n(66),r=n(34),c=n(0),o=n(38),u=n(328),l=n(544),d=n(249),j=n(543),b=n(540),p=n(391),y=n(383),h=n(379),x=n(392),m=n.n(x),O=n(60),f=n(371),v=n(378),T=n(153),w=n(19),g=n(520),k=n(3);e.default=Object(o.hot)(t)((function(){Object(T.b)();var t=Object(T.a)(),e=t.library,n=(t.chainId,t.account),a=(t.active,function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=e;return t&&(n=e.getSigner()),new y.b(w.p,g,n)}),o=Object(c.useState)(w.A),x=Object(r.a)(o,2),I=x[0],M=x[1],S=Object(c.useState)("0"),N=Object(r.a)(S,2),A=N[0],L=N[1],C=Object(c.useState)(!1),F=Object(r.a)(C,2),B=F[0],W=F[1],E=Object(c.useState)(0),H=Object(r.a)(E,2),P=H[0],_=H[1],z=Object(c.useState)(0),D=Object(r.a)(z,2),q=D[0],J=D[1],R=Object(c.useState)(0),U=Object(r.a)(R,2),X=U[0],G=U[1],Q=Object(c.useState)("0"),Y=Object(r.a)(Q,2),K=Y[0],V=Y[1],Z=Object(c.useState)("0"),$=Object(r.a)(Z,2),tt=$[0],et=$[1],nt=Object(c.useState)("0"),at=Object(r.a)(nt,2),st=at[0],it=at[1],rt=Object(c.useState)("0"),ct=Object(r.a)(rt,2),ot=ct[0],ut=ct[1],lt=Object(c.useState)("0"),dt=Object(r.a)(lt,2),jt=dt[0],bt=dt[1],pt=Object(c.useState)("0"),yt=Object(r.a)(pt,2),ht=(yt[0],yt[1]),xt=Object(c.useState)([]),mt=Object(r.a)(xt,2),Ot=mt[0],ft=mt[1],vt=Object(c.useState)([]),Tt=Object(r.a)(vt,2),wt=Tt[0],gt=Tt[1],kt=Object(c.useState)(!1),It=Object(r.a)(kt,2),Mt=(It[0],It[1]),St=Object(c.useState)(!1),Nt=Object(r.a)(St,2),At=Nt[0],Lt=Nt[1],Ct=function(){var t=Object(i.a)(s.a.mark((function t(){var i,r,c,o,u,l,d,j,b,p,y,x,m,O,f,v;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!At){t.next=2;break}return t.abrupt("return");case 2:return Lt(!0),t.prev=3,i=a(),t.next=7,i.owner();case 7:return r=t.sent,M(r),t.next=11,e.getBalance(w.p);case 11:return c=t.sent,c=h.utils.formatEther(c),L(c),t.next=16,i.lotteryIsActivated();case 16:return o=t.sent,W(o),t.next=20,i.nextLotteryNumber();case 20:return u=t.sent,_(u),t.next=24,i.lotteryInterval();case 24:return l=t.sent,J(l),t.next=28,i.nextLotteryTime();case 28:return d=t.sent,G(d),t.next=32,i.lotteryMaxAmount();case 32:return j=t.sent,V(h.utils.formatEther(j)),t.next=36,i.nextLotteryAmount();case 36:return b=t.sent,et(h.utils.formatEther(b)),t.next=40,i.wonTotal();case 40:return p=t.sent,ut(h.utils.formatEther(p)),t.next=44,i.sharesTotal();case 44:return y=t.sent,ht(h.utils.formatEther(y)),t.next=48,i.lotteryWinners();case 48:x=t.sent,bt(x.toNumber()),m=[],O=0;case 52:if(!(O<x)){t.next=60;break}return t.next=55,i.shares(O);case 55:f=t.sent,m.push(f.toNumber());case 57:O++,t.next=52;break;case 60:if(ft(m),!n){t.next=68;break}return t.next=64,i.won(n);case 64:v=t.sent,it(h.utils.formatEther(v)),t.next=69;break;case 68:it("0");case 69:t.next=74;break;case 71:t.prev=71,t.t0=t.catch(3),console.error(t.t0);case 74:Mt(!0),Lt(!1);case 76:case"end":return t.stop()}}),t,null,[[3,71]])})));return function(){return t.apply(this,arguments)}}(),Ft=Object(c.useState)(-1),Bt=Object(r.a)(Ft,2),Wt=Bt[0],Et=Bt[1],Ht=Object(c.useState)(0),Pt=Object(r.a)(Ht,2),_t=Pt[0],zt=Pt[1];Object(c.useEffect)((function(){e&&(e.on("block",(function(t){Et(t),Ct()})),a().queryFilter("Winner").then((function(t){gt(t)})));zt(Date.now());var t=setInterval((function(){zt(Date.now())}),1e3);return function(){clearInterval(t)}}),[]),Object(c.useEffect)((function(){if(e){if(0===wt.length)a().queryFilter("Winner").then((function(t){gt(t)}));e.on("block",(function(t){Et(t),Ct()}))}}),[e]),Object(c.useEffect)((function(){}),[_t]);var Dt=function(){var t=Object(i.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:if(n=t.sent){t.next=6;break}return t.abrupt("return");case 6:return O.b.info("Pending tx doTx",n.hash),t.next=9,n.wait(1);case 9:O.b.success("Done tx doTx",n.hash),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0),O.b.error("Error doTx");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}(),qt=function(){var t=Object(i.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a(!0),t.next=3,e.estimateGas.startLottery();case 3:return n=t.sent,t.next=6,Dt(e.startLottery({gasLimit:n.mul(120).div(100)}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(k.jsx)(f.a,{title:"Lottery",children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)("br",{}),Object(k.jsx)(l.a,{children:Object(k.jsx)(d.a,{as:"h1",children:Object(k.jsxs)(d.a.Content,{children:["Lottery",Object(k.jsxs)(d.a.Subheader,{children:[Object(k.jsxs)("div",{children:["Smart Contract: ",Object(k.jsx)(v.a,{address:w.p,children:w.p})]}),Object(k.jsxs)("div",{children:["Owner: ",Object(k.jsx)(v.a,{address:I,children:I})]}),Object(k.jsxs)("div",{children:["Last Block: ",Object(k.jsx)(p.a,{value:Wt,displayType:"text",thousandSeparator:!0})]})]})]})})}),Object(k.jsxs)(l.a,{children:[Object(k.jsxs)("div",{children:["Status: ",B?"Is Active":"Not Active"]}),Object(k.jsxs)("div",{children:["Pool: ",Object(k.jsx)(v.a,{address:w.p,children:Object(k.jsx)(p.a,{value:A,suffix:" BNB",displayType:"text",thousandSeparator:!0})})]}),Object(k.jsxs)("div",{children:["Won Total: ",Object(k.jsx)(p.a,{value:ot,suffix:" BNB",displayType:"text",thousandSeparator:!0})]}),Object(k.jsxs)("div",{children:["Max Lottery Amount: ",Object(k.jsx)(p.a,{value:K,suffix:" BNB",displayType:"text",thousandSeparator:!0})]}),Object(k.jsxs)("div",{children:["Winners: ",jt]}),Object(k.jsxs)("div",{children:["Winners Shares: (",Ot.join("%, "),"%)"]}),Object(k.jsxs)("div",{children:["Interval: ",q," seconds"]}),Object(k.jsxs)("div",{children:["Next Number: ",P]}),Object(k.jsxs)("div",{children:["Next Time: ",X," (",m()(X,"X").fromNow(),")"]}),Object(k.jsxs)("div",{children:["Next Amount: ",Object(k.jsx)(p.a,{value:tt,suffix:" BNB",displayType:"text",thousandSeparator:!0})]})]}),Object(k.jsxs)(l.a,{children:[Object(k.jsxs)("div",{children:["Address: ",Object(k.jsx)(v.a,{address:n,children:n})]}),Object(k.jsxs)("div",{children:["Won Total: ",Object(k.jsx)(p.a,{value:st,suffix:" BNB",displayType:"text",thousandSeparator:!0})]}),Object(k.jsx)(j.a,{primary:!0,onClick:qt,children:"Run Lottery"})]}),Object(k.jsxs)(l.a,{children:[Object(k.jsx)("div",{children:"Winners:"}),Object(k.jsx)(b.a,{children:wt.map((function(t,e){var n=h.utils.formatEther(t.args.amount),a=t.args.tokenId.toString(),s="".concat(w.g,"?a=").concat(a,"#inventory");return Object(k.jsx)(b.a.Item,{children:Object(k.jsxs)(l.a,{children:[Object(k.jsxs)("div",{children:["Lottery: ",t.args.lottery.toString()," ","Place: ",t.args.place.toString()," ","Amount: ",Object(k.jsx)(p.a,{value:n,suffix:" BNB",displayType:"text",thousandSeparator:!0})," "]}),Object(k.jsxs)("div",{children:["Winner tokenId: ",Object(k.jsx)(v.a,{token:s,children:a})," ","Winner Address: ",Object(k.jsx)(v.a,{address:t.args.account,children:t.args.account.substring(0,6)})," "]}),Object(k.jsxs)("div",{children:["BlockNumber: ",t.blockNumber,","," ","TX: ",Object(k.jsx)(v.a,{tx:t.transactionHash,children:t.transactionHash.substring(0,6)})]})]})},e)}))})]})]})})}))}.call(this,n(65)(t))},371:function(t,e,n){"use strict";(function(t){n(0);var a=n(38),s=n(380),i=n(372),r=n(373),c=n(374),o=n(375),u=n(376),l=n(377),d=n(3);e.a=Object(a.hot)(t)((function(t){var e=t.title,n=t.description,a=t.meta,j=t.children,b=Object(s.useMediaPredicate)(i.a);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(r.a,{}),Object(d.jsx)(c.a,{title:e,description:n,meta:a||[]}),!b&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{}),Object(d.jsx)("main",{style:{minHeight:"100vh"},children:j})]}),b&&Object(d.jsx)(u.a,{children:Object(d.jsx)("main",{style:{minHeight:"100vh"},children:j})}),Object(d.jsx)(l.a,{})]})}))}).call(this,n(65)(t))},372:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a="(max-width: 768px)"},373:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n(0);function s(){return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[]),null}},374:function(t,e,n){"use strict";(function(t){n(0);var a=n(38),s=n(381),i=n(19),r=n(3);e.a=Object(a.hot)(t)((function(t){var e=t.title,n=t.description,a=t.meta,c=n,o=i.v;return Object(r.jsx)(s.a,{htmlAttributes:{lang:"en"},title:e,defaultTitle:o,titleTemplate:o?"%s | ".concat(o):void 0,meta:[{name:"description",content:c},{property:"og:title",content:e},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:""},{name:"twitter:title",content:e},{name:"twitter:description",content:c}].concat(a)})}))}).call(this,n(65)(t))},375:function(t,e,n){"use strict";(function(t){n(0);var a=n(38),s=n(544),i=n(538),r=n(328),c=n(102),o=n(71),u=n(45),l=n(19),d=n(153),j=n(3);e.a=Object(a.hot)(t)((function(){var t=Object(d.b)(),e=Object(d.a)(),n=e.chainId,a=e.account,b=e.active,p=Object(o.c)("WalletConnectModal").open,y=Object(o.c)("WalletAccountModal").open,h=a?"".concat(a.substring(0,6),"...").concat(a.substring(a.length-4)):"Connect wallet";return Object(j.jsx)(s.a,{as:"header",children:Object(j.jsx)(i.a,{fixed:"top",size:"large",inverted:!0,children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(i.a.Item,{header:!0,as:c.b,to:u.a.main,children:l.v}),Object(j.jsx)(i.a.Item,{as:c.c,to:u.a.heroes,children:"Heroes"}),Object(j.jsx)(i.a.Item,{as:c.c,to:u.a.items,children:"Items"}),Object(j.jsx)(i.a.Item,{as:c.c,to:u.a.mixer,children:"Mixer"}),Object(j.jsx)(i.a.Item,{as:c.c,to:u.a.marketplace,children:"Marketplace"}),Object(j.jsx)(i.a.Item,{as:c.c,to:u.a.lottery,children:"Lottery"}),Object(j.jsx)(i.a.Item,{as:c.c,to:u.a.staking,children:"Staking"}),Object(j.jsx)(i.a.Item,{as:c.c,to:u.a.farming,children:"Farming"}),Object(j.jsx)(i.a.Item,{position:"right",style:{color:n===l.u?"green":"red"},onClick:t&&b&&a?y:p,children:h})]})})})}))}).call(this,n(65)(t))},376:function(t,e,n){"use strict";(function(t){var a=n(34),s=n(0),i=n(38),r=n(102),c=n(71),o=n(45),u=n(19),l=n(153),d=n(545),j=n(538),b=n(544),p=n(328),y=n(161),h=n(3);e.a=Object(i.hot)(t)((function(t){var e=t.children,n=Object(s.useState)(!1),i=Object(a.a)(n,2),x=i[0],m=i[1],O=Object(l.b)(),f=Object(l.a)(),v=f.chainId,T=f.account,w=f.active,g=Object(c.c)("WalletConnectModal").open,k=Object(c.c)("WalletAccountModal").open,I=T?"".concat(T.substring(0,6),"...").concat(T.substring(T.length-4)):"Connect wallet";return Object(h.jsxs)(d.a.Pushable,{children:[Object(h.jsxs)(d.a,{as:j.a,animation:"overlay",inverted:!0,onHide:function(){return m(!1)},vertical:!0,visible:x,children:[Object(h.jsx)(j.a.Item,{as:r.c,to:o.a.heroes,children:"Heroes"}),Object(h.jsx)(j.a.Item,{as:r.c,to:o.a.items,children:"Items"}),Object(h.jsx)(j.a.Item,{as:r.c,to:o.a.mixer,children:"Mixer"}),Object(h.jsx)(j.a.Item,{as:r.c,to:o.a.marketplace,children:"Marketplace"}),Object(h.jsx)(j.a.Item,{as:r.c,to:o.a.lottery,children:"Lottery"}),Object(h.jsx)(j.a.Item,{as:r.c,to:o.a.staking,children:"Staking"}),Object(h.jsx)(j.a.Item,{as:r.c,to:o.a.farming,children:"Farming"})]}),Object(h.jsxs)(d.a.Pusher,{dimmed:x,children:[Object(h.jsx)(b.a,{as:"header",inverted:!0,textAlign:"center",vertical:!0,children:Object(h.jsx)(j.a,{fixed:"top",size:"large",pointing:!0,inverted:!0,children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)(j.a.Item,{onClick:function(){return m(!0)},children:Object(h.jsx)(y.a,{name:"sidebar"})}),Object(h.jsx)(j.a.Item,{as:r.b,to:o.a.main,children:u.v}),Object(h.jsx)(j.a.Item,{position:"right",style:{color:v===u.u?"green":"red"},onClick:O&&w&&T?k:g,children:I})]})})}),e]})]})}))}).call(this,n(65)(t))},377:function(t,e,n){"use strict";(function(t){n(0);var a=n(38),s=n(102),i=n(544),r=n(328),c=n(546),o=n(249),u=n(540),l=n(529),d=n(45),j=n(19),b=n(171),p=n(3);e.a=Object(a.hot)(t)((function(){return Object(p.jsx)(i.a,{as:"footer",inverted:!0,vertical:!0,children:Object(p.jsxs)(r.a,{textAlign:"center",children:[Object(p.jsx)(c.a,{divided:!0,inverted:!0,stackable:!0,children:Object(p.jsxs)(c.a.Row,{children:[Object(p.jsxs)(c.a.Column,{width:3,children:[Object(p.jsx)(o.a,{inverted:!0,as:"h4",children:"Menu"}),Object(p.jsxs)(u.a,{link:!0,inverted:!0,children:[Object(p.jsx)(u.a.Item,{as:s.b,to:d.a.heroes,children:"Heroes NFT"}),Object(p.jsx)(u.a.Item,{as:s.b,to:d.a.items,children:"Items NFT"}),Object(p.jsx)(u.a.Item,{as:s.b,to:d.a.mixer,children:"NFT Mixer"}),Object(p.jsx)(u.a.Item,{as:s.b,to:d.a.marketplace,children:"Marketplace NFT"}),Object(p.jsx)(u.a.Item,{as:s.b,to:d.a.lottery,children:"Lottery NFT Owners"})]})]}),Object(p.jsxs)(c.a.Column,{width:3,children:[Object(p.jsx)(o.a,{inverted:!0,as:"h4",children:"Token Menu"}),Object(p.jsxs)(u.a,{link:!0,inverted:!0,children:[Object(p.jsx)(u.a.Item,{as:s.b,to:d.a.staking,children:"NFT Staking"}),Object(p.jsx)(u.a.Item,{as:s.b,to:d.a.farming,children:"Token Farming"}),Object(p.jsx)(u.a.Item,{as:s.b,to:d.a.contacts,children:"Smart Contracts"}),Object(p.jsx)(u.a.Item,{as:s.b,to:d.a.faq,children:"FAQ"})]})]}),Object(p.jsxs)(c.a.Column,{width:3,children:[Object(p.jsx)(o.a,{inverted:!0,as:"h4",children:"Follow Us"}),Object(p.jsx)(u.a,{link:!0,inverted:!0,children:Object(p.jsx)(u.a.Item,{as:b.a,href:j.C,children:"Twitter"})})]}),Object(p.jsxs)(c.a.Column,{width:7,children:[Object(p.jsx)(o.a,{as:"h4",inverted:!0,children:"Footer Header"}),Object(p.jsx)("p",{children:"Extra space for a call to action inside the footer that could help re-engage users."})]})]})}),Object(p.jsx)(l.a,{inverted:!0,section:!0}),Object(p.jsxs)("div",{children:[j.v," \xa9 ",(new Date).getFullYear(),"."]}),Object(p.jsxs)(u.a,{horizontal:!0,inverted:!0,divided:!0,link:!0,size:"small",children:[Object(p.jsx)(u.a.Item,{as:b.a,href:"mailto:".concat(j.B),children:"Contact Us"}),Object(p.jsx)(u.a.Item,{as:s.b,to:d.a.terms,children:"Terms and Conditions"}),Object(p.jsx)(u.a.Item,{as:s.b,to:d.a.privacy,children:"Privacy Policy"})]})]})})}))}).call(this,n(65)(t))},378:function(t,e,n){"use strict";var a=n(26),s=n(81),i=(n(0),n(171)),r=n(19),c=n(3);e.a=function(t){var e=t.address,n=t.token,o=t.tx,u=t.children,l=Object(s.a)(t,["address","token","tx","children"]),d="";switch(r.u){case 4:d="https://rinkeby.etherscan.io";break;case 56:d="https://bscscan.com"}return e?d+="/address/".concat(e):n?d+="/token/".concat(n):o&&(d+="/tx/".concat(o)),Object(c.jsx)(i.a,Object(a.a)(Object(a.a)({href:d},l),{},{children:u}))}},520:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"uint32","name":"lastLottery_","type":"uint32"},{"internalType":"uint32","name":"lotteryInterval_","type":"uint32"},{"internalType":"uint256","name":"lotteryMaxAmount_","type":"uint256"},{"internalType":"uint256[]","name":"shares_","type":"uint256[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint32","name":"lottery","type":"uint32"},{"indexed":false,"internalType":"uint8","name":"place","type":"uint8"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Winner","type":"event"},{"inputs":[{"internalType":"uint32","name":"startTime_","type":"uint32"}],"name":"activateLottery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isExcluded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryInterval","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryIsActivated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryMaxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryWinners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextLotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextLotteryNumber","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextLotteryTime","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"recoverFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setExcludeStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lotteryMaxAmount_","type":"uint256"}],"name":"setLotteryMaxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"shares_","type":"uint256[]"}],"name":"setLotteryShares","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"shares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sharesTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startLottery","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"won","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wonTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]')}}]);
//# sourceMappingURL=16.a4f415b9.chunk.js.map