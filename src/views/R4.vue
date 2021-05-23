<template>
  <div class="container">
      <table class="table">
        <!-- Encabezado -->
        <thead>
            <tr>
                <th>
                    <div>
                        <p>Country</p>
                        <ion-icon name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
                <th>
                    <div>
                        <p>Name</p>
                        <ion-icon name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
                <th>
                    <div>
                        <p>Region</p>
                        <ion-icon name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
                <th>
                    <div>
                        <p>temperature</p>
                        <ion-icon name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
                <th>
                    <div>
                        <p>Wind speed</p>
                        <ion-icon name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
                <th>
                    <div>
                        <p>Wind direction</p>
                        <ion-icon name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <!-- Cuerpo de la tabla -->
            <!-- <tr class="row" v-for="(dato,index) in datos" :key="dato.id" :index="index" :class="{'row2': index%2==0}"> -->
            <tr>
                <td>{{datos.location.country}}</td>
                <td>{{datos.location.name}}</td>
                <td>{{datos.location.region}}</td>
                <td>{{datos.current.temperature}}</td>
                <td>{{datos.current.wind_speed}}</td>
                <td>{{datos.current.wind_dir}}</td>
            </tr>
        </tbody>
          
      </table>
  </div>
</template>

<script>
import { onMounted, ref} from 'vue'
import axios from 'axios'
export default {

    setup(){
        onMounted(() => {
            getApi(params)
            // getApi(params2)
            // getApi(params3)

        })

        const datos = ref({
            location:{ country: '', name: '', region: ''},
            current:{temperatura: '', wind_speed: '', wind_dir: ''}
        })

        const params = {
            access_key : '2d532daf05fa6a53f6c3c5906b37ceec',
            query : 'london',
        }
        // const params2 = {
        //     access_key : '2d532daf05fa6a53f6c3c5906b37ceec',
        //     query : 'Argentina',
        // }
        // const params3 = {
        //     access_key : '2d532daf05fa6a53f6c3c5906b37ceec',
        //     query : 'New York',
        // }  

        const getApi = (params) => {
            axios.get(`http://api.weatherstack.com/current`,{params})
                .then( response => {
                    console.log(response)
                    datos.value = response.data
                    console.log(datos.value)
                })
                .catch(error => {
                    console.log(error)
                })   
        }

        return{
            datos
        }
    },

}
</script>

<style scoped>
.container{
  width: 80%;
  margin: auto;
}

@media (max-width: 768px) {
  .container{
    width: 95%;
  }
}

.table {
    width: 100%;
    border-spacing: unset;
    border: 1px solid #808080;
}

.table tr th {
    width: 150px;
    border: 1px solid #808080;
    padding: 0px 10px;
    text-align: start;
}

.table th div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.row2{
    background-color: #dedede;
}

td {
    padding: 10px;
    border: 1px solid #808080;
}

ion-icon {
    cursor: pointer;
}
</style>