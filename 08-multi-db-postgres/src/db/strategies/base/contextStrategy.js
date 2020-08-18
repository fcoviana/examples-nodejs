const ICrud = require('../interfaces/intefaceCrud');

class ContextStrategy extends ICrud {
    constructor(strategy) {
        super(),
        this._database = strategy
    }

    create(item) {
        return this._database.create(item);
    }

    read(item) {
        return this._database.read(item);
    }

    update(id, item) {
        return this._database.update(id, item);
    }

    delete(id) {
        return this._database.update(id);
    }

    isConnected() { 
        return this._database.isConnected();
    }
}

module.exports = ContextStrategy;