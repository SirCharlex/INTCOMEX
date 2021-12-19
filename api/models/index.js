const { Sequelize } = require("sequelize")
const {db_user, db_pass, db_host, db_name} = require('../config')
const userFactory = require('./User')

const sequelize = new Sequelize(`postgres://${db_user}:${db_pass}@${db_host}/${db_name}`)

const User = userFactory(sequelize)

module.exports ={
    conn: sequelize,
    User,
}