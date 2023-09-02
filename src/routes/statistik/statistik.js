const {Router} = require("express")
const routes = Router()

const {Statistika} = require("../../controller/for_users/statistik/statistik")

routes
.get("/get/statistik",Statistika)


module.exports = 
    routes
