const {fetch,fetchOne} = require("../../utils/pg");

const newadd = "insert into course(title, descr, photo)values($1, $2, $3)"
const courseedit = 'update course  set updated_at = current_timestamp, title=$1, descr = $2, photo = $3 where  id = $4'
const getcourse = 'select * from course'
const getcoursebyid = 'select * from course where id = $1'
const deletecourse = 'delete from course where id = $1'


const addnew  =(title, descr, imageLink) => fetchOne(newadd, title, descr, imageLink)
const editcourse = (title, descr, ImageLink, id) => fetchOne(courseedit, title, descr, ImageLink, id)
const courseget = () => fetch(getcourse)
const byidgetcourse = (id) => fetchOne(getcoursebyid, id)
const coursedelete = (id) => fetchOne(deletecourse, id)


module.exports = {addnew, editcourse, courseget, byidgetcourse, coursedelete};