const Commando = require("discord.js-commando");
module.exports = class Reply extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "ph",
      group: "misc",
      memberName: "ph",
      description: "reply to messages",
    });
  }
  async run(msg) {
    let tokens = msg.content.split(" ");
    let keyword = tokens.slice(1, tokens.length).join(" ");
    // Gryffindor;
    if (keyword == "Gryffindor" || keyword == "grffindor") {
      msg.react("🦁");
    } else if (keyword == "Godric Gryffindor") {
      msg.reply("Founder of Gryffindor");
      msg.react("🦁");
    } else if (keyword == "I want to join Gryffindor") {
      msg.reply("Tell me the password of common room of Gryffindor");
    } else if (keyword == "Caput Draconis") {
      msg.reply("Welcome to Gryffindor 🦁");
    } else if (keyword == "Hufflepuff") {
      msg.react("🦡");
    } else if (keyword == "Helga Hufflepuff") {
      msg.reply("Founder of Hufflepuff");
      msg.react("🦡");
    } else if (keyword == "I want to join Hufflepuff") {
      msg.reply("Tell me the slogan of Hufflepuff");
    } else if (
      keyword ==
      "You might belong in Hufflepuff, where they are just and loyal. Those patient Hufflepuffs are true, and unafraid of toil"
    ) {
      msg.reply("Welcome to Hufflepuff 🦡");
    }
    //Ravenclaw
    else if (keyword == "Ravenclaw") {
      msg.react("🦅");
    } else if (keyword == "Rowena Ravenclaw") {
      msg.react("🦅");
      msg.reply("Founder of Ravenclaw");
    } else if (keyword == "I want to join Ravenclaw") {
      msg.reply("What can travel around the world while staying in a corner?");
    } else if (keyword == "postage stamp") {
      msg.reply("Welcome to Ravenclaw");
    } else if (keyword == "Slytherin") {
      msg.react("🐍");
    } else if (keyword == "Salazar Slytherin") {
      msg.react("🐍");
      msg.reply("Founder of Slytherin");
    } else if (keyword == "I want to join Slytherin") {
      msg.reply("Tell me the password of Slytherin");
    } else if (keyword == "Pure-blood") {
      msg.reply("Welcome to Slytherin 🐍");
    } else if (keyword == "Lord Voldemort" || keyword == "Tom Riddle") {
      msg.reply("He who must not be named 🤫");
    } else if (keyword == "vro" || keyword == "Vro") {
      msg.reply("Hemlo");
    } else if (keyword == "I want to fuck Ginny") {
      msg.reply("Harry Potter - Avada kedavra");
      msg.react("😈");
    } else if (
      keyword == "Tell me something about Harry Potter" ||
      keyword == "Tell me something about harry potter" ||
      keyword == "tell me something about harry potter" ||
      keyword == "harry potter"
    ) {
      msg.reply(
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry."
      );
    } else if (keyword == "Tell me something about Voldemort") {
      msg.reply(
        "Lord Voldemort is a sobriquet for Tom Marvolo Riddle, a fictional character and the main antagonist in J. K. Rowling's series of Harry Potter novels."
      );
    } else if (
      keyword == "I love Emma Watson" ||
      keyword == "i love emma" ||
      keyword == "Emma meri jaan" ||
      keyword == "emma" ||
      keyword == "Hermione Granger" ||
      keyword == "hermione granger" ||
      keyword == "Hermione" ||
      keyword == "hermione"
    ) {
      // msg.reply();
      msg.reply(
        `Ron - Chala ja b**k https://c.tenor.com/sWEY8anP4dwAAAAM/chala-ja-chala-ja-b-sd-k.gif`
      );
    } else if (
      keyword == "Do Severus Snape care about Harry" ||
      keyword == "Do Snape care about Harry" ||
      keyword == "do snape love harry"
    ) {
      msg.reply(
        "Snape was not the greatest fan of Harry, but that didn't mean that he ever stopped loving Lily. Dumbledore was surprised that Snape seemed to care for the boy. With a swish of his wand, Snape conjured up a Patronus) – Lily's Patronus, a doe. 'Always,' he said."
      );
    }
  }
};
