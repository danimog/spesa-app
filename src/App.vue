<script setup>
  // import { ref, watchEffect } from 'vue' // used for conditional rendering
  // import firebase from './firebase'
  // import { useRouter } from 'vue-router'
  
  // const router = useRouter()
  // const isLoggedIn = ref(true)
  
  // firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       isLoggedIn.value = true // if we have a user
  //     } else {
  //       isLoggedIn.value = false // if we do not
  //     }
  // })
  // const signOut = () => {
  //   firebase.auth().signOut()
  //   router.push('/')
  // }
</script>

 <template>
  <div>
    <!--nav>
      <router-link class="rounded-full bg-red-600 text-white p-3 mr-10" to="/"> Home </router-link>
      <span v-if="isLoggedIn">
        <button class="rounded-full bg-red-600 text-white p-3" @click="signOut">Logout</button>
      </span>
      <span v-else>
        <router-link class="rounded-full bg-red-600 text-white p-3" to="/login"> Login </router-link>
      </span>
    </nav-->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
