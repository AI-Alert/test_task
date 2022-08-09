const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const Post = require('./post')
const Comment = require('./comment')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
});
User.hasMany(Post, { onDelete: "cascade" });
User.hasMany(Comment, { onDelete: "cascade" });




module.exports = User
