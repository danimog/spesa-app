import firebase from "firebase";
import "firebase/firestore";
import {ref, onUnmounted} from 'vue';

const firebaseConfig = {
    apiKey: "AIzaSyDnkjMsxPoC5t2P25PJ0SUNp8lqkdCBiZg",
    authDomain: "spesa-app-d7860.firebaseapp.com",
    projectId: "spesa-app-d7860",
    storageBucket: "spesa-app-d7860.appspot.com",
    messagingSenderId: "248256563884",
    appId: "1:248256563884:web:c919d7b007adff90822d09"
  };

const done = ref('false');

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const spesaCollection = db.collection('listaspesa');

export const creaListaSpesa = lista => {
    return spesaCollection.add(lista);
}

export const getListaSpesa = async id => {
    const lista = await spesaCollection.doc(id).get()
    return lista.exists ? lista.data() : null
}

export const updateListaSpesa = (id, done) => {
    return spesaCollection.doc(id).update({done: done})
}

export const deleteListaSpesa = id => {
    return spesaCollection.doc(id).delete() 
}

export const useLoadListaSpesa = () => {
    const lista = ref([])
    const close = spesaCollection.orderBy('done', 'asc').onSnapshot(snapshot => {
        lista.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return lista
}
