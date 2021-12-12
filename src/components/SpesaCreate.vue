<script>
import { creaListaSpesa } from '../firebase';
import { ref, reactive } from 'vue';

export default{
    setup(){
        const form = reactive({'categoria':'', 'prodotto':'', 'qta':'', 'note':'','done':false,'data':Date()})
        const onSubmit = async () => {
            await creaListaSpesa({...form})
            form.categoria = '',
            form.prodotto = '',
            form.qta = ''
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
    <div class="w-full max-w-lg">
        <form @submit.prevent="onSubmit">
            <div class="flex flex-wrap mb-6 w-full">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="categoria">Categoria</label>
                <select class="w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="form.categoria" name="categoria">
                    <option v-for="option in options" :key="option.value" :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>
            <div>
                <label class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mr-5" for="prodotto">Prodotto</label>
                <input class="w-full md:w-1/2 px-3 mb-6 md:mb-0 bg-blue-200 my-3" type="text" id="prodotto" v-model="form.prodotto">
            </div>
            <div>
                <label class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mr-5" for="qta">Quantità</label>
                <input class="w-full md:w-1/2 px-3 mb-6 md:mb-0 bg-blue-200 my-3" type="text" id="qta" v-model="form.qta">
            </div>
            <div>
                <label class="w-full md:w-1/2 px-3 mb-6 md:mb-0 mr-5" for="note">Note</label>
                <input class="w-full md:w-1/2 px-3 mb-6 md:mb-0 bg-blue-200 my-3" type="text" id="note" v-model="form.note">
            </div>
            <div>
                <button class="rounded-full bg-red-500 text-white p-2">Invia</button>
            </div>
        </form>
    </div>
</template>