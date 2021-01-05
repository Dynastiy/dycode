<template>
    <div class="projects container">
        <h1 class="project-header mt-4 mb-3">My Projects</h1>
        <div class="row container justify-content-center">
            <div class="col-md-4 mb-3 mr-3 cards bg-info">
                <img class="mr-4"  src="@/assets/img/feera.jpg" width='30%'>
                <a title="Feera Website" href="https://feera.netlify.app">FEERA</a>
            </div>
            <div class="col-md-4 mb-3 mr-3 cards bg-info">
                <img class="mr-4" src="https://wearelovefoundation.netlify.app/img/Logo.17df1e15.svg" alt="We are love foundation" width="30%">
                <a href="https://wearelovefoundation.netlify.app">We are Love foundation</a>
            </div>
            <div class="col-md-4 mb-3 mr-3 cards bg-info">
                <img class="mr-4" src="@/assets/img/analog.jpg" width="30%">
                <a href="https://clockanalog.netlify.app/">Analog Clock</a>
            </div>
            <div class="col-md-4 mb-3 mr-3 cards bg-info">
                <img class="mr-4" src="https://launchandgrow.netlify.app/img/logo2.svg" alt="Launch and grow" width="30%">
                <a href="https://launchandgrow.netlify.app/">Launch and Grow Website</a>
            </div>
            <div class="col-md-4 mb-3 mr-3 cards bg-info">
                <img class="mr-4" src="@/assets/img/storehouse.svg" width="30%">
                <a href="https://storehousehome.netlify.app/">Storehouse.ng</a>
            </div>
        </div>

        <div class="worked text-center bg-info mt-3 mb-3 py-4">
            <h3 class="text-light">Worked For</h3>
            <div class="row justify-content-center">
                <div class="mr-5">
                    <a href="https://jiggle.ng"><img src="https://jiggle.ng/jiggle-logo-blue.svg" alt="jiggle logo" width="50%"></a>
                </div>
                <div>
                    <a href="https://starthub.com.ng/"><img src="https://starthub.com.ng/wp-content/uploads/2020/09/STARTHUB-1.png" alt="Start Innovation hub logo" width="50%"></a>
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
.project-header {
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.2)
}
a{
    color: #fff !important;
    font-size: 1.4rem;
}
.cards {
    /* background: #fcfcfc; */
    padding: 1rem 1.3rem;
}
</style>