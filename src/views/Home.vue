<script setup>
    import {ref} from 'vue'
    import firebase from 'firebase'
    const isLoggedIn = ref(true)
   // import ListaSpesaService from '../services/ListaSpesaService'

    firebase.auth().onAuthStateChanged(function(user){
        if (user){
            isLoggedIn.value = true
        } else {
            isLoggedIn.value = false
        }
    });
</script>

<script>
    export default {
        data() {
            return {
                 spesa: {
                    categoria: '',
                    prodotto: '',
                    qta: '',
                 }
            }
        },
        methods: {
            onFormSubmit() { 
                // let mylistaspesa = {
                //     categoria: spesa.categoria,
                //     prodotto: spesa.prodotto,
                //     qta: spesa.qta
                // };

                // ListaSpesaService.create(mylistaspesa)
                // .then(() => {
                //     console.log("Dati inseriti su Firestore");
                //     this.submitted = true;
                // })
                // .catch(e => {
                //     console.log(e);
                // });

                alert(JSON.stringify(this.spesa)) 
            }
        }
    }
</script>

<template>
<hr class="my-4" />

<div class="container my-5">
    <h1>Spesa APP 🍷 🥩</h1>
</div>

<div v-if="isLoggedIn">
    sei loggato.. iniziamo! 😎
    <form @submit.prevent="onFormSubmit">
        <div>
            <label class="mr-5" for="categoria">Categoria</label>
            <input class="bg-blue-200 my-5" type="text" id="categoria" v-model="spesa.categoria">
        </div>
        <div>
            <label class="mr-5" for="prodotto">Prodotto</label>
            <input class="bg-blue-200 my-5" type="text" id="prodotto" v-model="spesa.prodotto">
        </div>
        <div>
            <label class="mr-5" for="qta">Quantità</label>
            <input class="bg-blue-200 my-5" type="text" id="qta" v-model="spesa.qta">
        </div>
        <div>
            <button class="rounded-full bg-red-500 text-white p-2">Invia</button>
        </div>
    </form>
</div>

<div v-else>
    prima devi fare il login! 🙂
</div>
     
</template>