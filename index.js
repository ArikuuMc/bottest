const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("a!help for help");
    console.log("Bot Connécter");
});

bot.login("TOKEN");
