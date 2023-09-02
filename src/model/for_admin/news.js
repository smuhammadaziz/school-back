const {fetch,fetchOne} = require("../../utils/pg");

const newadd = "insert into news(title, descr, photo)values($1, $2, $3)"
const newsedit = 'update news  set updated_at = current_timestamp, title=$1, descr = $2, photo = $3 where  id = $4'
const getnews = 'select * from news'
const getnewsbyid = 'select * from news where id = $1'
const deletenews = 'delete from news where id = $1'


const addnew  =(title, descr, imageLink) => fetchOne(newadd, title, descr, imageLink)
const editnews = (title, descr, ImageLink, id) => fetchOne(newsedit, title, descr, ImageLink, id)
const newsget = () => fetch(getnews)
const byidgetnews = (id) => fetchOne(getnewsbyid, id)
const newsdelete = (id) => fetchOne(deletenews, id)


module.exports = {addnew, editnews, newsget, byidgetnews, newsdelete};