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
        console.log(message.author);
    }
}



        const sayEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .addField('Inline field title', 'Some value here', true)
            .setFooter(`Sent by `, 'https://i.imgur.com/wSTFkRM.png');
            