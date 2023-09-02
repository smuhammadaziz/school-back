const {fetch,fetchOne} = require("../../utils/pg");

const sideadd = "insert into side(title, description, photo)values($1, $2, $3)"
const sideedit = 'update side  set updated_at = current_timestamp, title=$1, description = $2, photo = $3 where  side_id = $4'
const getside = 'select * from side'
const deleteside = 'delete from side where side_id = $1'

const addSide  =(title, descr, path) => fetchOne(sideadd, title, descr, path)
const editside = (title, descr, ImageLink, id) => fetchOne(sideedit, title, descr, ImageLink, id)
const sideget = () => fetch(getside)
const sidedelete = (id) => fetchOne(deleteside, id)

module.exports = {addSide, editside, sideget, sidedelete};