const {fetch,fetchOne} = require("../../utils/pg")

const  useradd = "insert into users(name, l_name, age, email, password, role, subject, number, letter,image,class_id)values($1, $2, $3, $4, $5, $6,$7, $8, $9,$10, $11)"
const byemail = "select * from users where email = $1"
const checknumandlet = "SELECT class_id FROM class WHERE number = $1 AND letter = $2"



const adduser = (name, l_name, age, email, password, role, subject, num, lett, path, class_id) => fetchOne(useradd, name, l_name, age, email, password, role, subject, num, lett,path, class_id)
const findbyemail  = (email) =>fetchOne(byemail,email)
const numletcheck = (num, lett) => fetchOne(checknumandlet, num, lett)


module.exports = {adduser, findbyemail, numletcheck}