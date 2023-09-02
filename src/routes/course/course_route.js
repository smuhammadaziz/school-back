const {Router} = require("express")
const routes = Router()
const {CheckRole} = require("../../middlewares/check-role-middleware")
const {isAuth} = require("../../middlewares/isAuth-middleware")

const {addcourse,Editcourse,getcourse,getcoursebyid, Deletecourse} = require("../../controller/for_admin/course/course")


routes
.post("/add/course",isAuth, CheckRole("superadmin") ,addcourse)
.put("/edit/course/:id",isAuth, CheckRole("superadmin"), Editcourse)
.get("/get/course",getcourse)
.get("/get/course/:id", getcoursebyid)
.delete("/delete/course/:id",isAuth,CheckRole("superadmin"), Deletecourse)

module.exports = 
    routes
