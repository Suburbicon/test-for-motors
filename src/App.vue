<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './view/Home';

export default {
  name: 'App',
  components: {
    Home,
  },
  data: () => {
    return {};
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
