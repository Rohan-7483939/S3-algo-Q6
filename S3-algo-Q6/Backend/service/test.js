const Mongo = require("./mongo/mongo");
let ObjectId = require('mongodb').ObjectID

class Test {
    constructor() {
        this.mongo = new Mongo();
    }

    getUserById = (payload) => {
        return new Promise((resolve, reject) => {
            console.log("Here payload here", payload)
            let query = { "_id": payload._id };
            this.mongo.findOne(query, 'test').then(result => {
                if (result && result.data) {
                    return resolve(result)
                }else{
                    return resolve({message: "data not found"})
                }
            })
        })
    }

    updateUserById = (payload) => {
        return new Promise((resolve, reject) => {
            let query = { "_id": payload._id };
            if(payload._created == undefined){
                payload['userData']['_created'] = new Date(Date.now() + (5 * 60 * 60 * 1000) + (30 * 60 * 1000))
            }
            this.mongo.update(query, payload.userData, 'test').then(result => {
                if (result) {
                    return resolve({ message: "Updated Successfully", result })
                } else {
                    return resolve({ message: "Cannot be updated" })
                }
            })
        })
    }
}

module.exports = Test;