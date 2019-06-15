<template>
  <div class="home">
    <the-main-title />
  </div>
</template>

<script>
import TheMainTitle from '@/components/TheMainTitle'

export default {
  name: 'home',
  components: {
    TheMainTitle
  }
}
</script>
<style lang="scss" scoped>
.home {
  background-image: linear-gradient(270deg, #48367d 0%, #241842 100%);
  color: #fff;
}
</style>
