const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'hello',
    description: "hi!",
    execute(message){
        message.channel.send('OOoOooOoOOo who are we saying hello to?');
    }
}