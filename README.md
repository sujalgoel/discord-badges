<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="Atlanta" src="https://cdn.discordapp.com/attachments/787614573833486376/805829376184811580/Discord-Badges.png">

# Discord Badges

[![npm](https://img.shields.io/npm/v/discord-badges)](https://npmjs.org/discord-badges)
[![license](https://img.shields.io/github/license/sujalgoel/discord-badges)](https://github.com/sujalgoel/discord-badges/blob/master/LICENSE)

> A package that returns the badges of a **Discord User**

## How to use 📚

```js
const badges = require("discord-badges");

badges
  .badges(user) // Get the user somehow
  .then((response) => {
    console.log(response); // log the response
  })
  .catch((e) => {
    console.log(e); // log the error (if any)
  });
```

## Example ✏️

```js
const Discord = require("discord.js");
const badges = require("discord-badges"); // Requiring our package.

const client = new Discord.Client({
  fetchAllMembers: true,
});

client.on("ready", async () => {
  console.log(`${client.user.tag} is online!`);
});

client.on("message", async (message) => {
  if (message.content === "!mybadges") {
    const user = client.users.cache.get(message.author.id); // Define user
    badges
      .badges(user) // Send user to the package
      .then((response) => {
        // return the user badges
        let result = "";
        for (let i = 0; i < response.length; i++) {
          result += `**${response[i].name} :** ${response[i].url}\n`;
        }
        return message.channel.send(result);
      })
      .catch((e) => {
        // if no badges return error
        console.log(e);
        return message.channel.send("You don't have any Discord Badges.");
      });
  }
});

client.login("DISCORD_BOT_TOKEN");
```

## **Creators** 💖

- Sujal Goel#7602
