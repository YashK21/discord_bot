const Commando = require("discord.js-commando");
const config = require("../../config.json");
const fetch = require("node-fetch");
module.exports = class Gif extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "ph-gif",
      group: "misc",
      memberName: "ph-gif",
      description: "reply to you with gif",
    });
  }
  async run(msg) {
    console.log("replying with gif");
    let tokens = msg.content.split(" ");
    let keyword = tokens.slice(1, tokens.length).join(" ");
    let url = `https://g.tenor.com/v1/search?q=${keyword}&key=${config.tenorapi}`;
    let res = await fetch(url);
    let json = await res.json();
    // console.log(json);
    let index = Math.floor(Math.random() * json.results.length);
    // console.log(index);
    // console.log(Math.random() * json.results.length);
    // console.log(json.results.length);
    // console.log(Math.random());
    msg.reply(json.results[index].url);
  }
};
