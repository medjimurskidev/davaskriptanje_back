const Sequelize = require('sequelize');
const db = require('../config/database')

const Game = db.define('game', {
    game_src: {
        type: Sequelize.STRING
        }
        },
        {
            timestamps: false
        })
        
db.sync();
  module.exports=  Game