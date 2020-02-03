var Sequelize = require('sequelize');


var connection = new Sequelize('gametracker', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

var Article = connection.define('article', {
    title:{
        type: Sequelize.STRING 
    },
    body:{
        type: Sequelize.STRING 
    }
},
{
    timestamps: false
});

connection.sync();