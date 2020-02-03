const Sequelize = require('sequelize');
const db = require('../config/database')

const Avatar = db.define('avatar', {
    image_src: {
        type: Sequelize.STRING
        },
    user_id: {
        type: Sequelize.STRING
        }
        },
        {
            timestamps: false
        })
        
db.sync();
  module.exports=  Avatar