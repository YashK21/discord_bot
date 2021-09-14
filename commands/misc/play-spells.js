const Commando = require("discord.js-commando");
const path = require("path");
module.exports = class PlayAudioCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "ph-s",
      group: "misc",
      memberName: "audio",
      description: "Plays harry potter spells in audio channel",
    });
  }
  async run(msg) {
    const { voice } = msg.member;
    let token = msg.content.split(" ");
    let keyword = token.splice(1, token.length).join(" ");
    if (!voice.channelID) {
      msg.reply("You must be in voice channel");
      return;
    } else {
      voice.channel.join().then((music) => {
        if (keyword == "Accio") {
          music.play(path.join(__dirname, "audio", "Accio.mp3"));
          msg.reply(
            "The Summoning Charm (Accio) was a charm that summoned an object toward the caster. It was able to summon objects in direct line of sight of the caster, as well as things out of view, by calling the object aloud after the incantation (unless the spell is cast nonverbally "
          );
        } else if (keyword == "Alohomora") {
          music.play(path.join(__dirname, "audio", "Alohomora.mp3"));
          msg.reply(
            `The Unlocking Charm (Alohomora), also known as the Thief's Friend, was a charm that unlocked objects such as doors or windows.It was also able to open doors locked by the Locking Spell (Colloportus), and as such, acted as its counter-charm.`
          );
        } else if (keyword == "Avada Kedavra(Snape)") {
          music.play(path.join(__dirname, "audio", "Avada Kedavra(Snape).mp3"));
          msg.reply(
            `The Killing Curse (Avada Kedavra) was a tool of the Dark Arts and was one of the three Unforgivable Curses. It was one of the most powerful and sinister (if not the most sinister) spells known to Wizardkind. When cast successfully on a living person or creature, the curse caused instantaneous and painless death, without causing any injury to the body, and without any trace of violence`
          );
        } else if (keyword == "Avada Kedavra(Voldemort)") {
          music.play(
            path.join(__dirname, "audio", "Avada Kedavra(Voldermort).mp3")
          );
          msg.reply(
            `The Killing Curse (Avada Kedavra) was a tool of the Dark Arts and was one of the three Unforgivable Curses. It was one of the most powerful and sinister (if not the most sinister) spells known to Wizardkind.[1] When cast successfully on a living person or creature, the curse caused instantaneous and painless death, without causing any injury to the body, and without any trace of violence`
          );
        } else if (keyword == "Crucio") {
          music.play(path.join(__dirname, "audio", "Crucio.mp3"));
          msg.reply(
            `The Cruciatus Curse (Crucio), also known as the Torture Curse, was a tool of the Dark Arts and one of the three Unforgivable Curses. It was one of the most powerful and sinister spells known to Wizardkind. When cast successfully the curse inflicted intense, excruciating pain on the victim.`
          );
        } else if (keyword == "Expecto Patronum") {
          music.play(path.join(__dirname, "audio", "Expecto Patronum.mp3"));
          msg.reply(
            `The Patronus Charm (Expecto Patronum) was the most famous and one of the most powerful defensive charms known to wizardkind.It was an immensely complicated and an extremely difficult spell, that evoked a partially-tangible positive energy force known as a Patronus (pl. Patronuses) or spirit guardian. It was the primary protection against Dementors and Lethifolds, against which there were no other defence.`
          );
        } else if (keyword == "Expelliarmus") {
          music.play(path.join(__dirname, "audio", "Expelliarmus.mp3"));
          msg.reply(
            `The Disarming Charm (Expelliarmus) was a charm that forced whatever an opponent was holding to fly out of their hand. It was common to see this spell used in duels to make an opponent lose their wand.`
          );
        } else if (keyword == "Leviosa") {
          music.play(path.join(__dirname, "audio", "Leviosa.mp3"));
          msg.reply(
            `The Levitation Charm (Wingardium Leviosa) was a charm used to make objects fly, or levitate.It was taught to first years at Hogwarts School of Witchcraft and Wizardry.There were a number of lesser variations of the Levitation Charm, such as: the Hover Charm, the Rocket Charm, and the Floating Charm, but the Levitation Charm remained the original and best`
          );
          msg.reply("Remember! It's leviOsa, not levioSA! 😂😂");
        } else if (keyword == "Lumos") {
          music.play(path.join(__dirname, "audio", "Lumos.mp3"));
          msg.reply(
            `The Wand-Lighting Charm (Lumos) was a charm that illuminated the tip of the caster's wand, allowing the caster to see in the dark. The counter-charm for the spell was the Wand-Extinguishing Charm (Nox), which was used to extinguish the light from the caster's wand.`
          );
        } else if (keyword == "Obliviate") {
          music.play(path.join(__dirname, "audio", "Obliviate.mp3"));
          msg.reply(
            `A Memory Charm (also known as Lockhart Memory Charm or Forgetfulness Charm) is a spell that can be used to erase memories from an individual's mind. The incantation for this charm is Obliviate. It is different from the charm that creates false memories`
          );
        } else if (keyword == "Oculus Reparo") {
          music.play(path.join(__dirname, "audio", "Oculus Reparo.mp3"));
          msg.reply(
            `Oculus Reparo was the incantation of a charm that repaired broken eyeglasses. It was a variant of the Mending Charm.`
          );
        } else if (keyword == "Petrificus Totalus") {
          music.play(path.join(__dirname, "audio", "Petrificus.mp3"));
          msg.reply(
            `The Full Body-Bind Curse (Petrificus Totalus), also known as the Body Freezing Spell, was a curse that temporarily paralysed the opponent. It was often used by inexperienced or young wizards and witches in duelling. This curse could be found in Curses and Counter-Curses by Vindictus Viridian.`
          );
        } else if (keyword == "Riddikulus") {
          music.play(path.join(__dirname, "audio", "Riddikulus.mp3"));
          msg.reply(
            `The Boggart-Banishing Spell (Riddikulus) was a charm that was used to defeat a Boggart.It caused the creature to assume a form that was humorous to the caster, along with a whip-crack noise, thereby taking away the Boggart's ability to terrorise.`
          );
        } else if (keyword == "Sectumsempra") {
          music.play(path.join(__dirname, "audio", "Sectumsempra.mp3"));
          msg.reply(
            `Sectumsempra was a curse invented by Professor Severus Snape that lacerates the target and causes severe haemorrhaging.Snape created it as a student of Hogwarts, with the intention of using it against his enemies, likely including the Marauders, and it became one of his specialities`
          );
        }
      });
    }
  }
};
