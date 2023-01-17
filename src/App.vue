<template>
  <NavbarComponent />

  <router-view />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    NavbarComponent:defineAsyncComponent(() =>import('./modules/shared/components/Navbar-component.vue'))
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
