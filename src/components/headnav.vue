<template>
    <div class="nav">
      <!-- <router-link to="/"><i class="homeicon ml-3 mt-3 fa fa-home text-white"></i></router-link> -->
      <div class="ml-auto mr-auto larger-screens">
        <ul class="p-3">
          <router-link to="/"><li class="navitem mr-3">Home</li></router-link>
          <li class="mr-3 line">|</li>
          <router-link to="/about"><li class="navitem mr-3">About</li></router-link>
          <li class="mr-3 line">|</li>
          <router-link to="/projects"><li  class="navitem mr-3" >Projects</li></router-link>
          <li class="mr-3 line">|</li>
          <router-link to="/blog"><li  class="navitem mr-3" >Blog</li></router-link>
          <li class="mr-3 line">|</li>
          <router-link to="/contact"><li  class="navitem" >Contact</li></router-link>
        </ul>
      </div>

      <div class="mobile container text-right">
        <i class="fa fa-bars text-white fa-2x text-info" id="tog" aria-hidden="true"></i>
      </div>

      <div class="mobile-display p-4" id="side-bar">
          <!-- <div class="mb-4 text-right container">
            <i class="fa fa-times fa-2x text-info" aria-hidden="true"></i>
          </div> -->
          <div class="mb-4 mt-4">
            <i class="fa fa-home mr-4 text-muted" aria-hidden="true"></i>
            <router-link class="mobile-item text-muted" to="/">Home</router-link>
          </div>
          <div class="mb-4">
            <i class="fa fa-user mr-4 text-muted" aria-hidden="true"></i>
            <router-link class="mobile-item text-muted" to="/about">About</router-link>
          </div>
          <div class="mb-4">
            <i class="fas fa-project-diagram mr-3 text-muted "></i>
            <router-link class="mobile-item text-muted" to="/projects">Projects</router-link>
          </div>
          <div class="mb-4">
            <i class="fa fa-newspaper-o mr-3 text-muted" aria-hidden="true"></i>
            <router-link class="mobile-item text-muted" to="/blog">Blog</router-link>
          </div>
          <div class="mb-4">
            <i class="fa fa-comment mr-3 text-muted" aria-hidden="true"></i>
            <router-link class="mobile-item text-muted" to="/contact">Contact</router-link>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    

    mounted(){
        const toggller = document.getElementById("tog");
        const sidee = document.getElementById('side-bar');

        document.onclick = function(e) {
          if(e.target.id !== "tog" && e.target.id !== "side-bar"){
            sidee.classList.remove('active');
            toggller.style.opacity = '1'
          }
        }

        toggller.onclick = function(){
        sidee.classList.toggle('active');
        toggller.style.opacity = '0'
        }
  }

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
.mobile {
  display: none;
}
.mobile-display {
  position: fixed;
  background: #fff;
  left: -500px;
  top: 0;
  width: 350px;
  min-height: 100vh;
  box-shadow: 0px 0px 5px 0px rgba(8, 8, 8, 0.5);
  font-size: 1.3rem;
  transition: 0.6s;
  z-index: 999;
}
.mobile-display.active {
  left: 0px;
}
@media screen and (max-width: 992px) {
  .larger-screens {
    display: none;
  }
  .mobile{
    display: block;
    margin-top: 1rem ;
    /* color:#17a2/b8; */
  }
  .router-link-exact-active {
  color: #17a2b8 !important;
}
}
</style>