<template>
  <div class="Home">
    <div class="login">
      <form @submit.prevent="logIn">
        <input type="text" v-model="email">
        <input type="password" v-model ="password">
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        email:'eMail',
        password:''

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>


</style>
