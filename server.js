const http = require("http");
const querystring = require("querystring");
const discord = require("discord.js");
const Discord = require("discord.js");
Discord.Constants.DefaultOptions.ws.properties.$browser = `Discord Android`
const { ReactionController } = require("discord.js-reaction-controller");
const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const pf = "yu!";
const prefix = pf;
const intents = ["GUILDS", "GUILD_MEMBERS"];
const bot = new discord.Client({intents: intents, ws:{intents: intents}});
const config = require('./config.json')
const client = new discord.Client();

http
  .createServer(function(req, res) {
    if (req.method == "POST") {
      var data = "";
      req.on("data", function(chunk) {
        data += chunk;
      });
      req.on("end", function() {
        if (!data) {
          res.end("No post data");
          return; //hi おにさん こんちゃ
        }
        var dataObject = querystring.parse(data);
        console.log("post:" + dataObject.type);
        if (dataObject.type == "wake") {
          console.log("bot停止キャンセル");
          res.end();
          return;
        }
        res.end();
      });
    } else if (req.method == "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("yukkurihuran_network.bot is online");
    }
  })
  .listen(3000);

client.on("ready", message => {
  console.log("Bot起動完了 " + client.user.tag + " (" + client.user.id + ")");
  console.log("botが入っているサーバー" + client.guilds.cache.map(a => a.name));
  client.user.setActivity(
    pf  + "help | yukkurihuran_network | botが入っているサーバー" + client.guilds.cache.size + " | Ping " +client.guilds.cache.size + " ms" 
);
  }, 60000) //1分に1回更新
client.on("message", message => {
  if (message.content === "yu!ping") {
    message.channel.send("計測中").then(m => {
      m.edit(
        `✅Pingは ${m.createdTimestamp -
          message.createdTimestamp}msです APIのPingは ${Math.round(
          client.ws.ping
        )}ms`
      );
    });
  }
});
client.on('message', message =>
{
    if (message.channel.name === 'ゆふグローバルチャット')
    {
        if (message.author.bot) return;
        if (message.attachments.size <= 0)
        {
            message.delete()
        }
        client.channels.cache.forEach(channel =>
        {
            if (message.attachments.size <= 0)
            {
                const embed = new discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setDescription(message.content)
                    .setColor(15844367)
                    .setFooter(message.guild.name, message.guild.iconURL())
                    .setTimestamp()
                if (channel.name === 'ゆふグローバルチャット')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }
            if (!message.attachments.forEach(attachment =>
            {
                const embed = new discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL())
                    .setImage(attachment.url)
                    .setDescription(attachment.url)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL())
                    .setTimestamp()
                if (channel.name === 'ゆふグローバルチャット')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }));
            return;
        });
    }
})
client.on("message", message => {
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }
  if (!message.content.startsWith('yu!')) return
    if (message.content === '') {
      message.channel.send('')
    } else if (message.content === 'yu!help') {
      } else if (message.content === '') {
    } else if (message.content === 'yu!ip') {
      } else if (message.content === 'yu!sp') {
                    } else if (message.content === 'yu!グローバルチャット') {
                      } else if (message.content === 'yu!ping') {
    } else {
      message.channel.send('コマンドが存在しません')
    }
  if (message.content.match(/yu!グローバルチャット/)) {
    //if (message.content.match(/Lloydさん知ってる?/)){
    //let text = "あの、bot作成して人でそして神並にいい人でしょ、";
    //sendMsg(message.channel.id, text);;
    message.channel.send({
      embed: {
        title: "setup",
        "timestamp":"2021-07-13T16:59:45+09:00",
        "color": "LUMINOUS_VIVID_PINK",
        fields: [
          {
            name: "グローバルチャット",
            name: "1,下記の名前のチャンネルを作成して下さい",
            value: "ゆふグローバルチャット"
          },
          {
            name: "Links",
            value:
              "[BOTを招待！](https://bit.ly/3bewySf) | [メインサーバーに参加！](https://discord.gg/Pfz4XVCcnB)"
          }
        ]
      }
    });
    return;
  }
  if (message.content === "寒いね") {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんせやなー`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
  if (message.content === "やあ") {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんやあ`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
  if (message.content === "ども") {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `ども`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
  if (message.content === "おやすみ") {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんおやすみ`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
    if (message.content === "寝る") {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんおやすみ`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
  if (message.content === "MSクソ") {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんそんなにMSクソです?`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
  if (message.content === "MS クソ") {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんそんなにMSクソです?`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
  if (message.content === "嘘") {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんそうなんですね`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
  if (message.content.match(/おはよ/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんおはよ！`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
  if (message.content.match(/おはよう/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんおはよ！`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
  if (message.content.match(/こんにちは/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんこんにちは`;
    message.reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
    if (message.content.match(/こんばんは/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんこんばんは`;
    message.reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
  if (message.content.match(/kon/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんこんにちは`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
    if (message.content.match(/寝ます/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `さんおやすみ`;
    message
      .reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }
  if (message.content.match(/暇/)) {
    let text = "友達を呼んでみよう";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/調べたら/)) {
    let text = "unun";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/燃やすぞ/)) {
    let text = "え";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/こんにちは/)) {
    let text = "さんこんにちは";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/おうたおくらってどんな人?/)) {
    let text = "さんしらないです";
    sendMsg(message.channel.id, text);
    return;
  }
  if (message.content.match(/yu!help/)) {
    message.channel.send({
      embed: {
        title: "yukkurihuran_network✅ | help",
        description: "やあ。 ボクの名前はyukkurihuran_networkコマンドヘルプ",
        "timestamp":"2021-07-13T16:59:45+09:00",
        "color": "LUMINOUS_VIVID_PINK",
        fields: [
          {
            name: "yu!help",
            value: "今表示してるやつです。"
          },
          {
            name: "yu!ip",
            value: "yukkurihuran_networkのIPアドレスを確認できます。",
            inline: true
          },
          {
            name: "yu!sp",
            value: "yukkurihuran_networkのスペックを教えてくれます",
            inline: true
          },
          {
            name: "yu!グローバルチャット",
            value: "グローバルチャンネルの作り方がわかります",
            inline: true
          },
          {
            name: "Links",
            value:
              "[BOTを招待！](https://bit.ly/3bewySf) | [メインサーバーに参加！](https://discord.gg/Pfz4XVCcnB)"
          }
        ]
      }
    });
    return;
  }
    if (message.content.match(/yu!sp/)) {
    message.channel.send({
      embed: {
        title: "yukkurihuran_network✅ | スペック",
        description: "アナーキサーバーのスペックです",
              "timestamp":"2021-06-17T00:00:00+09:00",
      "color": 15844367,
      "footer": {
        "text": "Copyright © 2021 yukkurihuran_ch",
        "icon_url": "https://www.yuhunet.ml/mc2/0c40a8bcb036e89053d8db4b12a69fbe.jpg"
      },
      "author": {
        "name": "@yuhurannetwork",
        "url": "https://www.yuhunet.ml/mc/",
        "icon_url": "https://www.yuhunet.ml/mc2/0c40a8bcb036e89053d8db4b12a69fbe.jpg"
      },
        fields: [
          {
            name: "CPU",
            value: "Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz",
            inline: true
          },
          {
            name: "RAM",
            value: "16GB DDR4",
            inline: true
          },
          {
            name: "GPU",
            value: "Intel(R) UHD Graphics 620",
            inline: true
          },
          {
            name: "SSD",
            value: "SSD 520GB",
            inline: true
          },
          {
            name: "Java",
            value: "Java 16 64bit",
            inline: true
          },
          {
            name: "Links",
            value:
              "[BOTを招待！](https://bit.ly/3bewySf) | [メインサーバーに参加！](https://discord.gg/Pfz4XVCcnB)"
          },
                    {
          name: "DiscordサーバーとTwitterがあります。\r是非、Discordサーバーへの参加\rTwitterのフォローをお願いします！！",
          value:
              "[yukkurihuran_network公式Discordサーバー](https://discord.com/invite/Q9gztwkkS8) | [yukkurihuran_network公式Twitter](https://twitter.com/yuhurannetwork)"
          }
        ]
      }
    });
    return;
  }
  if (message.content.match(/Lloydさん知ってる?/)) {
    //if (message.content.match(/Lloydさん知ってる?/)){
    //let text = "あの、bot作成して人でそして神並にいい人でしょ、";
    //sendMsg(message.channel.id, text);;
    message.channel.send({
      embed: {
        title: "bot作成して人でそして神並にいい人でしょ",
        "timestamp":"2021-07-13T16:59:45+09:00",
        "color": "LUMINOUS_VIVID_PINK",
        fields: [
          {
            name:
              "Lloydさん、自作BOTを入れてほしいらしいです!よかったら入れてあげてほしいです!",
            value: "[bot URL](http://bit.ly/lloydsystem)"
          }
        ]
      }
    });
    return;
  }
  if (message.content.match(/yu!ip/)) {
    message.channel.send({
      embed: {
      "title": "yukkurihuran_network✅ | IPアドレス",
      "description": "最終更新日 | 2021/11/21",
      "timestamp":"2021-11-21T21:06:00+09:00",
      "color": 15844367,
      "footer": {
        "text": "Copyright © 2021 yukkurihuran_ch",
        "icon_url": "https://www.yuhunet.ml/mc2/0c40a8bcb036e89053d8db4b12a69fbe.jpg"
      },
      "author": {
        "name": "@yuhurannetwork",
        "url": "https://www.yuhunet.ml/mc/",
        "icon_url": "https://www.yuhunet.ml/mc2/0c40a8bcb036e89053d8db4b12a69fbe.jpg"
      },
      "fields": [
        {
            name: "yukkurihuran_network",
            value: "バージョン 1.8.x~1.18.x\n重大な脆弱性があるため、1.18.1をおすすめします",
          inline: true
          },
          {
            name: "Java Edition",
            value: "mc.yuhunet.ml",
            inline: true
          },
          {
            name: "Bedrock Edition",
            value: "BE.yuhunet.ml:30228",
            inline: true
          },
          {
            name: "rtm-mod-server|1.7.10",
            value: "非公開",
            inline: true
          },
        
          {
            name: "dynmap",
            value: "http://dynmap.yuhunet.ml:35262/",
            inline: true
          },
          {
            name: "BlueMap",
            value: "http://bluemap.yuhunet.ml:29226/",
            inline: true
          },
          {
            name: "Links",
            value:
              "[BOTを招待！](https://bit.ly/3bewySf) | [メインサーバーに参加！](https://discord.gg/Pfz4XVCcnB)"
          },
                    {
          name: "DiscordサーバーとTwitterがあります。\r是非、Discordサーバーへの参加\rTwitterのフォローをお願いします！！",
          value:
              "[yukkurihuran_network公式Discordサーバー](https://discord.com/invite/Q9gztwkkS8) | [yukkurihuran_network公式Twitter](https://twitter.com/yuhurannetwork)"
          }
        ]
      }
    });
    return;
  }


 if(message.author.bot){ // もし相手がBOTなら無視する
        return;
    }
  if (message.channel.name == "旧ゆふグローバルチャット") {
    message.delete();
    const ch_name = "旧ゆふグローバルチャット";
    client.channels.cache.forEach(channel => {
      if (channel.name === ch_name) {
        channel.send({
          embed: {
            title: message.content,
            color: "LUMINOUS_VIVID_PINK",
            timestamp: new Date(),
            footer: {
              text: "グローバルチャット"
            },
                  thumbnail: {
                        url: "https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png" // ユーザーのアイコン
                    },
            fields: [
              {
                name: "サーバー",
                value: `${message.guild.name}`,
                inline: true
              },
              {
                name: "ユーザー",
                value: `${message.author.username}`,
                inline: true
              }
            ]
          }
        });
      }
    });
  }
});

client.login(process.env.token);

function sendReply(message, text) {
  message
    .reply(text)
    .then(console.log("リプライ送信: " + text))
    .catch(console.error);
}

function sendMsg(channelId, text, option = {}) {
  client.channels.cache
    .get(channelId)
    .send(text, option)
    .then(console.log("メッセージ送信: " + text + JSON.stringify(option)))
    .catch(console.error);
}
