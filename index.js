const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjcwNjg1ODI3MTU1NjIzOTM3.Xix_qA.1OIvwCn9RKQmg_V18vcr8R2GkUI';
const PREFIX = 'r.';

bot.on('ready',()=>{
    console.log('Bot is online!')
})

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
case 'ping':
msg.channel.sendMessage ('pong!');
break;
        case 'dyia':
            msg.channel.sendMessage('SUB TO DYIA UWU https://www.youtube.com/channel/UCNsnKHkl29xDLuMVxZyyG_A')
            break;
        case 'info':
            if (args[1] === 'more'){
                msg.channel.sendMessage('Testing for this bot <@!670685827155623937>')
            }else{
                msg.channel.sendMessage('This is a server for testing')
            }
            break;
                
    }
})


bot.login(process.env.token);


