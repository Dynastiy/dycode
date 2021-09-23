<template>
  <div class="">
    <!--Clock here -->
    <p class="text-white text-center text-info mt-4" style="font-size:1.3rem">{{ display }}</p>
    <div class="text-center mt-5">
        <img src="@/assets/headshot.jpg" class="image1 px-1 py-1 rounded-circle" width="150" height="150">
    </div>
    <div>
      <div> <i class="fa fa-play text-info" aria-hidden="true"></i> </div>
    </div>

    <div class="hero">
      <h5 class="text-white text-center header-text animate__animated animate__slower  animate__flash">Emmanuel 
       Michael</h5>
      <hr>
      <ul class="text-center text-info">
        <li class="mr-4 item" > <i class="fas fa-circle-notch fa-xs" aria-hidden="true"></i> Web Developer </li>
        <li class="mr-4 item" > <i class="fas fa-circle-notch fa-xs" aria-hidden="true"></i> Graphics Designer </li>
        <li class="mr-4 item" > <i class="fas fa-circle-notch fa-xs" aria-hidden="true"></i> Public Speaker </li>
        <li class="mr-4 item" > <i class="fas fa-circle-notch fa-xs" aria-hidden="true"></i> Video Editor </li>
        <li class="item"> <i class="fas fa-circle-notch fa-xs" aria-hidden="true"></i> Actor/Director </li>
      </ul>
<div class="text-center my-3">
        <a href="https://docs.google.com/document/d/1huDizeZfzoHS9U8z_Knw5miKKBPrAttr/edit#heading=h.1fob9te"> <button class="btn btn-info rounded-0 px-3 py-1">View Resume</button> </a>
      </div>
      <nav class="circular-menu">

        <div class="circle">
          <a href="https://web.facebook.com/min.dynarex" class="fa fa-facebook fa-2x"></a>
          <a title="08093915841" href="tel:809 391 5841" class="fa fa-phone fa-2x"></a>
          <a href="https://twitter.com/dy_code" class="fa fa-twitter fa-2x"></a>
          <a href="https://www.linkedin.com/in/emmanuel-michael-1467ab17b/" class="fa fa-linkedin fa-2x"></a>
          <a href="https://github.com/Dynastiy" class="fa fa-github fa-2x"></a>
          <a href="https://www.instagram.com/official_dynastiy/" class="fa fa-instagram fa-2x"></a>
          <a class="gmail" href="mailto: emmanuel77michael@gmail.com"><i class="fa fa-envelope fa-2x"></i></a>
        </div>
        <div class="text-center mt-5 mb-3">
          <button @click="openmenu" class="menu-button btn btn-contact btn-outline-info">Contact</button>
        </div>
  
  <!-- <button @click="openmenu"><a href="" class="menu-button fa fa-bars fa-2x"></a></button> -->

</nav>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
    // var items = document.querySelectorAll('.circle a');

    // for(var i = 0, l = items.length; i < l; i++) {
    //   items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
      
    //   items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    // }

    // document.querySelector('.menu-button').onclick = function(e) {
    //   e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
    // }

export default {
  data() {
    return{
      social: false,
      time: Date.now()
      
    } 
  },
  computed: {
      display() {
        return moment(this.time).format("dddd hh:mm:ss A");
      }
    },
    created() {
      setInterval(() => {
        this.time = Date.now();
      }, 1000);
    },
  mounted(){
    var items = document.querySelectorAll('.circle a');

    for(var i = 0, l = items.length; i < l; i++) {
      items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
      
      items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    }
  },
  methods:{
    openmenu(e){
      e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');
  .hero{
     padding-top: 1rem;
  }
  .row {
    margin: 0 !important;
    padding: 0 !important;
  }
.image1 {
  border: 3px solid #fff;
}
/*For circular menu */
  /* Demo by http://creative-punch.net */

@import "https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css";

.circular-menu {
  width: 250px;
  height: 250px;
  margin: 0 auto;
  position: relative;
}

.circle {
  width: 250px;
  height: 250px;
  opacity: 0;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}

.open.circle {
  opacity: 1;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
}

.circle a {
  text-decoration: none;
  color:#17a2b8;
  display: block;
  height: 40px;
  width: 40px;
  line-height: 40px;
  margin-left: -20px;
  margin-top: -20px;
  position: absolute;
  text-align: center;

}

.circle a:hover {
  color: #eef;
}

.menu-button {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 35px);
  text-decoration: none;
  /* text-align: center; */
  /* color: #444; */
  /* border-radius: 50%; */
  display: block;
  /* height: 40px; */
  /* width: 40px; */
  line-height: 40px;
  /* padding: 10px; */
  /* background: #dde; */
}

.menu-button:hover {
  background-color: #fff;
  color: #17a2b8;
}


  .header-text{
    font-size: 3rem;
    text-transform: uppercase;
    /* color: ; */
    /* letter-spacing: 0.2rem; */
  }
  .hero li{
    list-style: none;
    display: inline-block;
  }
  .item {
    font-size: 0.8rem;
  }
  .btn-contact {
    border-radius: 0;
    font-size: 0.8rem;
    padding: 0.05rem 1rem;
  }
  .btn-contact:hover {
    transition: 2s;
  }
  .btn-close:hover{
    transform: rotate(40deg);
    transition: 2s;
  }
  .btn-options {
    border: none;
  }
  hr {
    width: 8rem;
    height: 0.01rem;
    background-color: #17a2b8;
  }
  .btn-options:hover {
    transform: rotate(-40deg) !important;
    transition: 2s;
    background: none !important;
    color: #17a2b8;
  }
  .social-icons li {
    list-style: none;
    background-color: #17a2b8 ;
    /* width: 3rem; */
    padding: 1rem 6rem;
    display: inline-block;
  }
  .social-icons{
    position: absolute;
    right: 2%;
    bottom: 3%;
    margin: auto 0;
    /* width: ; */
  }
  .social-icons li:hover{
    background-color: #000;
    transition: 1s ease-in-out;
  }
  .fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.02;
}


@media screen and (max-width: 992px) {
  .hero {
    padding-top: 1rem;
  }
}
</style>
