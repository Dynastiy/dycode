<template>
    <div class="projects container">
        <h1 class="project-header mt-4 mb-3">My Projects</h1>
        <div class="d-lg-flex d-md-flex flex-wrap justify-content-between d-sm-block container">
            <div class=" mb-3 cards">
                <img class="mr-4 img" src="https://zugascan.com/static/img/logo.png">
                <a href="https://zugascan.com/">ZugaScan</a>
            </div>
            <div class=" mb-3 cards">
                <img class="mr-4 img"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3mIWd_qL-zSjpZtx4m42887RyyiW63mNXC634PiAYScnqYdhVQ-KiSsZ3kp5JZFdLt8&usqp=CAU">
                <a title="Feera Website" href="https://dy-qrcodegen.netlify.app/">QR Code Generator</a>
            </div>
            <div class=" mb-3 cards">
                <img class="mr-4 img"  src="@/assets/img/feera.jpg">
                <a title="Feera Website" href="https://feera.netlify.app">FEERA</a>
            </div>
            <div class=" mb-3 cards">
                <img class="mr-4 img" src="https://wearelovefoundation.netlify.app/img/Logo.17df1e15.svg" alt="We are love foundation">
                <a href="https://wearelovefoundation.netlify.app">We are Love foundation</a>
            </div>
            <div class=" mb-3 cards">
                <img class="mr-4 img" src="@/assets/img/analog.jpg">
                <a href="https://clockanalog.netlify.app/">Analog Clock</a>
            </div>
            <div class=" mb-3 cards">
                <img class="mr-4 img" src="https://launchandgrow.netlify.app/img/logo2.svg" alt="Launch and grow">
                <a href="https://launchandgrow.netlify.app/">Launch and Grow Website</a>
            </div>
            <div class=" mb-3 cards">
                <img class="mr-4 img" src="@/assets/img/storehouse.svg">
                <a href="https://storehousehome.netlify.app/">Storehouse.ng</a>
            </div>
        </div>

        <div class="worked cards text-center mt-3 mb-3 py-4">
            <h3 class="text-light">Worked For</h3>
            <div class="d-flex justify-content-around flex-wrap mt-4">
                <div class=" mt-md-2">
                    <a href="https://jiggle.ng"><img src="https://jiggle.ng/jiggle-logo-blue.svg" alt="jiggle logo" width="80%"></a>
                </div>
                <div class="mt-md-2">
                    <a href="https://starthub.com.ng/"><img src="https://starthub.com.ng/wp-content/uploads/2020/09/STARTHUB-1.png" alt="Start Innovation hub logo" width="300"></a>
                </div>
                <div class="mt-md-2">
                    <a href="https://blockmay.com/"><img src="http://blockmay.com/wp-content/uploads/2021/06/Logo-trans.png" alt="Blockmay Logo" width="200"></a>
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
.cards {
    background: rgba(222, 222, 222, 0.3);
    border-radius: 10px;
}
.project-header {
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.2)
}
a{
    color: #fff !important;
    font-size: 1rem;
    text-shadow: 2px 2px 5px #000;
}
.cards {
    /* background: #fcfcfc; */
    padding: 1rem 1.3rem;
}
.img {
    width: 50px;
    height: 50px;
}
</style>