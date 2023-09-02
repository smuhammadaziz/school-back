const {fetch,fetchOne} = require("../../utils/pg")

const  pupiladd = "insert into pupils(name, l_name, age, congrolutation, descr, photo, user_id)values($1, $2, $3, $4, $5, $6,$7)"
const pupiledit = 'update pupils  set updated_at = current_timestamp, name=$1, l_name = $2, age = $3, congrolutation= $4, descr= $5, photo= $6 where pupil_id = $7'
const deleteid = 'Delete from pupils WHERE pupil_id = $1'
const pupilget = 'select * from pupils where user_id =$1'
const getbyid = 'select * from pupils where pupil_id = $1'
const getbybestusers = 'SELECT u.name,u.l_name,u.number,u.letter,c.l_name, c.name, c.descr,c.congrolutation,c.photo,c.created_at from pupils as c INNER JOIN users as u ON c.user_id = u.user_id WHERE  u.user_id = c.user_id and c.congrolutation = true;'
// const checknumandlet = "SELECT class_id FROM class WHERE number = $1 AND letter = $2"

const addpupil = (name, l_name, age, congr, descr, photo,user_id) => fetchOne(pupiladd, name, l_name, age,congr,descr, photo, user_id)
const editpupil = (name, l_name, age, congr, descr, photo,id) => fetchOne(pupiledit, name, l_name, age, congr, descr, photo,id)
const iddelete = (id) => fetchOne(deleteid, id)
const getpupil = (id) => fetch(pupilget, id)
const idgetby = (id) => fetch(getbyid, id)
const bestuserby = () => fetch(getbybestusers)
// const findbyemail  = (email) =>fetchOne(byemail,email)
// const numletcheck = (num, lett) => fetchOne(checknumandlet, num, lett)


module.exports = {addpupil, editpupil, iddelete, getpupil,idgetby,bestuserby}