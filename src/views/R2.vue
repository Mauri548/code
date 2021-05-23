<template>
  <div class="container">
      <table class="table">
        <!-- Encabezado -->
        <thead>
            <tr>
                <th>
                    <div>
                        <p>Id</p>
                        <ion-icon @click="ordenar('id')" name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
                <th>
                    <div>
                        <p>Nombre</p>
                        <ion-icon @click="ordenar('nombre')" name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
                <th>
                    <div>
                        <p>Telefono</p>
                        <ion-icon @click="ordenar('telefono')" name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
                <th>
                    <div>
                        <p>Correo</p>
                        <ion-icon @click="ordenar('correo')" name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
                <th>
                    <div>
                        <p>Dni</p>
                        <ion-icon @click="ordenar('dni')" name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
                <th>
                    <div>
                        <p>Codigo</p>
                        <ion-icon @click="ordenar('codigo')" name="swap-vertical-outline"></ion-icon>
                    </div>
                </th>
            </tr>
        </thead>

        <!-- Cuerpo de la tabla -->
        <tbody>
            <tr class="row" v-for="(dato,index) in datos" :key="dato.id" :index="index" :class="{'row2': index%2==0}">
                <td>{{dato.id}}</td>
                <td>{{dato.nombre}}</td>
                <td>{{dato.telefono}}</td>
                <td>{{dato.correo}}</td>
                <td>{{dato.dni}}</td>
                <td>{{dato.codigo}}</td>
            </tr>
        </tbody>
          
      </table>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {

    setup(){
        const datos = ref([
            {id: '1', nombre:'Mauricio Ferreyra', telefono: 3624624287, correo: 'mauricioferreyra548@gmail.com', dni: 40912096, codigo: 135},
            {id: '2', nombre:'Jose Alberto', telefono: 3624231233, correo: 'alberto@gmail.com', dni: 3215485, codigo: 148},
            {id: '3', nombre:'Luis rizzoli', telefono: 3624213254, correo: 'luisRizzoli@gmail.com', dni: 40912097, codigo: 152},
            {id: '4', nombre:'Emanuel Fleitas', telefono: 3624132548, correo: 'emanuelFleitas@gmail.com', dni: 45321254, codigo: 187},
            {id: '5', nombre:'Marcos Barrios', telefono: 3624858578, correo: 'barrios@gmail.com', dni: 40656585, codigo: 251},
            {id: '6', nombre:'Lucia Ramirez', telefono: 3624112254, correo: 'ramirez@gmail.com', dni: 40912052, codigo: 235},
            {id: '7', nombre:'Jhonatan Gonzales', telefono: 3624554854, correo: 'jony@gmail.com', dni: 42065123, codigo: 223},
            {id: '8', nombre:'Clara Valenzuela', telefono: 3624455816, correo: 'clara@gmail.com', dni: 40912553, codigo: 302},
            {id: '9', nombre:'Jorge Rojas', telefono: 3624417414, correo: 'jorge@gmail.com', dni: 40915523, codigo: 350},
        ])

        // variable para cambiar el orden de la tabla
        const orden = ref(false) 

        // Funcion de ordenamiento por columna
        // Recibe un valor por parametro para saber por que elemento del arreglo del objeto vamos a ordenar
        const ordenar = (tipo) => {
            switch (tipo) {
                case 'id':
                    if (orden.value) {
                        datos.value.sort((a,b) => {
                            return parseInt(a.id) - parseInt(b.id)
                        })
                    } else {
                        datos.value.sort((a,b) => {
                            return parseInt(b.id) - parseInt(a.id)
                        })
                    }
                    break;

                case 'nombre': 
                    if (orden.value) {
                        datos.value.sort((a,b) => {
                            if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
                                return 1
                            }
                            if (a.nombre.toLowerCase() < b.nombre.toLowerCase() ) {
                                return -1
                            }
                            return 0
                        })
                    } else {
                        datos.value.sort((a,b) => {
                            if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
                                return 1
                            }
                            if (a.nombre.toLowerCase() > b.nombre.toLowerCase() ) {
                                return -1
                            }
                            return 0
                        })
                    }
                    break;

                case 'telefono':
                    if (orden.value) {
                        datos.value.sort((a,b) => {
                            return parseInt(a.telefono) - parseInt(b.telefono)
                        })
                    } else {
                        datos.value.sort((a,b) => {
                            return parseInt(b.telefono) - parseInt(a.telefono)
                        })
                    }
                    break;

                case 'correo':
                     if (orden.value) {
                        datos.value.sort((a,b) => {
                            if (a.correo.toLowerCase() > b.correo.toLowerCase()) {
                                return 1
                            }
                            if (a.correo.toLowerCase() < b.correo.toLowerCase()) {
                                return -1
                            }
                            return 0
                        })
                    } else {
                        datos.value.sort((a,b) => {
                            if (a.correo.toLowerCase() < b.correo.toLowerCase()) {
                                return 1
                            }
                            if (a.correo.toLowerCase() > b.correo.toLowerCase()) {
                                return -1
                            }
                            return 0
                        })
                    }
                    break;

                case 'dni':
                    if (orden.value) {
                        datos.value.sort((a,b) => {
                            return parseInt(a.dni) - parseInt(b.dni)
                        })
                    } else {
                        datos.value.sort((a,b) => {
                            return parseInt(b.dni) - parseInt(a.dni)
                        })
                    }
                    break;

                case 'codigo':
                    if (orden.value) {
                        datos.value.sort((a,b) => {
                            return parseInt(a.codigo) - parseInt(b.codigo)
                        })
                    } else {
                        datos.value.sort((a,b) => {
                            return parseInt(b.codigo) - parseInt(a.codigo)
                        })
                    }
                    break;

            }
            
            orden.value = !orden.value
        }

        return{
            datos,
            ordenar
        }
    }
}
</script>

<style scoped>
.container{
  width: 80%;
  margin: auto;
  margin-top: 25px;
  overflow-x: scroll;
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

@media (max-width: 768px) {
  .container{
    width: 95%;
  }
}
</style>