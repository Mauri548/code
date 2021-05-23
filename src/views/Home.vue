<template>
  <div>
    <h1>Ejercicio Resueltos:</h1>
  </div>
  <div class="container">
    <div class="card">
      <p>Diseño de tabla con vista responsive para mobile, tablet y web con ordenamiendo por columna funcional.</p>
      <router-link class="button" :to="{name: 'R2'}">Ejercicio 1</router-link>
    </div>
    <div class="card">
      <p>Diseño del maquetado con reproductor de video al dar click en el centro de la imagen con vista responsive para mobile, tablet y web.</p>
      <router-link class="button" :to="{name: 'R3'}">Ejercicio 2</router-link>
    </div>
    <div class="card">
      <p>Diseño de tabla con vista responsive para mobile, tablet y web con datos consumidos por una API REST.</p>
      <router-link class="button" :to="{name: 'R4'}">Ejercicio 3</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

/* Contenedor Principal */
.container{
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 30px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin: 15px;
  box-shadow: 0px 0px 15px 5px #4444;
  border-radius: 25px;
}

.button{
  text-decoration: none;
  padding: 10px 50px;
  margin-top: 20px;
  background-color: hsl(322, 100%, 66%);
  color: #fff;
  font-weight: bolder;
  border-radius: 40px;
}

a:hover {
  background-color: hsl(322, 100%, 76%);
}

p {
  line-height: 22px;
}

h1 {
  text-align: center
}

/* *********************************************************** */
/* Responsibe para tablet */
@media (max-width: 768px) {
  .container{
    width: 100%;
    margin-top: 10px;
  }
}

/* Responsibe para mobile */
@media (max-width: 425px) {
  .container{
    flex-direction: column;
  }

  .card {
    width: 80%;
    margin: 15px auto;
  }
}

</style>