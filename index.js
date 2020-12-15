const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Bot listening at http://localhost:${port}`));




const Discord = require('discord.js');
const client = new Discord.Client();
var cron = require('node-cron');
const dotenv = require('dotenv').config()





const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log("Ready!")
    client.user.setActivity("to girl in red", { type: "LISTENING" })
});
 

//IF PREFIX + MESSAGE IS
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    if(command === 'coin'){
        client.commands.get('coin').execute(message, args);
    } 
    if(command === 'say'){
        client.commands.get('say').execute(message, args);
    }
    if(command === 'stab'){
        client.commands.get('stab').execute(message, args);
    }
    if(command === 'askmod'){
        client.commands.get('askmod').execute(message, args);
    }
    if(command === 'sayembed'){
        client.commands.get('sayembed').execute(message, args);
    }
    
});



 //IF MESSAGE IS
client.on('message', message => {
    msgLower = message.content.toLowerCase();
    if (message.author.bot) {return};
    if (msgLower === 'hello') {
        client.commands.get('hello').execute(message);
    }

  });

client.login('NzY2ODQ1OTUzMTA5MDAwMjAz.X4pS8g.aprgOkmz3TZrCHPJcgu2mEkQ8vU');
 