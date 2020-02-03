const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../config/database')

const GameFavorite = db.define('gameFavorites', {
    game_id: {
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
  module.exports=  GameFavorite