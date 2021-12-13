<template>
    <div>
        <hr class="mt-10">

        <table class="table-fixed mx-auto border w-full max-w-sm">
            <thead>
            <tr>
                <th class="w-1/10 px-4 py-2 border" scope="col" > </th>
                <th class="w-1/5 px-4 py-2 border" scope="col">Categoria</th>
                <th class="w-1/5 px-4 py-2 border" scope="col">Prodotto</th>
                <th class="w-1/5 px-4 py-2 border" scope="col">Quantità</th>
                <th class="w-1/5 px-4 py-2 border" scope="col">Note</th>
                <th class="w-1/10 px-4 py-2 border" scope="col" > </th>
                <!-- <th class="w-1/20 px-4 py-2 border" scope="col" >X</th> -->

            </tr>
            </thead>
            <tbody>
                <tr :class="{done: done}" v-for="{ id, categoria, prodotto, qta, note, done } in lista" :key="id">
                    <td class="border">
                        <button class="btn" @click="checkDone(id)">
                            <span v-if="done"> ✅ </span>
                            <span v-else> ⭕️ </span>
                        </button>
                        <!-- <input type="checkbox" :id="id" v-model="toggle" true-value="yes" false-value="no" @change="checkDone(id)"> -->
                       
                    </td>
                    <td class="border">{{ categoria }}</td>
                    <td class="border">{{ prodotto }}</td>
                    <td class="border">{{ qta }}</td>
                    <td class="border">{{ note }}</td>
                    <td class="border">
                        <!--router-link :to="`/edit/${id}`">
                            <button class="btn btn-primary btn-sm me-2">✏️</button>
                        </router-link-->
                        <button class="btn btn-danger btn-sm" @click="deleteListaSpesa(id)">❌</button>
                    </td>
                    <!-- <td>
                        <span v-if="done">X</span>
                        <span v-else>O</span>
                    </td> -->
                </tr>
            </tbody>
      </table>

    </div>
</template>

<script>

import { useLoadListaSpesa, deleteListaSpesa, getListaSpesa, updateListaSpesa } from "../firebase"

export default {
    setup () {
        const lista = useLoadListaSpesa()

        function checkDone(id){
            const rigaSpesa = getListaSpesa(id).then((result) => {
                result.done = !result.done;
                updateListaSpesa(id, result.done)
            });
        }

        return { lista, deleteListaSpesa, checkDone}
    }
}
</script>

<style scoped>
.done{
    background-color: darkgreen;
    color: whitesmoke;
}
</style>