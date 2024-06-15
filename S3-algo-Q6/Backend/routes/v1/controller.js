const Test = require('../../service/test')

class ContentController {
    constructor() {
        this.test = new Test()
    }

    getUserById = (req, res) => {
        let payload = {
            _id: req.params.id,
            // userData: req.body,
        };
        this.test.getUserById(payload).then((result) => {
            return res.status(200).json(result);
        })
            .catch((err) => {
                return res.status(500).json(err);
            });

    }

    updateUserById = (req, res) => {
        let payload = {
            _id: req.params.id,
            userData: req.body
        };
        this.test.updateUserById(payload).then((result) => {
            return res.status(200).json(result);
        })
            .catch((err) => {
                return res.status(500).json(err);
            });

    }

}

module.exports = ContentController;
