<template>
  <div class="container welcome-container">
    <h1>Welcome</h1>
    <div class="routingButtons">
      <router-link :to="{ name: 'Login' }">Login</router-link>
      <router-link :to="{ name: 'Signup' }">Signup</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style scoped>
.routingButtons {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
}

a {
  text-decoration: none;
  color: inherit;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  padding: 4px 0;
  width: 75%;
  cursor: pointer;
}

a:hover {
  background: #eee;
}

a:not(:last-of-type) {
  margin-bottom: 1rem;
}
</style>
