import{i as d,E as m,o as f,J as _,r as h,t as o,v as u,x as l,K as j,L as x,y as w}from"./DQ_dzLh3.js";function S(i,n){const t=d(()=>{var e;return((e=i==null?void 0:i.value)==null?void 0:e.swiper)??null}),a=(...e)=>{t.value&&(e.length===0?t.value.slideNext():t.value.slideNext(...e))},c=(...e)=>{t.value&&t.value.slideTo(...e)},s=(...e)=>{t.value&&(e.length===0?t.value.slideReset():t.value.slideReset(...e))},g=(...e)=>{t.value&&(e.length===0?t.value.slidePrev():t.value.slidePrev(...e))},p=()=>{var r;!(((r=i.value)==null?void 0:r.nodeName)==="SWIPER-CONTAINER")&&t.value!==null&&!n&&console.warn('"useSwiper()" requires a ref and is tied to the %c`<swiper-container ref="swiperContainerRef"></swiper-container>` element.',"font-weight: bold;")},v=()=>{var e;i.value&&n!==void 0&&(Object.assign(i.value,n),(e=i.value)==null||e.initialize())};return m(t,()=>p()),f(()=>_(()=>v())),{instance:t,next:a,prev:g,to:c,reset:s}}const N={class:"max-w-[500px] mx-auto"},k={class:"relative"},y={class:"whitespace-pre-wrap p-1 text-[14px]"},E=["src"],B={__name:"default",setup(i){const n=h(null);S(n,{effect:"creative",pagination:!0,"pagination-type":"fraction"});const t=[{img:"01.jpg",content:""},{img:"02.jpg",content:`大海がとても怖い。海の中では全然目を開けられない。自分が無限に沈んでいきそうで、本当に怖い。
この海が怖いペンギンは心の中でそう思っていた。`},{img:"03.jpg",content:`自分が泳げるようになるために、他の人にどうやって怖さを克服するのか聞いてみることにした。
ペンギンの先輩：「海の何が怖いのか、全然わからないっぺ？」`},{img:"04.jpg",content:"隣の草原町に住むライオンの隣人：「海なんて草原と同じじゃないか？体は自然にそこで走れるようなものさ。生まれた時から怖いと思ったことなんてないよ。」"},{img:"05.jpg",content:"上の階に住んでいる鳥の隣人：「生まれた時から空を飛べるから、自然とそうなった感じだよ。空のどこが怖いのか、全然わからないね。」"},{img:"06.jpg",content:`何人かに聞いてみたけれど、誰も彼の悩みを理解してくれなかった。
ペンギンは海辺に座り、心の中でこう思った：「海なんて、こんなにも怖いのに...」`},{img:"07.jpg",content:`「どうしたの？」
突然、人間が話しかけてきた。
ペンギンは自分がなぜ海を怖がっているのかを、目の前の人間に話して聞かせた。`},{img:"08.jpg",content:`話を聞き終わった後、目の前の人間はペンギンにゴーグルを渡してくれた。
「じゃあ、これをあげるよ。これがあれば、海の中でも勇気を出して目を開けられるはずだよ！」`},{img:"09.jpg",content:`「君は沈んでいるんじゃないよ。大海という名の空を飛んでいるんだ！海はとても美しいから、安心して目を開けてごらん！」
人間は笑顔でそう言いながら、その場を去っていった。`},{img:"10.jpg",content:`その後、ペンギンはゴーグルをかけ、勇気を振り絞って再び大海に飛び込むことにした。
うーん…やっぱり怖いけど、ゴーグルが守ってくれるから、目を開けても大丈夫かもしれない…
ペンギンは心の中で怖さを感じつつも、ゴーグルのおかげで少しだけ勇気を持つことができた。`},{img:"11.jpg",content:`勇気を振り絞って目を開けたペンギン。目の前の大海はもはや底が見えない深い青ではなく、
まるで空のように透き通った青色に変わっていた。周りの世界も広がりを見せて、
それ以来、ゴーグルを持つペンギンはもう大海を怖がることはなくなった。`}];return(a,c)=>(o(),u("div",N,[l("swiper-container",{class:"h-full",ref_key:"containerRef",ref:n},[(o(),u(j,null,x(t,s=>l("swiper-slide",null,[l("div",k,[l("div",y,[l("p",null,w(s==null?void 0:s.content),1)]),l("img",{class:"z-0 relative",src:s==null?void 0:s.img},null,8,E)])])),64))],512)]))}};export{B as default};
