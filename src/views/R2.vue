<template>
  <div>
      <table class="table">
        <thead>
            
            <tr>
                <th>id <ion-icon name="swap-vertical-outline"></ion-icon> </th>
                <th>Nombre <ion-icon name="swap-vertical-outline"></ion-icon> </th>
                <th>telefono <ion-icon name="swap-vertical-outline"></ion-icon> </th>
                <th>correo <ion-icon name="swap-vertical-outline"></ion-icon> </th>
                <th>dni <ion-icon name="swap-vertical-outline"></ion-icon> </th>
                <th>codigo <ion-icon name="swap-vertical-outline"></ion-icon> </th>
            </tr>
        </thead>
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
export default {
    setup(){
        const datos = [
            {id: '1', nombre:'Mauricio Ferreyra', telefono: 3624624287, correo: 'mauricioferreyra548@gmail.com', dni: 40912096, codigo: 135},
            {id: '2', nombre:'Jose Alberto', telefono: 3624231233, correo: 'alberto@gmail.com', dni: 3215485, codigo: 148},
            {id: '3', nombre:'Luis rizzoli', telefono: 3624213254, correo: 'luisRizzoli@gmail.com', dni: 40912097, codigo: 152},
            {id: '4', nombre:'Emanuel Fleitas', telefono: 3624132548, correo: 'emanuelFleitas@gmail.com', dni: 45321254, codigo: 187},
            {id: '5', nombre:'Marcos Barrios', telefono: 3624858578, correo: 'barrios@gmail.com', dni: 40656585, codigo: 251},
            {id: '6', nombre:'Lucia Ramirez', telefono: 3624112254, correo: 'ramirez@gmail.com', dni: 40912052, codigo: 235},
            {id: '7', nombre:'Jhonatan Gonzales', telefono: 3624554854, correo: 'jony@gmail.com', dni: 42065123, codigo: 223},
            {id: '8', nombre:'Clara Valenzuela', telefono: 362445586, correo: 'clara@gmail.com', dni: 40912553, codigo: 302},
            {id: '9', nombre:'Jorge Rojas', telefono: 3624417414, correo: 'jorge@gmail.com', dni: 40915523, codigo: 350},
        ]

        return{
            datos
        }
    }
}
</script>

<style scoped>
.table {
    width: 100%;
    border-spacing: unset;
    border: 1px solid #808080;
}

.table tr th {
    width: 150px;
    border: 1px solid #808080;
    text-align: start;
}

/* .table th {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
} */

/* .row {
} */

.row2{
    background-color: #dedede;
}

th, td {
    padding: 10px;
    border: 1px solid #808080;
}
</style>