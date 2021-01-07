<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: mapGetters(['isAuthenticated']),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm.isAuthenticated)
    })
  }
}
</script>

<style scoped>
</style>
