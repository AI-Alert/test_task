const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment_text: {type: DataTypes.STRING},
});


module.exports = Comment