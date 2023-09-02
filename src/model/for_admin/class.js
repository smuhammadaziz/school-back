const {fetch,fetchOne} = require("../../utils/pg");

const classadd = "insert into class(number, letter, descr)values($1, $2, $3)"
const allclass = "SELECT * FROM class" 
const classedit = 'update class  set updated_at = current_timestamp, number=$1, letter = $2, descr = $3 where  id = $4'
 


const addclass  =(num, lett, descr) => fetchOne(classadd, num, lett, descr)
const classall = ()=> fetch(allclass)
const editclass = (num, lett, descr) => fetchOne(classedit,num, lett, descr)

module.exports = {addclass,classall,editclass};