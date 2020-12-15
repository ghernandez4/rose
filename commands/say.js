const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'say',
    description: "repeats you",
    execute(message, args){
        const sayMsg = args.join(' ');
        if (!args.length) {
            message.channel.send('i need more arguments than that silly! what do you want me to say?');
            return
        }
        message.delete();
        console.log('said ' + args)
        message.channel.send(sayMsg);
    }
}