const Auth = require("./auth/login_route")
const Class = require("./class/class_route")
const News = require("./news/news_route")
const Pupil = require("./pupil/pupil_route")
const Side = require("./side/side_route")
const Users = require("./users/users_route")
const Statistika = require("./statistik/statistik")
const Course = require("./course/course_route")


module.exports = [
    Auth,
    Class,
    News,
    Pupil,
    Side,
    Users,
    Statistika,
    Course
]









// const {Router} = require("express")
// const routes = Router()
// const {CheckRole} = require("../middlewares/check-role-middleware")
// const {isAuth} = require("../middlewares/isAuth-middleware")
// const {loginU} = require("../controller/auth/login")
// const {AddClass,ClassCount} = require("../controller/for_admin/class/class")
// const {addUser} = require("../controller/for_admin/users/users")
// const {addSide,Deleteside,EditSide,getside} = require("../controller/for_admin/side/side")
// const {addNews,EditNews,getNews,getNewsbyid, DeleteNews} = require("../controller/for_admin/news/news")
// const {addPupil,EditPupil,DeletePupil,Getpupils,Getpupilbyid} =require("../controller/for_users/pupil/pupils")



// routes
// .post('/login', loginU)
// .post('/add/class', AddClass)
// .get("/count/classes", ClassCount)
// .post("/add/users",addUser)
// .post("/add/side",addSide)
// .delete("/delete/side/:id",Deleteside)
// .put("/edit/side/:id", EditSide)
// .get("/get/side", getside)


// .post("/add/pupil", isAuth, CheckRole("teacher"), addPupil)
// .put("/edit/pupil/:id",isAuth,CheckRole("teacher"),EditPupil)
// .delete("/delete/pupil/:id",isAuth,CheckRole("teacher"), DeletePupil)
// .get("/get/pupils",isAuth,Getpupils)
// .get("/get/pupils/:id",isAuth,Getpupilbyid)

// .post("/add/news", isAuth,CheckRole("superadmin","direktor","zauch"),addNews)
// .put("/edit/news/:id",isAuth,CheckRole("superadmin","direktor","zauch"),EditNews)
// .get("/get/news",getNews)
// .get("/get/news/:id", getNewsbyid)
// .delete("/delete/news/:id",isAuth,CheckRole("superadmin","zamdirektor","zauch"), DeleteNews)




// module.exports = {routes}


