const {Router} = require("express");
const { getTodo,saveTodo, updateToDo,deleteToDo,searchToDo } = require("../controllers/ToDoController");

const router = Router()

router.get('/', getTodo)
router.post('/save', saveTodo)
router.get('/search', searchToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)


module.exports = router;