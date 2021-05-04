<template>
  <div id="app">
    <headnav></headnav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import headnav from './components/headnav';
import Footer from './components/footer'

export default {
  name: 'App',
  components: {
    headnav,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Share+Tech&display=swap');

#app {
  background-image: url('./assets/3.jpg');

  background-size: cover;
  background-repeat: no-repeat;
  /* background-position-x: center; */
  min-height: 100vh !important;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  /* font-family: 'Share Tech', monospace !important; */
  font-family: 'Ubuntu', sans-serif;
}

</style>
