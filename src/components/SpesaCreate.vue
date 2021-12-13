<script>
import { creaListaSpesa } from '../firebase';
import { ref, reactive } from 'vue';

export default{
    setup(){
        const form = reactive({'categoria':'', 'prodotto':'', 'qta':'', 'note':'','done':false,'data':Date()})
        const onSubmit = async () => {
            if ((form.qta != '') && (form.prodotto != '')){
                await creaListaSpesa({...form})
                form.categoria = '',
                form.prodotto = '',
                form.qta = ''
            } else{
                alert('Compila tutti i campi!')
            }

        }
        const options = [
            { text: 'Frutta', value: 'Frutta' },
            { text: 'Verdura', value: 'Verdura' },
            { text: 'Formaggi', value: 'Formaggi' }
        ];
        return {form, onSubmit, options}
    }
}

</script>

<template>
    <div class="w-full max-w-sm mx-auto">
        <form @submit.prevent="onSubmit">
            <div class="flex flex-wrap mb-1 w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="categoria">Categoria</label>
                <select class="w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="form.categoria" name="categoria">
                    <option v-for="option in options" :key="option.value" :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>
            <div class="flex flex-wrap mb-1 w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="prodotto">Prodotto..</label>
                <input class="w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="prodotto" id="prodotto" v-model="form.prodotto">
            </div>
            <div class="flex flex-wrap mb-1 w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="qta">Quantità</label>
                <input class="w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="qta" v-model="form.qta">
            </div>
            <div class="flex flex-wrap mb-1 w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="note">Note</label>
                <input class="w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="note" v-model="form.note">
            </div>
            <div class="flex flex-wrap mb-1 w-full">
                <button class="w-1/2 rounded-lg bg-red-500 text-white p-2 mx-auto">Invia</button>
            </div>
        </form>
    </div>
</template>