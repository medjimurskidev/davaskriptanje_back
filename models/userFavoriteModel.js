const Sequelize = require('sequelize');
const db = require('../config/database')

const UserFavorite = db.define('userFavorites', {
    user_to_subscribed_id: {
        type: Sequelize.STRING
        },
    user_id: {
        type: Sequelize.STRING
        },
    createdAt: {
            type: Sequelize.DATE
          }
        },
        {
            timestamps: false
        })
        
db.sync();
  module.exports=  UserFavorite