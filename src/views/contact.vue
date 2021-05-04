<template>
    <div class="container">
        <h1 class="project-header mt-4 mb-3">Send a Message</h1>

        <div class=" mx-0 my-auto mb-5">
            <div class="imagss">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="@/assets/1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/3a.jpg" class="d-block w-100" alt="...">
                        </div>
                        <!-- <div class="carousel-item">
                            <img src="@/assets/4.jpg" class="d-block w-100" alt="...">
                        </div> -->
                        <div class="carousel-item">
                            <img src="@/assets/5.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/6.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="formSide">
                <form action="" method="post" @submit.prevent="send">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" v-model="formItem.email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                     <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" v-model="formItem.name" class="form-control" id="exampleFormControlInput1" placeholder="John Doe">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Enter Message</label>
                        <textarea v-model="formItem.message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div>
                        <button type="submit" class="btn btnn btn-info"> <i class="fa fa-paper-plane" aria-hidden="true"></i> Send</button>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios';
export default {
    data(){
        return{
            formItem:{
                email: '',
                name: '',
                message: ''
            }
        }
    },
    methods:{
        send(){
            axios.post('https://dycodes-contact-default-rtdb.firebaseio.com/dycodes.json', this.formItem)
            .then((res) => {
                console.log(res);
                 Swal.fire({
                                text: 'Thank you',
                                icon: 'success',
                                target: '#custom-target',
                                customClass: {
                                  container: 'position-absolute'
                                },
                                toast: true,
                                position: 'center-top'
                              })
                      this.$router.go();
                })
                .catch((error) => {
                    console.log(error);
                    this.loading = false;
                    Swal.fire({
                                text: 'Something went wrong!',
                                icon: 'error',
                                target: '#custom-target',
                                customClass: {
                                  container: 'position-absolute'
                                },
                                toast: true,
                                position: 'center-top'
                              })
            });
            
                this.$router.go();
        }
    }
}
</script>

<style scoped>
.project-header {
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.2)
}
.imagss {
    width: 20rem;
    height: 40rem;
    position: relative;
    top: 2rem;
    left: 15rem;
}
.btnn {
    width: 100%;
    border-radius: 0px;
    padding: 0.3rem;
    font-size: 0.8rem;
}
.formSide {
    background: #fff;
    box-shadow: rgba(255, 255, 255, 0.2);
    position: absolute;
    left: 38rem;
    top: 20rem;
    padding: 2rem;
}
label {
    font-size: 0.7rem;
    color: #999 !important;
}
input::placeholder {
    font-size: 0.6rem;
    color: #999;
}

@media screen and (max-width: 992px) {
  .imagss {
    width: 13rem;
    height: 26rem;
    position: relative;
    top: 2rem;
    left: 3rem;
}
.formSide {
    background: #fff;
    box-shadow: rgba(255, 255, 255, 0.2);
    position: absolute;
    left: 18rem;
    top: 10rem;
    padding: 2rem;
}
}
@media screen and (max-width: 376px) {
  .imagss {
    /* width: 13rem;
    height: 26rem;
    margin-bottom: 1rem !important;
    position: static;
     */
    /* top: 2rem; */
    /* left: 0; */
    display: none;
}
.formSide {
    background: #fff;
    box-shadow: rgba(255, 255, 255, 0.2);
    position: static;
    /* left: 0; */
    /* top: 50rem; */
    padding: 2rem;
    margin-bottom: 2rem;
}
}
</style>