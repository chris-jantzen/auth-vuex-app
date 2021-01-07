<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit="onSubmit">
      <div class="info-input">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" v-model="username">
      </div>
      <div class="info-input">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password">
      </div>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  watch: {
    username(val) {
      this.setUsername(val)
    }
  },
  methods: {
    ...mapMutations(['setUsername']),
    ...mapActions(['authenticate']),
    onSubmit(e) {
      e.preventDefault()
      this.authenticate(this.password).then(res => console.log(res))
    }
  }
}
</script>

<style scoped>
.info-input {
  margin-bottom: 0.5rem;
}

input[type="submit"] {
  margin-top: 1rem;
}
</style>
