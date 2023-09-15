var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}function w(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let p;function v(t){p=t}function b(){if(!p)throw new Error("Function called outside component initialization");return p}function k(){const t=b();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const i=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,i)}))}}}const $=[],x=[],T=[],I=[],_=Promise.resolve();let W=!1;function L(t){T.push(t)}function P(t){I.push(t)}let C=!1;const A=new Set;function E(){if(!C){C=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];v(e),q(e.$$)}for(v(null),$.length=0;x.length;)x.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];A.has(e)||(A.add(e),e())}T.length=0}while($.length);for(;I.length;)I.pop()();W=!1,C=!1,A.clear()}}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const S=new Set;let j;function z(){j={r:0,c:[],p:j}}function M(){j.r||o(j.c),j=j.p}function N(t,e){t&&t.i&&(S.delete(t),t.i(e))}function R(t,e,n,o){if(t&&t.o){if(S.has(t))return;S.add(t),j.c.push((()=>{S.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function Y(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function D(t){t&&t.c()}function O(t,n,s){const{fragment:r,on_mount:a,on_destroy:l,after_update:c}=t.$$;r&&r.m(n,s),L((()=>{const n=a.map(e).filter(i);l?l.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(L)}function B(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&($.push(t),W||(W=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,i,s,r,a,l,u=[-1]){const d=p;v(e);const h=i.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let m=!1;if(f.ctx=s?s(e,h,((t,n,...o)=>{const i=o.length?o[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),m&&K(e,t)),n})):[],f.update(),m=!0,o(f.before_update),f.fragment=!!r&&r(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(c)}else f.fragment&&f.fragment.c();i.intro&&N(e.$$.fragment),O(e,i.target,i.anchor),E()}v(d)}class F{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(t,e,n){const o=t.slice();return o[4]=e[n],o[6]=n,o}function H(t){let e,n,o,i=t[4].text+"";return{c(){e=u("span"),n=d(i),m(e,"class",o="word "+t[2](t[6],t[4])+" svelte-zq9r9f")},m(t,o){l(t,e,o),a(e,n)},p(t,s){1&s&&i!==(i=t[4].text+"")&&y(n,i),1&s&&o!==(o="word "+t[2](t[6],t[4])+" svelte-zq9r9f")&&m(e,"class",o)},d(t){t&&c(e)}}}function J(e){let n,o,i=e[0],s=[];for(let t=0;t<i.length;t+=1)s[t]=H(G(e,i,t));return{c(){n=u("div"),o=u("div");for(let t=0;t<s.length;t+=1)s[t].c();m(o,"class","word-container svelte-zq9r9f"),w(o,"bottom",e[1].offsetTop+"px"),m(n,"class","container svelte-zq9r9f")},m(t,e){l(t,n,e),a(n,o);for(let t=0;t<s.length;t+=1)s[t].m(o,null)},p(t,[e]){if(5&e){let n;for(i=t[0],n=0;n<i.length;n+=1){const r=G(t,i,n);s[n]?s[n].p(r,e):(s[n]=H(r),s[n].c(),s[n].m(o,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=i.length}2&e&&w(o,"bottom",t[1].offsetTop+"px")},i:t,o:t,d(t){t&&c(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(s,t)}}}function Q(t,e,n){let{currentWord:o}=e,{wordLists:i}=e,{containerPosition:s}=e;return t.$$set=t=>{"currentWord"in t&&n(3,o=t.currentWord),"wordLists"in t&&n(0,i=t.wordLists),"containerPosition"in t&&n(1,s=t.containerPosition)},[i,s,(t,e)=>o.index===t?e.incorrect?"active incorrect":"active":t<o.index?e.incorrect?"incorrect":"correct":"",o]}class U extends F{constructor(t){super(),V(this,t,Q,J,s,{currentWord:3,wordLists:0,containerPosition:1})}}function X(e){let n,i,s,w,p,v,b,k,$,x,T,I,_,W,L=e[3](e[2].minutes)+"",P=e[3](e[2].seconds)+"";return{c(){n=u("div"),i=u("input"),w=h(),p=u("div"),v=u("span"),b=d(L),k=d(":"),$=d(P),T=h(),I=u("button"),I.textContent="Restart",m(i,"type","text"),i.disabled=s=!e[1].init&&!e[1].start,m(v,"class",x=r(e[1].start?"timer-animation":"")+" svelte-bxtr2w"),m(p,"class","timer svelte-bxtr2w"),m(I,"class","restart svelte-bxtr2w"),m(n,"class","flex svelte-bxtr2w")},m(t,o){l(t,n,o),a(n,i),g(i,e[0]),a(n,w),a(n,p),a(p,v),a(v,b),a(v,k),a(v,$),a(n,T),a(n,I),_||(W=[f(i,"input",e[10]),f(i,"keyup",e[4]),f(I,"click",e[5])],_=!0)},p(t,[e]){2&e&&s!==(s=!t[1].init&&!t[1].start)&&(i.disabled=s),1&e&&i.value!==t[0]&&g(i,t[0]),4&e&&L!==(L=t[3](t[2].minutes)+"")&&y(b,L),4&e&&P!==(P=t[3](t[2].seconds)+"")&&y($,P),2&e&&x!==(x=r(t[1].start?"timer-animation":"")+" svelte-bxtr2w")&&m(v,"class",x)},i:t,o:t,d(t){t&&c(n),_=!1,o(W)}}}function Z(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,s){function r(t){try{l(o.next(t))}catch(t){s(t)}}function a(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}l((o=o.apply(t,e||[])).next())}))};const i=k();let s,{currentWord:r}=e,{wordLists:a}=e,{containerPosition:l}=e,{keystrokes:c}=e,u={start:!1,init:!0,finish:!1},d={interval:null,minutes:1,seconds:0};const h=()=>{clearInterval(d.interval),i("showResult",!0),n(1,u.start=!1,u),n(1,u.finish=!0,u),n(0,s="")},f=()=>{u.start||(n(1,u.start=!0,u),n(1,u.init=!1,u),n(2,d.interval=setInterval((()=>{0!==d.seconds?n(2,d.seconds--,d):0!==d.minutes?(n(2,d.minutes--,d),0===d.minutes&&n(2,d.seconds=59,d)):h()}),1e3),d))},m=(t,e)=>{const n=t.split(" ");w(e,n[0]),y(n[1]),g()},y=t=>{n(0,s=t||"")},g=()=>{n(6,r.index++,r);const t=document.querySelectorAll(".word")[r.index];t&&t.offsetTop>r.offsetTop&&(n(8,l.offsetTop+=52,l),n(6,r.offsetTop=t.offsetTop,r))},w=(t,e)=>{t.trim()!==e.trim()&&n(7,a[r.index].incorrect=!0,a)};return t.$$set=t=>{"currentWord"in t&&n(6,r=t.currentWord),"wordLists"in t&&n(7,a=t.wordLists),"containerPosition"in t&&n(8,l=t.containerPosition),"keystrokes"in t&&n(9,c=t.keystrokes)},[s,u,d,t=>1===t.toString().length?"0"+t:t,({keyCode:t})=>{u.start||f();const e=s||"",o=a[r.index].text;n(7,a[r.index].incorrect=!1,a),32===t?m(e,o):(n(9,c.total++,c),((t,e)=>{for(let o=0;o<t.trim().length;o++)if(e[o]!==t[o]){n(9,c.incorrect++,c),n(7,a[r.index].incorrect=!0,a);break}})(e,o))},()=>o(void 0,void 0,void 0,(function*(){clearInterval(d.interval),i("showResult",!1),i("getWordLists"),y(),n(6,r.index=0,r),n(8,l.offsetTop=0,l),n(6,r.offsetTop=0,r),n(2,d={minutes:1,interval:null,seconds:0}),n(1,u={start:!1,init:!0,finish:!1})})),r,a,l,c,function(){s=this.value,n(0,s)}]}class tt extends F{constructor(t){super(),V(this,t,Z,X,s,{currentWord:6,wordLists:7,containerPosition:8,keystrokes:9})}}function et(e){let n,o,i,s,r,f,g,w,p,v,b,k,$,x,T,I,_,W,L,P,C,A,E,q,S,j,z,M,N,R,Y,D,O,B,K,V,F,G,H,J,Q,U,X,Z,tt=e[0].total-e[0].incorrect+"",et=e[0].incorrect+"";return{c(){n=u("div"),o=u("div"),i=d(e[1]),s=d(" WPM"),r=h(),f=u("table"),g=u("tr"),w=u("td"),w.textContent="Keystrokes",p=h(),v=u("td"),v.textContent=":",b=h(),k=u("td"),$=u("span"),x=d(tt),T=d(" | "),I=u("span"),_=d(et),W=h(),L=u("tr"),P=u("td"),P.textContent="Accuracy",C=h(),A=u("td"),A.textContent=":",E=h(),q=u("td"),S=d(e[4]),j=d("%"),z=h(),M=u("tr"),N=u("td"),N.textContent="Correct word(s)",R=h(),Y=u("td"),Y.textContent=":",D=h(),O=u("td"),B=u("span"),K=d(e[2]),V=h(),F=u("tr"),G=u("td"),G.textContent="Wrong word(s)",H=h(),J=u("td"),J.textContent=":",Q=h(),U=u("td"),X=u("span"),Z=d(e[3]),m(o,"class","result__summary svelte-8ndf35"),m(w,"class","svelte-8ndf35"),m(v,"class","svelte-8ndf35"),m($,"class","correct svelte-8ndf35"),m(I,"class","incorrect svelte-8ndf35"),m(k,"class","svelte-8ndf35"),m(g,"class","detail__text svelte-8ndf35"),m(P,"class","svelte-8ndf35"),m(A,"class","svelte-8ndf35"),m(q,"class","svelte-8ndf35"),m(L,"class","detail__text svelte-8ndf35"),m(N,"class","svelte-8ndf35"),m(Y,"class","svelte-8ndf35"),m(B,"class","correct svelte-8ndf35"),m(O,"class","svelte-8ndf35"),m(M,"class","detail__text svelte-8ndf35"),m(G,"class","svelte-8ndf35"),m(J,"class","svelte-8ndf35"),m(X,"class","incorrect svelte-8ndf35"),m(U,"class","svelte-8ndf35"),m(F,"class","detail__text svelte-8ndf35"),m(f,"class","result__detail svelte-8ndf35"),m(n,"class","result svelte-8ndf35")},m(t,e){l(t,n,e),a(n,o),a(o,i),a(o,s),a(n,r),a(n,f),a(f,g),a(g,w),a(g,p),a(g,v),a(g,b),a(g,k),a(k,$),a($,x),a(k,T),a(k,I),a(I,_),a(f,W),a(f,L),a(L,P),a(L,C),a(L,A),a(L,E),a(L,q),a(q,S),a(q,j),a(f,z),a(f,M),a(M,N),a(M,R),a(M,Y),a(M,D),a(M,O),a(O,B),a(B,K),a(f,V),a(f,F),a(F,G),a(F,H),a(F,J),a(F,Q),a(F,U),a(U,X),a(X,Z)},p(t,[e]){2&e&&y(i,t[1]),1&e&&tt!==(tt=t[0].total-t[0].incorrect+"")&&y(x,tt),1&e&&et!==(et=t[0].incorrect+"")&&y(_,et),16&e&&y(S,t[4]),4&e&&y(K,t[2]),8&e&&y(Z,t[3])},i:t,o:t,d(t){t&&c(n)}}}function nt(t,e,n){let o,i,s,r,{currentWord:a}=e,{keystrokes:l}=e,{wordLists:c}=e;const u=()=>m().length,d=()=>{const t=m();let e=0;return t.forEach((t=>{t.incorrect||e++})),e},h=(t,e)=>o-e,f=(t,e)=>Math.floor((t-e)/t*100),m=()=>c.slice(0,a.index);return n(1,o=u()),n(2,i=d()),n(3,s=h(o,i)),n(4,r=f(l.total,l.incorrect)),t.$$set=t=>{"currentWord"in t&&n(5,a=t.currentWord),"keystrokes"in t&&n(0,l=t.keystrokes),"wordLists"in t&&n(6,c=t.wordLists)},[l,o,i,s,r,a,c]}class ot extends F{constructor(t){super(),V(this,t,nt,et,s,{currentWord:5,keystrokes:0,wordLists:6})}}const it=["Imagination is more important than knowledge.","If I have seen further, it is by standing on the shoulders of giants.","Nothing in life is to be feared, it is only to be understood.","The present is theirs; the future, for which I really worked, is mine.","I have not failed. I've just found 10,000 ways that won't work.","Nature isn’t classical, dammit, and if you want to make a simulation of nature, you’d better make it quantum mechanical.","The cosmos is within us. We are made of star-stuff.","Remember to look up at the stars and not down at your feet.","To invent, you need a good imagination and a pile of junk.","The only way to do great work is to love what you do.","Genius is one percent inspiration and ninety-nine percent perspiration.","We can complain because rose bushes have thorns, or rejoice because thorns have roses.","The future depends on what we do in the present.","In science, there are no shortcuts to truth.","The greatest glory in living lies not in never falling, but in rising every time we fall.","Life is really simple, but we insist on making it complicated.","The way to get started is to quit talking and begin doing.","I would rather die of passion than of boredom.","Success is not final, failure is not fatal: It is the courage to continue that counts.","Your time is limited, don't waste it living someone else's life.","In the middle of difficulty lies opportunity.","The only limit to our realization of tomorrow will be our doubts of today.","The only thing necessary for the triumph of evil is for good men to do nothing.","A person who never made a mistake never tried anything new.","The measure of intelligence is the ability to change.","Life is like riding a bicycle. To keep your balance, you must keep moving.","If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.","The more I learn, the more I realize how much I don't know.","Science is the great antidote to the poison of enthusiasm and superstition.","The true sign of intelligence is not knowledge but imagination.","The best way to predict the future is to create it.","The only thing that interferes with my learning is my education.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","A person who never made a mistake never tried anything new.","We cannot solve our problems with the same thinking we used when we created them.","The greatest glory in living lies not in never falling, but in rising every time we fall.","We can complain because rose bushes have thorns, or rejoice because thorns have roses.","In the middle of difficulty lies opportunity.","Imagination is everything. It is the preview of life's coming attractions.","I have no special talent. I am only passionately curious.","The true sign of intelligence is not knowledge but imagination.","The more I learn, the more I realize how much I don't know.","In science, there are no shortcuts to truth.","Science is the great antidote to the poison of enthusiasm and superstition.","The future depends on what we do in the present.","The only limit to our realization of tomorrow will be our doubts of today.","Your time is limited, don't waste it living someone else's life.","Success is not final, failure is not fatal: It is the courage to continue that counts.","To invent, you need a good imagination and a pile of junk.","The only way to do great work is to love what you do.","If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.","The only thing necessary for the triumph of evil is for good men to do nothing.","Life is like riding a bicycle. To keep your balance, you must keep moving.","I would rather die of passion than of boredom.","The best way to predict the future is to create it.","The measure of intelligence is the ability to change.","The only thing that interferes with my learning is my education.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","The most beautiful experience we can have is the mysterious.","The important thing is not to stop questioning.","You have to learn the rules of the game. And then you have to play better than anyone else.","The difference between stupidity and genius is that genius has its limits.","Logic will get you from A to B. Imagination will take you everywhere.","The only true wisdom is in knowing you know nothing.","We are all in the gutter, but some of us are looking at the stars.","I never made one of my discoveries through the process of rational thinking.","Everything should be made as simple as possible, but not simpler.","I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.","Our greatest glory is not in never falling, but in rising every time we fall.","It's not that I'm so smart, it's just that I stay with problems longer.","The only real valuable thing is intuition.","A man who dares to waste one hour of time has not discovered the value of life.","The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.","I can't change the direction of the wind, but I can adjust my sails to always reach my destination.","I find that the harder I work, the more luck I seem to have.","Don't count the days, make the days count.","The only place where success comes before work is in the dictionary.","If you don't value your time, neither will others. Stop giving away your time and talents. Value what you know and start charging for it.","I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear.","Success is walking from failure to failure with no loss of enthusiasm.","Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.","I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.","The successful warrior is the average man, with laser-like focus.","The best revenge is massive success.","A successful man is one who can lay a firm foundation with the bricks others have thrown at him.","Don't watch the clock; do what it does. Keep going.","The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.","It does not matter how slowly you go as long as you do not stop.","The secret to getting ahead is getting started.","Don't be afraid to give up the good to go for the great.","You are never too old to set another goal or to dream a new dream.","The only thing that will stop you from fulfilling your dreams is you.","The road to success and the road to failure are almost exactly the same.","Success is not in what you have, but who you are.","The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.","The only place where success comes before work is in the dictionary.","I can't change the direction of the wind, but I can adjust my sails to always reach my destination.","I find that the harder I work, the more luck I seem to have.","Don't count the days, make the days count.","The only real valuable thing is intuition.","A man who dares to waste one hour of time has not discovered the value of life.","The only thing that will stop you from fulfilling your dreams is you.","The road to success and the road to failure are almost exactly the same.","Success is not in what you have, but who you are."];function st(t){let e,n,o,i,s;function r(e){t[6].call(null,e)}function a(e){t[7].call(null,e)}function l(e){t[8].call(null,e)}let c={};return void 0!==t[2]&&(c.currentWord=t[2]),void 0!==t[0]&&(c.wordLists=t[0]),void 0!==t[1]&&(c.containerPosition=t[1]),e=new U({props:c}),x.push((()=>Y(e,"currentWord",r))),x.push((()=>Y(e,"wordLists",a))),x.push((()=>Y(e,"containerPosition",l))),{c(){D(e.$$.fragment)},m(t,n){O(e,t,n),s=!0},p(t,s){const r={};!n&&4&s&&(n=!0,r.currentWord=t[2],P((()=>n=!1))),!o&&1&s&&(o=!0,r.wordLists=t[0],P((()=>o=!1))),!i&&2&s&&(i=!0,r.containerPosition=t[1],P((()=>i=!1))),e.$set(r)},i(t){s||(N(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){B(e,t)}}}function rt(t){let e,n,o,i,s;function r(e){t[14].call(null,e)}function a(e){t[15].call(null,e)}function l(e){t[16].call(null,e)}let c={};return void 0!==t[2]&&(c.currentWord=t[2]),void 0!==t[3]&&(c.keystrokes=t[3]),void 0!==t[0]&&(c.wordLists=t[0]),e=new ot({props:c}),x.push((()=>Y(e,"currentWord",r))),x.push((()=>Y(e,"keystrokes",a))),x.push((()=>Y(e,"wordLists",l))),{c(){D(e.$$.fragment)},m(t,n){O(e,t,n),s=!0},p(t,s){const r={};!n&&4&s&&(n=!0,r.currentWord=t[2],P((()=>n=!1))),!o&&8&s&&(o=!0,r.keystrokes=t[3],P((()=>o=!1))),!i&&1&s&&(i=!0,r.wordLists=t[0],P((()=>i=!1))),e.$set(r)},i(t){s||(N(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){B(e,t)}}}function at(t){let e,n,o,i,s,r,d,f,y,g,w,p=!t[4]&&st(t);function v(e){t[9].call(null,e)}function b(e){t[10].call(null,e)}function k(e){t[11].call(null,e)}function $(e){t[12].call(null,e)}let T={};void 0!==t[2]&&(T.currentWord=t[2]),void 0!==t[0]&&(T.wordLists=t[0]),void 0!==t[3]&&(T.keystrokes=t[3]),void 0!==t[1]&&(T.containerPosition=t[1]),s=new tt({props:T}),x.push((()=>Y(s,"currentWord",v))),x.push((()=>Y(s,"wordLists",b))),x.push((()=>Y(s,"keystrokes",k))),x.push((()=>Y(s,"containerPosition",$))),s.$on("showResult",t[13]),s.$on("getWordLists",t[5]);let I=t[4]&&rt(t);return{c(){e=u("link"),n=h(),o=u("main"),p&&p.c(),i=h(),D(s.$$.fragment),g=h(),I&&I.c(),m(e,"href","https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"),m(e,"rel","stylesheet"),m(o,"class","svelte-7du6q4")},m(t,r){a(document.head,e),l(t,n,r),l(t,o,r),p&&p.m(o,null),a(o,i),O(s,o,null),a(o,g),I&&I.m(o,null),w=!0},p(t,[e]){t[4]?p&&(z(),R(p,1,1,(()=>{p=null})),M()):p?(p.p(t,e),16&e&&N(p,1)):(p=st(t),p.c(),N(p,1),p.m(o,i));const n={};!r&&4&e&&(r=!0,n.currentWord=t[2],P((()=>r=!1))),!d&&1&e&&(d=!0,n.wordLists=t[0],P((()=>d=!1))),!f&&8&e&&(f=!0,n.keystrokes=t[3],P((()=>f=!1))),!y&&2&e&&(y=!0,n.containerPosition=t[1],P((()=>y=!1))),s.$set(n),t[4]?I?(I.p(t,e),16&e&&N(I,1)):(I=rt(t),I.c(),N(I,1),I.m(o,null)):I&&(z(),R(I,1,1,(()=>{I=null})),M())},i(t){w||(N(p),N(s.$$.fragment,t),N(I),w=!0)},o(t){R(p),R(s.$$.fragment,t),R(I),w=!1},d(t){c(e),t&&c(n),t&&c(o),p&&p.d(),B(s),I&&I.d()}}}function lt(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,s){function r(t){try{l(o.next(t))}catch(t){s(t)}}function a(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}l((o=o.apply(t,e||[])).next())}))};let i=[],s={offsetTop:0,currentPositionTop:0},r={index:0,offsetTop:0},a={total:0,incorrect:0},l=!1;var c;c=()=>o(void 0,void 0,void 0,(function*(){yield u()})),b().$$.on_mount.push(c);const u=()=>o(void 0,void 0,void 0,(function*(){n(0,i=[]);const t=Math.floor(104*Math.random()),e=it.slice(t,t+50);n(0,i=d(e))})),d=t=>{console.log({sentences:t});const e=[];for(let n=0;n<t.length;n++){const o=t[n].split(" ");for(let t=0;t<o.length;t++){if(250===e.length)return e;e.push({text:o[t]})}}return e};return[i,s,r,a,l,u,function(t){r=t,n(2,r)},function(t){i=t,n(0,i)},function(t){s=t,n(1,s)},function(t){r=t,n(2,r)},function(t){i=t,n(0,i)},function(t){a=t,n(3,a)},function(t){s=t,n(1,s)},t=>{n(4,l=t.detail)},function(t){r=t,n(2,r)},function(t){a=t,n(3,a)},function(t){i=t,n(0,i)}]}return new class extends F{constructor(t){super(),V(this,t,lt,at,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
