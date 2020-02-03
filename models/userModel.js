const Sequelize = require('sequelize');
const db = require('../config/database')




const User = db.define('user', {
        username: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        is_active: {
            type: Sequelize.BOOLEAN
        },
        createdAt: {
            type: Sequelize.DATE
        }
    
        },
        {
            timestamps: false
        })


db.sync();


        

  module.exports=  User