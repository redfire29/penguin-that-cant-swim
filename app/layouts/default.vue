<template lang="pug">
div(
  class="bg-cyan-700 h-full"
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
const pageList = [
  {
    content: '123',
  },
  {
    content: '456',
  }
]
</script>