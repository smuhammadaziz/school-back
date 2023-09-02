const {Router} = require("express")
const routes = Router()
const {CheckRole} = require("../../middlewares/check-role-middleware")
const {isAuth} = require("../../middlewares/isAuth-middleware")

const {addNews,EditNews,getNews,getNewsbyid, DeleteNews} = require("../../controller/for_admin/news/news")


routes
.post("/add/news",isAuth, CheckRole( "superadmin") ,addNews)
.put("/edit/news/:id",isAuth, CheckRole("superadmin"), EditNews)
.get("/get/news",getNews)
.get("/get/news/:id", getNewsbyid)
.delete("/delete/news/:id",isAuth,CheckRole("superadmin"), DeleteNews)


module.exports = 
    routes
