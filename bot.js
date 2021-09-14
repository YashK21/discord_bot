const path = require("path");
const Commando = require("discord.js-commando");
const config = require("./config.json");
const client = new Commando.CommandoClient({
  owner: "762378142161436672",
  commandoPrefix: config.prefix,
});

//client is a way to communicate with the discord to know what happening on server
client.on("ready", () => {
  console.log("bot");
  client.registry
    .registerGroups(["misc", "misc commands"])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, "commands"));
  //registerCommandsIn = helps to register different commands of our own
});
client.login(config.token);
