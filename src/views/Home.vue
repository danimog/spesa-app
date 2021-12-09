<script setup>
import {ref} from 'vue'
import firebase from 'firebase'
const isLoggedIn = ref(true)

firebase.auth().onAuthStateChanged(function(user){
    if (user){
        isLoggedIn.value = true
    } else {
        isLoggedIn.value = false
    }
});

</script>

<template>
<hr class="my-4" />

<div class="container my-5">
    <h1>Spesa APP 🍷 🥩</h1>
</div>
<div v-if="isLoggedIn">
    sei loggato.. 😎
</div>
<div v-else>
    prima devi fare il login! 🙂
</div>
     
</template>