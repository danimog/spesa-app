import {db} from "../main";

const datab = db.collection("/listaspesa");

class ListaSpesaService {
  getAll() {
    return datab;
  }

  create(listaspesa) {
    return datab.add(listaspesa);
  }

  update(id, value) {
    return datab.doc(id).update(value);
  }

  delete(id) {
    return datab.doc(id).delete();
  }
}

export default new ListaSpesaService();
