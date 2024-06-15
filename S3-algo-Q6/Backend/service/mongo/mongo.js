const mongoose = require('mongoose');

class Mongo {
    constructor() { }


    add = (payload, modelName) => {
        let Model = mongoose.model(modelName)
        let model = new Model(payload);
        return new Promise((resolve, reject) => {
            model.save().then(result => {
                resolve({ data: result });
            }).catch(err => {
                reject(err);
            });
        });
    }

    update = (query, payload, modelName) => {
        let Model = mongoose.model(modelName);
        return new Promise((resolve, reject) => {
            Model.updateOne(query, payload).then(result => {
                resolve({ data: result });
            }).catch(err => {
                reject(err);
            });
        });
    }

    updateMany = (query, payload, modelName) => {
        let Model = mongoose.model(modelName);
        return new Promise((resolve, reject) => {
            Model.updateMany(query, payload).then(result => {
                resolve({ data: result });
            }).catch(err => {
                reject(err);
            });
        });
    }

    find = (query, modelName) => {
        let Model = mongoose.model(modelName);
        return new Promise((resolve, reject) => {
            Model.find(query).then(result => {
                resolve({ identifier: 'mongo', data: result });
            }).catch(err => {
                reject(err);
            });
        });
    }

    findCount = (query, modelName) => {
        let Model = mongoose.model(modelName);
        return new Promise((resolve, reject) => {
            Model.find(query).count().then(result => {
                resolve(result);
            }).catch(err => {
                reject({ error: err.message });
            });
        });
    }

    findOne = (query, modelName) => {
        let Model = mongoose.model(modelName);
        return new Promise((resolve, reject) => {
            Model.findOne(query).then(result => {
                resolve({ identifier: 'mongo', data: result });
            }).catch(err => {
                reject(err);
            });
        });
    }


    paginationFind = (query, skip, limit, modelName) => {
        let Model =  mongoose.model(modelName);
        return new Promise((resolve, reject) => {
            Model.find(query).skip(skip).limit(limit).then(result => {
                if (result.length == 0) {
                    resolve({ message: 'Data not found!!!!', data: result });
                } else {
                    resolve({ data: result });
                }
            }).catch(err => {
                reject({ message: 'Something went wrong', error: err });
            });
        });
    }

}
module.exports = Mongo;