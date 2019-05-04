<template>
  <div class="home">
    <the-nav />
    <the-main-title />
  </div>
</template>

<script>
import TheMainTitle from '@/components/TheMainTitle'
import TheNav from '@/components/TheNav'

export default {
  name: 'home',
  components: {
    TheMainTitle,
    TheNav
  }
}
</script>
<style lang="scss" scoped>
.home {
  background-image: linear-gradient(270deg, #48367d 0%, #241842 100%);
  color: #fff;
}
</style>
