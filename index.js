const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjcwNjg1ODI3MTU1NjIzOTM3.Xix_qA.1OIvwCn9RKQmg_V18vcr8R2GkUI';

bot.on('ready',()=>{
    console.log('Bot is online!')
})

bot.on('message', msg=>{
    if(msg.content === "Hello"){
    msg.reply('Hello there');
    }
})

bot.on('message', msg=>{
    if(msg.content === "your gay"){
    msg.reply('shut up your gay too');
    }
})

bot.on('message', msg=>{
    if(msg.content === "your lesbian"){
    msg.reply('shut up your lesbian too');
    }
})

bot.login(process.env.token);

