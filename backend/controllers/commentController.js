const Comment = require('../models/comment')

class CommentController {
    async createComment(req, res, next) {
        try {
            let info = {
                comment_text: req.body.comment_text
            }

            const comment = await Comment.create(info)
            console.log(comment)
            return res.json({comment})
        }catch (e){
            next(e)
        }
    }

    async getAllComments(req, res, next) {
        try {
            let comment = await Comment.findAll({})
            return res.json({comment})
        }catch (e){
            next(e)
        }
    }

    async getOneComment(req, res, next) {
        try {
            let id = req.params.id
            let comment = await Comment.findOne({ where: { id: id }} )
            return res.json({comment})
        }catch (e){
            next(e)
        }
    }

    async updateComment(req, res, next) {
        try {
            let id = req.params.id
            const comment = await Comment.update(req.body, { where: { id: id }})
            return res.json({comment})
        }catch (e){
            next(e)
        }
    }

    async deleteComment(req, res, next) {

        try {
            let id = req.params.id
            await Comment.destroy({ where: { id: id }} )
            return res.json('Comment is deleted !')
        }catch (e){
            next(e)
        }
    }
}

module.exports = new CommentController()