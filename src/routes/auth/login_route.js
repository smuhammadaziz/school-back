const {Router} = require("express")
const routes = Router()
const {CheckRole} = require("../../middlewares/check-role-middleware")
const {isAuth} = require("../../middlewares/isAuth-middleware")
const {loginU} = require("../../controller/auth/login")



routes
.post('/login', loginU)



module.exports = routes