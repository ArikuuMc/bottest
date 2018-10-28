const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("a!help for help");
    console.log("Bot Connécter");
});

bot.login("NTA2MTU2NDI1MTY5MzM4Mzc4.DrenKQ._8ackqArkvgdg0XodMyyzNi9rS0");
