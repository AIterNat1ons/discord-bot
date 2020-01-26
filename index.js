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
msg.channel.sengmsg ('pong!');
break;
        case 'dyia':
            msg.channel.sengmsg('SUB TO DYIA UWU https://www.youtube.com/channel/UCNsnKHkl29xDLuMVxZyyG_A')
            break;
    }
})


bot.login(process.env.token);


