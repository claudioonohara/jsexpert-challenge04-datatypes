import User from './User.js';

// TODO: Criar um Symbol para a propriedade privada 'kUsers'
const kUsers = Symbol('kUsers');

class Users {
  constructor() {
    // TODO: inicializar a propriedade privada 'kData' como uma estrutura importante vista no curso
    this[kUsers] = new Set();
  }

  add(userRaw) {
    const user = new User(userRaw);
    // TODO: inserir valor na estrutura escolhida.
    this[kUsers].add(user)
  }

  hasUsers() {
    // TODO: Como saber se tem informação dentro da estrutura escolhida?
    return this[kUsers].size;
  }

  // TODO: Me parece que o objeto gerado precisa ser iterável 🤔
  *[Symbol.iterator]() {
    const users = Array.from(this[kUsers])
    for (const user of users) {
      yield user
    }
  }  
}

export default Users;
