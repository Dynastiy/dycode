<template>
    <div class=" pb-5 container">
        <h1 class="text-center about-header mb-4" >About Me </h1>
        <div class="row align-items-center justify-content-around">
                    <div class="container align-items-center">
                        <div>
                            <p class="text-white"> <span class="text-info" style="font-family: 'Dancing Script', cursive; font-size: 1.3rem" >Emmanuel Michael</span> is from Akwa Ibom State, Nigeria and has worked as a front end developer for jiggle.ng, a leading food payment site, he currently works with Start Innovation hub, Uyo as a front End Mentor, he also works with Sacred Music International, as the Drama Department Director.
                                As a web developer, he spans beyond that into some other spheres which include, directing, acting and script writing, graphics design, video editing, MCing, and spoken word.
                                When not coding, acting or writing, Emmanuel loves to play scrabble, chess, and watch movies.
                            </p>
                            <p class="text-info small px-2 py-2 mb-3">
                            I have a rich experience in developing web apps and building and customization of websites etc. I am proficient in UI/UX, HTML5, CSS3, Vanilla JavaScript, Bootstrap5, VueJs, Ionic, NuxtJs. I would love to talk with you about my unique approach. Feel free to contact 
                            me writing by an email to <a class="gmail text-white" href="mailto: emmanuel77michael@gmail.com">emmanuel77michael@gmail.com</a> with your project idea.
                            </p>
                        </div>
                    </div>
                </div>    
       <div class="">
            <div class="container-fluid">  
                <div class="">
                    <div class="card-body">
                        <div class="text-center text-info mt-3 mb-5">
                                    <h2>Skills</h2>
                                </div>
                        <div class="row justify-content-center align-items-center">
                            <!-- transaction Icons  -->
                            <div class="text-center headd">
                                <img src="@/assets/headshot.jpg" class="image1 px-1 py-1 rounded-circle" width="150" height="150">
                            </div>
                            <!-- Transaction Details  -->
                            <div class="skills-card col-lg-4 col-md-4 col-sm-4">
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="subb"> HTML  </h6>
                                    <h6 class="subb"> CSS  </h6>
                                    <h6 class="subb"> Javascript  </h6>
                                </div>
                                <hr>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="subb"> VueJS  </h6>
                                    <h6 class="subb"> NuxtJS  </h6>
                                    <h6 class="subb"> Ionic </h6>
                                </div>
                                <hr>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="subb"> UI/UX </h6>
                                    <h6 class="subb"> Graphics Design - Corel Draw  </h6>
                                    <h6 class="subb"> MCing </h6>
                                </div>
                                <hr>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="subb"> Acting </h6>
                                    <h6 class="subb"> Directing  </h6>
                                    <h6 class="subb"> Script Writing </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
                            
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.row {
    margin: 0 !important;
    padding: 0 !important;
}
.subb {
    font-size: 0.7rem;
}
.image1 {
    border: 3px solid #999;
}
p {
    margin: 0;
    padding: 0;
    line-height: 1.8rem;
}
.writeup {
    width: 100%;
    font-size: 1rem;
    /* margin-top: 3rem; */
}
.container-fluid {
    padding-left: 3rem;
    padding-right: 3rem;
}
.card-body {
    background: #fff;
}
.about-header {
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.2);
    /* position: absolute; */
}
.skills-header {
    font-size: 3rem;
    color: #fff;
    padding-top: 0.3rem;
}
.skills {
    list-style: none;
    padding: 1rem;
}
.skill-set {
    /* display: inline; */
    background: #fff;
    margin-right: 0.7rem;
    padding: 0.3rem 1.2rem;
    margin-top: 0.7rem;
    font-size: 1.3rem;
}
.skills-card {
    box-shadow: rgba(255, 255, 255, 0.2);
}
.top {
        /* background: #17a2b8; */
        background: rgba(222, 222, 222, 0.3);
        border-radius: 10px;
        box-shadow: 0px 0px 3px 0px #c5c5c5;
        border-radius: 5px;
        padding: 1rem 2rem;
    }
     .top h2 {
      text-transform: uppercase;
    }
.image1{
        margin-right: 2rem;
    }
    @media screen and (max-width: 992px) {
  .container-fluid {
    padding-left: 2rem;
    padding-right: 2rem;
    }
    .image1{
        margin-right: 0;
        margin-bottom: 2rem;
    }
}
</style>