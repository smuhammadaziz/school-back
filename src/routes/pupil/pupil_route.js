const {Router} = require("express")
const routes = Router()
const {CheckRole} = require("../../middlewares/check-role-middleware")
const {isAuth} = require("../../middlewares/isAuth-middleware")

const {addPupil,EditPupil,DeletePupil,Getpupils,Getpupilbyid,GetBestuser} =require("../../controller/for_users/pupil/pupils")


routes
.post("/add/pupil", isAuth, CheckRole("teacher"), addPupil)
.put("/edit/pupil/:id",isAuth,CheckRole("teacher"),EditPupil)
.delete("/delete/pupil/:id",isAuth,CheckRole("teacher"), DeletePupil)
.get("/get/pupils",isAuth,Getpupils)
.get("/get/pupils/:id",isAuth,Getpupilbyid)
.get("/get/best/users", GetBestuser)

module.exports= 
    routes
