const Post = require('../models/post')

class PostController {
    async createPost(req, res, next) {
        try {
            let info = {
                image: req.file.path,
                title: req.body.title,
                desc: req.body.desc,
                userId: req.body.userId
            }

            const post = await Post.create(info)
            console.log(post)
            return res.json({post})
        }catch (e){
            next(e)
        }
    }

    async getAllPosts(req, res, next) {
        try {
            let post = await Post.findAll({})
            return res.json({post})
        }catch (e){
            next(e)
        }
    }

    async getOnePost(req, res, next) {
        try {
            let id = req.params.id
            let post = await Post.findOne({ where: { id: id }} )
            return res.json({post})
        }catch (e){
            next(e)
        }
    }

    async updatePost(req, res, next) {
        try {
            let id = req.params.id
            const post = await Post.update(req.body, { where: { id: id }})
            return res.json({post})
        }catch (e){
            next(e)
        }
    }

    async deletePost(req, res, next) {

        try {
            let id = req.params.id
            await Post.destroy({ where: { id: id }} )
            return res.json('Product is deleted !')
        }catch (e){
            next(e)
        }
    }
}

module.exports = new PostController()