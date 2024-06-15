const express = require('express');
const bodyParser = require('body-parser')
// const NodeCache = require('node-cache');
require('../config/mongo');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.setup();
    }

    setup = () => {
        this.app.use(bodyParser.json({ limit: "50mb" }))
        this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
        this.app.use(cors({origin: true, credentials: true}));
        // this.app.use('cache', new NodeCache());
        
        const router = require('../routes/route');
        this.app.use('/', router);
    }

    run = (port) => {
        this.server = this.app.listen(port, () => {            
            console.log(`Server started. Listening on port ${port}`)
        });
    }


}
module.exports = Server;