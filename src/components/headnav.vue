<template>
    <div class="nav">
      <router-link to="/"><i class="homeicon ml-3 mt-3 fa fa-home text-white"></i></router-link>
      <div class="ml-auto mr-auto">
        <ul class="p-3">
          <router-link to="/about"><li class="navitem mr-3">About</li></router-link>
          <li class="mr-3 line">|</li>
          <router-link to="/projects"><li  class="navitem mr-3" >Projects</li></router-link>
          <li class="mr-3 line">|</li>
          <router-link to="/blog"><li  class="navitem" >Blog</li></router-link>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.nav li{
 display: inline; 
 color: #fff;
 /* text-align: center; */
}
.navitem:hover {
  color:#17a2b8;
  cursor: pointer;
  transition: 2s;
  text-decoration:double !important;
}
a:hover{
  text-decoration: dotted !important;
}
router-link:hover {
  text-decoration: none !important;
}
ul {
  margin-bottom: 0px !important;
  margin-top: 0px !important;
}
.line {
  color: #17a2b8 !important;
}
.homeicon:hover {
  color: #17a2b8;
}
.router-link-exact-active {
  color: #fff !important;
}
</style>