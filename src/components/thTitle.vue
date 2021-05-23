<template>
    <th>
        <div>
            <p>{{title}}</p>
            <ion-icon name="swap-vertical-outline"></ion-icon>
        </div>
    </th>
</template>

<script>
export default {
    props:{
        title: String
    }
}
</script>

<style scoped>
th {
    width: 150px;
    padding: 0px 10px;
    text-align: start;
    border: 1px solid #808080;
}

th div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>