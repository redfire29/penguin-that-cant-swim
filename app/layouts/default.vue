<template lang="pug">
div(
  class="bg-cyan-700"
)
  swiper-container(
    ref="containerRef",
    class="h-full"
  )
    swiper-slide(
      v-for="content in pageList",
      class="bg-blue-700 h-full"
    )
      p {{content?.content}}
</template>

<script setup>
const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  navigation: true,
})

const pageList = [
  {
    content: '123',
  },
  {
    content: '456',
  }
]
</script>