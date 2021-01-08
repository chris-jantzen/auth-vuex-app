<template>
  <div class="container">
    <h1>Sign Up</h1>
    <h2 v-if="isCreationError" style="color: red;">Error Creating Account</h2>
    <form @submit="onSubmit">
      <div class="email info-input">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email">
      </div>
      <div class="username info-input">
        <label for="username">Username</label>
        <input type="text" name="username" id="username" v-model="username">
      </div>
      <div class="password info-input">
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
  name: 'CreateAccount',
  data() {
    return {
      email: '',
      username: '',
      password: '',
      isCreationError: false
    }
  },
  watch: {
    username(val) {
      this.setUsername(val)
    },
    email(val) {
      this.setEmail(val)
    }
  },
  methods: {
    ...mapActions(['signUp']),
    ...mapMutations(['setUsername', 'setEmail']),
    onSubmit(e) {
      e.preventDefault()
      console.log('pretend signup')
      this.signUp(this.password)
        .then(res => {
          if (res) {
            this.$router.push({ name: 'Home' })
          } else {
            this.isCreationError = true
          }
        })
    }
  }
}
</script>

<style>
form {
  width: 35%;
}
.info-input {
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
}

input[type="submit"] {
  margin-top: 1rem;
  width: 40%;
}
</style>
