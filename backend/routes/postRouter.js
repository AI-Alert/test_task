const Router = require("express")
const router = new Router()
const postController = require('../controllers/postController')

router.get('/',  postController.getAllPosts)
router.get('/:id',  postController.getOnePost)
router.post('/:id', postController.createPost)
router.put('/:id', postController.updatePost)
router.delete('/:id', postController.deletePost)

module.exports = router