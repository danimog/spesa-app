<script setup>
  import { ref } from 'vue'
  import firebase from 'firebase'
  import { useRouter } from 'vue-router' // import router
  const email = ref('')
  const password = ref('')
  const router = useRouter() // get a reference to our vue router
  const signIn = () => { // we also renamed this method
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
      .then((data) => {
        console.log('Successfully logged in!');
        router.push('/Logged') // redirect alla pagina loggato
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = 'Indirizzo email non valido!'
              break
          case 'auth/user-not-found':
              errMsg.value = 'Nessun account trovato con questa email!'
              break
          case 'auth/wrong-password':
              errMsg.value = 'Password sbagliata!'
              break
          default:
              errMsg.value = 'Email o password errate..'
              break
        }
      });
  }
</script>

<template>

<hr class="my-4" />

<h1 class="my-5">Ciao 👋🏼</h1>

<!-- <div class="p-6 max-w-md mx-auto bg-blue-200 rounded-xl shadow-md flex items-center space-x-4">
  
    <div class="grid grid-flow-col auto-cols-max">
      <label for="email">Email </label>
      <input type="text" name="email" v-model="email" />
    </div>
    <div class="grid grid-flow-col auto-cols-max">
      <label for="password">Password </label>
      <input type="password" name="password" v-model="password" />
    </div>
    <div class="grid grid-flow-col auto-cols-max">
      
      <button @click="signIn" class="w-50 p-3 flex items-center justify-center rounded-md bg-blue-700 text-white ring-0" type="submit">Login</button>
    </div>    
</div> -->

<div class="w-full max-w-sm p-6 bg-blue-200 rounded-md mx-auto">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
        Email
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-300" id="email" type="text" v-model="email">
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="password">
        Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-300" id="password" type="password" v-model="password">
    </div>
  </div>
 
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button @click="signIn" class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Login
      </button>
    </div>
  </div>
</div>


</template>