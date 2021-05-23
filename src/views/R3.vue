<template>
    <div class="container_principal">
        <div class="container">
            <!-- Imagen -->
            <div class="w-45">
                <div class="container_img">
                    <img src="../assets/warrior.jpg" alt="">
                    <a href="#openModal">
                        <ion-icon name="play-circle-outline"></ion-icon>
                    </a>
                </div>
            </div>

            <!-- Texto -->
            <div class="container_text">
                <h1>Give the world the answer they need, become a Supernatural Partner today.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi molestiae animi, maiores ducimus facere beatae quia non minima quod excepturi ipsa voluptate ad doloremque eveniet dolorum quaerat odio quam mollitia exercitationem cupiditate accusantium provident ab! Non maxime ducimus maiores! Vel, nam. Molestiae error quod cupiditate reprehenderit fuga, laborum maxime odit necessitatibus pariatur, labore culpa suscipit?</p>
            </div>
        </div>

        <!-- Ventana Modal -->
        <div id="openModal" class="modal">
            <div>
                <a @click="play" href="#close" title="Close" class="close">X</a>
                <video controls src="../assets/Warriors_Season.mp4" width="470" height="350"></video>
            </div>
        </div>
    
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>

/* CSS de icono de ionicon */
ion-icon{
    position: absolute;
    cursor: pointer;
    left: 40%;
    top: 30%;
    font-size: 7rem;
    color: rgba(0,0,0,0.7);
}

ion-icon:hover{
    color: rgba(173,173,173,0.67);
}

/* ****************************************************** */
/* Css de contenedores */
.container{
    display: flex;
    align-items: center;
    width: 90%;
    margin: auto;
    margin-top: 25px;
}

.container_text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 30px;
}

.container_img {
    display: inline-block;
    position: relative;
}

p {
    color: #4e4e4e;
}

/* ******************************************************** */
/* Css De ventana modal */
.modal {
    position:fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 99999;
    opacity: 0;
    -webkit-transition: opacity 400ms ease-in;
	-moz-transition: opacity 400ms ease-in;
	transition: opacity 400ms ease-in;
	pointer-events: none;
}

.modal:target{
    opacity: 1;
    pointer-events: auto;
}

.modal div {
    width: 500px;
    position: relative;
    margin: 10% auto;
    padding: 5px 20px 13px 20px;
    background-color: #fff;
}

.modal div video {
    width: 100%;
    margin: 0;
}

/* Boton close de modal */
.close {
    background-color: #606061;
    color: #fff;
    line-height: 25px;
    position: absolute;
    right: 2px;
    text-align: center;
    top: 0px;
    padding: 0 5px;
    text-decoration: none;
	font-weight: bold;
	border-radius: 10px;
	box-shadow: 1px 1px 3px #000;
    z-index: 1;
}

/* ************************************************************* */

/* Resolución de tablet 768px */
@media (max-width:768px){
    .container{
        flex-direction: column;
        align-content: center;
        align-items: center;
    }
}

/* Resolución de mobile 425px */
@media (max-width: 425px) {
    .container{
        width: 100%;
    }

    .container_img img{
        width: 100%;
    }

    .modal div {
        width: 100%;
        padding: 0;
    }
}
</style>