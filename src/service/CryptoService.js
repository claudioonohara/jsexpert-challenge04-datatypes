import Crypto from '../entity/Crypto.js';
import CryptoRepository from '../repository/CryptoRepository.js';

class CryptoService {
  constructor({ repository } = {}) {
    this.repository = repository || new CryptoRepository();
  }

  async *list() {
    // TODO: implementar generator que chama a repository fazendo a paginação
    let page = 1 
    let hasData = true
    while (hasData) {
      const resultObject = await this.repository.list(page) 
      if (resultObject.data.length > 0 ) {
        hasData = true
        const cryptos = resultObject.data
        const cryptosObjects = cryptos.map(c => new Crypto({...c}))
        page += 1
        yield cryptosObjects
      }
    }
  }
}

export default CryptoService;
