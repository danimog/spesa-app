<script setup>
  import { ref, watchEffect } from 'vue' // used for conditional rendering
  import firebase from 'firebase'
  
  const isLoggedIn = ref(true)
  // runs after firebase is initialized
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        isLoggedIn.value = true // if we have a user
      } else {
        isLoggedIn.value = false // if we do not
      }
  })
</script>


<template>
    <div v-if="isLoggedIn">
        Utente autenticato!
    </div>
    <div v-else>
        Vai alla pagina di login!
    </div>
    
</template>