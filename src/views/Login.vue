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
<h1 style="color:red;">LOGIN</h1>
<h3>Ciao 👋🏼</h3>

<div class="p-6 max-w-md mx-auto bg-blue-200 rounded-xl shadow-md flex items-center space-x-4">
    <div>
        <label for="email">Email</label>
        <input type="text" name="email" v-model="email" />
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" />
    </div>
    <div>
        <!-- <button class="bg-red-300">Invia!</button> -->
        <button @click="signIn" class="flex items-center justify-center rounded-md bg-blue-700 text-white ring-0" type="submit">Login</button>

    </div>
</div>

</template>