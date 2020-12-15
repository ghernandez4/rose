const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'stab',
    description: "Goose stab",
    execute(message, args){
        message.channel.send("<:stabstab:768524089706807316>")

    }
}