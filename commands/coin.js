const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'coin',
    description: "RaNDoM",
    execute(message, args){
        if (Math.floor((Math.random() * 2)) === 0) {
            var coinRes = 'Heads'
        } else {
            var coinRes = 'Tails'
        }
        message.channel.send(coinRes + '!');
    }
}