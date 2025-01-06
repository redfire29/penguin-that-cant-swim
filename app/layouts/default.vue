<template lang="pug">
div(
  class="max-w-[500px] mx-auto"
)
  swiper-container(
    ref="containerRef",
    class="h-full"
  )
    swiper-slide(
      v-for="content in pageList",
    )
      div(
        class="relative"
      )
        div(
          class="whitespace-pre-wrap p-1 text-[14px]"
        )
          p {{content?.content}}
        img(
          :src="content?.img",
          class="z-0 relative"
        )
</template>

<script setup>
const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  pagination: true,
  'pagination-type': 'fraction'
})

const pageList = [
  {
    img: '01.jpg',
    content: '',
  },
  {
    img: '02.jpg',
    content: `大海がとても怖い。海の中では全然目を開けられない。自分が無限に沈んでいきそうで、本当に怖い。
この海が怖いペンギンは心の中でそう思っていた。`,
  },
  {
    img: '03.jpg',
    content: `自分が泳げるようになるために、他の人にどうやって怖さを克服するのか聞いてみることにした。
ペンギンの先輩：「海の何が怖いのか、全然わからないっぺ？」`,
  },
  {
    img: '04.jpg',
    content: `隣の草原町に住むライオンの隣人：「海なんて草原と同じじゃないか？体は自然にそこで走れるようなものさ。生まれた時から怖いと思ったことなんてないよ。」`,
  },
  {
    img: '05.jpg',
    content: `上の階に住んでいる鳥の隣人：「生まれた時から空を飛べるから、自然とそうなった感じだよ。空のどこが怖いのか、全然わからないね。」`,
  },
  {
    img: '06.jpg',
    content: `何人かに聞いてみたけれど、誰も彼の悩みを理解してくれなかった。
ペンギンは海辺に座り、心の中でこう思った：「海なんて、こんなにも怖いのに...」`,
  },
  {
    img: '07.jpg',
    content: `「どうしたの？」
突然、人間が話しかけてきた。
ペンギンは自分がなぜ海を怖がっているのかを、目の前の人間に話して聞かせた。`,
  },
  {
    img: '08.jpg',
    content: `話を聞き終わった後、目の前の人間はペンギンにゴーグルを渡してくれた。
「じゃあ、これをあげるよ。これがあれば、海の中でも勇気を出して目を開けられるはずだよ！」`,
  },
  {
    img: '09.jpg',
    content: `「君は沈んでいるんじゃないよ。大海という名の空を飛んでいるんだ！海はとても美しいから、安心して目を開けてごらん！」
人間は笑顔でそう言いながら、その場を去っていった。`,
  },
  {
    img: '10.jpg',
    content: `その後、ペンギンはゴーグルをかけ、勇気を振り絞って再び大海に飛び込むことにした。
うーん…やっぱり怖いけど、ゴーグルが守ってくれるから、目を開けても大丈夫かもしれない…
ペンギンは心の中で怖さを感じつつも、ゴーグルのおかげで少しだけ勇気を持つことができた。`,
  },
  {
    img: '11.jpg',
    content: `勇気を振り絞って目を開けたペンギン。目の前の大海はもはや底が見えない深い青ではなく、
まるで空のように透き通った青色に変わっていた。周りの世界も広がりを見せて、
それ以来、ゴーグルを持つペンギンはもう大海を怖がることはなくなった。`,
  }
]
</script>