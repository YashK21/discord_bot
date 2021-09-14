const Commando = require("discord.js-commando");
module.exports = class AddCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "add",
      group: "misc",
      memberName: "add",
      description: "Adds numbers together",
      argsType: "multiple",
      //multiple will make the args into an array
    });
  }
  async run(msg, args) {
    let sum = 0;
    for (const arg of args) {
      sum += parseInt(arg);
    }
    console.log(sum);
    msg.reply(`the sum is ${sum}`);
  }
};
