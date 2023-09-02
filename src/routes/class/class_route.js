const {Router} = require("express")
const routes = Router()
const {CheckRole} = require("../../middlewares/check-role-middleware")
const {isAuth} = require("../../middlewares/isAuth-middleware")

const {AddClass,ClassCount,Editclass} = require("../../controller/for_admin/class/class")

routes
.post('/add/class',isAuth,CheckRole("superadmin"), AddClass)
.get("/get/classes", ClassCount)
.put("/edit/class/:id", isAuth, CheckRole("superadmin"), Editclass)

module.exports = 
    routes
