<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
            <router-view></router-view>
      </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>

</style>
