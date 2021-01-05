<template>
    <div class="container pb-5">
        <h1 class="text-center about-header" >About Me </h1>
        <div class="row no-gutters art">
            <div class="col-md-9">
                <div class="writeup p-3">
                        <p class="text-white">
                        <span class="text-info" style="font-family: 'Dancing Script', cursive; font-size: 1.3rem" >Emmanuel Michael</span> is from Akwa Ibom State, Nigeria and has worked as a front end developer for jiggle.ng, a leading food payment site, he currently works with Start Innovation hub, Uyo as a front End Mentor, he also works with Sacred Music International, as the Drama Department Director.
                        As a web developer, he spans beyond that into some other spheres which include, directing, acting and script writing, graphics design, video editing, MCing, and spoken word.
                        When not coding, acting or writing, Emmanuel loves to play scrabble, chess, and watch movies.
                        </p>
                        <p class="text-white">
                            I have rich experience in developing web apps and building and customization of websites etc. I am proficient in UI/UX, HTML5, CSS3, Vanilla JavaScript, Bootstrap5, VueJs, Ionic, NuxtJs. I love to talk with you about our unique approach. Feel free to contact me writing an email to <a class="gmail" href="mailto: emmanuel77michael@gmail.com">emmanuel77michael@gmail.com</a> with your project idea.
                        </p>
                    </div>
            </div>
            <div class="col-md-3">
                <img src="@/assets/dyn.jpg" class="image1" width="100%">
            </div>
        </div>
        <div class="bg-info p-3 mt-5">
            <h1 class="text-center skills-header" >Skills </h1>
            <ul class="row skills justify-content-center">
                <li class="skill-set">HTML</li>
                <li class="skill-set">CSS</li>
                <li class="skill-set">Javascript</li>
                <li class="skill-set">VueJs</li>
                <li class="skill-set">UI/UX</li>
                <li class="skill-set">Graphics Design - Corel Draw</li>
                <li class="skill-set">Nuxt Js</li>
                <li class="skill-set">Script Writing</li>
                <li class="skill-set">Public Speaking</li>
                <li class="skill-set">Directing</li>
                <li class="skill-set">MCing</li>
            </ul>
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
.writeup {
    width: 100%;
    font-size: 1rem;
    /* margin-top: 3rem; */
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
</style>