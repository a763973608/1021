<template>
  <div class="wrap">
      <v-header></v-header>
      <div class="main">
          <v-left></v-left>
          <v-right></v-right>
      </div>
  </div>
</template>
<script>
import API from '../common/js/API.js'
import vHeader from '../views/header'
import vLeft from '../views/left'
import vRight from '../views/right'
export default {
    components: {
        vHeader,
        vRight,
        vLeft
    }
}
</script>
<style lang="stylus" scoped>
.wrap{
    width 100vw;
    height 100vh;
    display flex;
    flex-direction column;
}
.main{
    flex 1;
    display flex;
}
</style>