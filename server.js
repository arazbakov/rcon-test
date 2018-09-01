const publicIp = require('public-ip');
 
publicIp.v4().then(ip => {
    console.log(ip);
});



const Discord = require("discord.js");
let Rcon = require('srcds-rcon');
let rcon = Rcon({
    address: '46.174.54.156',
    password: 'dfmnklasdjfjiewwjfojdsskljfkewriwjfkdlskf;llajsdcbdjfkhakdaslkdjalkjdwiqdlsamd231'
});
function rebootrcon(){
  let Rcon = require('srcds-rcon');
let rcon = Rcon({
    address: '46.174.54.156',
    password: 'dfmnklasdjfjiewwjfojdsskljfkewriwjfkdlskf;llajsdcbdjfkhakdaslkdjalkjdwiqdlsamd231'
});
rcon.connect().then(() => {
    console.log('connected');
}).catch(console.error);
}

const client = new Discord.Client();

const config = require("./config.json");


client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`целовашки создателя .DEXTER'a <3`);
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
  if(message.author.bot) return;


	if (message.channel.id === "479854267759329290") {
	var s = 'dadmin_csay '
  var nick = '[' + message.author.username + ']:'
  var mes = message.content
  rcon.connect().then(() => {
    console.log('connected');
    rcon.command(s + '<' + message.author.username + '>: ' + mes ).then(console.log(message.content), rebootrcon);
    rcon.disconnect().then(() => {
      console.log('disconnected') })
  }).catch(console.error);
  }
  
  
});


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
 console.log(Date.now() + " Just got pinged!");
 response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
 http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.login(config.token);