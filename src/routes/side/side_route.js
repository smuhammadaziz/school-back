const {Router} = require("express")
const routes = Router()
const {CheckRole} = require("../../middlewares/check-role-middleware")
const {isAuth} = require("../../middlewares/isAuth-middleware")

const {addSide,Deleteside,EditSide,getside} = require("../../controller/for_admin/side/side")

routes
.post("/add/side",isAuth, CheckRole('direktor','superadmin'), addSide)
.delete("/delete/side/:id",isAuth,CheckRole('direktor','superadmin'),Deleteside)
.put("/edit/side/:id", isAuth,CheckRole('direktor','superadmin'),EditSide)
.get("/get/side", getside)

module.exports = routes