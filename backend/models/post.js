const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Post = sequelize.define('post', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    desc: {type: DataTypes.STRING, default: ""},
    image: {type: DataTypes.STRING},
});


module.exports = Post
