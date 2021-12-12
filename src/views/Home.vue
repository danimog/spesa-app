<template>
  <SpesaCreate />
  <ListaSpesa />
</template>

<script>
import SpesaCreate from '../components/SpesaCreate.vue'
import ListaSpesa from '../components/ListaSpesa.vue'

export default {
  name: 'Home',
  components: { SpesaCreate, ListaSpesa }
}
</script>

