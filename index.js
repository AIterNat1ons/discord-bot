const { Client, Attachment } = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjcwNTk1MjUxNzYwNzkxNTUz.XjWcyA.lJrXdZmbkNETtRD2029bY0E1P44';
const PREFIX = 'r.';


bot.on('ready',()=>{
    console.log('Bot is online!')
});

bot.on('guildMemberAdd', member =>{
 const channel = member.guild.channels.find(ch => ch.name === 'general');
 if (!channel) return;
 channel.send(`Welcome, ${member} to the server!`);

});

bot.on('guildMemberRemove', member =>{
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Bye, ${member}, it's sad for you to leave!`);
 
 });

bot.on('message', msg=>{

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
case 'ping':
essage.channel.send(new Date().getTime() - message.createdTimestamp + " ms");
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
        case 'clear':
            if (!args[1]) return msg.reply('Error there needs to be a second arg')
            msg.channel.sendMessage('Deleting ' + args[1] + ' messages')
                msg.channel.bulkDelete(args[1]);
            break;
        case 'avatar':
                msg.channel.send(msg.author.avatarURL);
            break;
        case 'rip':
            const gay = new Attachment('https://i.imgur.com/w3duR07.png'); 
            msg.channel.send(gay);
            break;
        case 'cat':
            const hi = new Attachment('https://i.imgur.com/DFZTnHZ.gif')
            msg.channel.send(hi);
            break;

                
    }
})


bot.login(process.env.token);
