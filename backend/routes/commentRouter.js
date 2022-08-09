const Router = require("express")
const router = new Router()
const commentController = require('../controllers/commentController')

router.get('/comment',  commentController.getAllComments)
router.get('/comment/:id',  commentController.getOneComment)
router.post('/comment/:id', commentController.createComment)
router.put('/comment/:id', commentController.updateComment)
router.delete('/comment/:id', commentController.deleteComment)

module.exports = router