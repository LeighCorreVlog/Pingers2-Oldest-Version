const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json')
const poll = require('./poll')
const command = require('./command')
var fs = require('fs');
const prefix = '/';
function doMagic8BallVoodoo() {
    var rand = ['Yes', 'No', 'Why are you even trying?','idk' ,'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    return rand[Math.floor(Math.random()*rand.length)];
}

var jokes = [
    { name: 'Nobel', answer: 'Nobel…that’s why I knocked!' },
    { name: 'Dozen', answer: 'anybody want to let me in?' },
    { name: 'Avenue', answer: 'knocked on this door before?' },
    { name: 'Ice Cream', answer: 'if you don\'t let me in!' },
    { name: 'Adore', answer: 'is between us. Open up!' },
    { name: 'Lettuce', answer: 'in. Its cold out here!' },
    { name: 'Bed', answer: 'you can not guess who I am.' },
    { name: 'Al', answer: 'give you a kiss if you open the door.' },
    { name: 'Olive', answer: 'you!' },
    { name: 'Abby', answer: 'birthday to you!' },
    { name: 'Rufus', answer: 'the most important part of your house.' },
    { name: 'Cheese', answer: 'a cute girl.' },
    { name: 'Wanda', answer: 'hang out with me right now?' },
    { name: 'Ho-ho.', answer: 'You know, your Santa impression could use a little work.' },
    { name: 'Mary and Abbey.', answer: 'Mary Christmas and Abbey New Year!' },
    { name: 'Carmen', answer: 'let me in already!' },
    { name: 'Ya', answer: 'I’m excited to see you too!' },
    { name: 'Scold', answer: 'outside—let me in!' },
    { name: 'Robin', answer: 'you! Hand over your cash!' },
    { name: 'Irish', answer: 'you a Merry Christmas!' },
    { name: 'Otto', answer: 'know whats taking you so long!' },
    { name: 'Needle', answer: 'little help gettin in the door.' },
    { name: 'Luke', answer: 'through the keyhole to see!' },
    { name: 'Justin', answer: 'the neighborhood and thought Id come over.' },
    { name: 'Europe', answer: 'No, you are a poo' },
    { name: 'To', answer: 'To Whom.' },
    { name: 'Etch', answer: 'Bless You!' },
    { name: 'Mikey', answer: 'doesnt fit through this keyhole' },
    { name: 'Mikey', answer: 'Van isnt working can you let me in?' }
]

var knock = function() {
    var joke = jokes[Math.floor(Math.random() * jokes.length)]
    return formatJoke(joke)
}

function formatJoke(joke) {
    return [
        'Knock, knock.',
        'Who’s there?',
        joke.name + '.',
        joke.name + ' who?',
        joke.name + ' ' + joke.answer
    ].join('\n')
}

const token = "NzY4ODIwOTU2NzQzMzM1OTQ2.X5GCUA.lS_lFHafXWBRld9tP48HphqsUZo"
const privateMessage = require('./private-message')

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Do /help for more info', {type: 'PLAYING'})

privateMessage(client, '/shop', '#shop buy a item using $ (not real)')

command(client, 'help', (message) => {
    message.channel.send(`
These are my supported commands:

**/help** - Displays the help menu
**/poll** - (do this before type /poll)
**/invites** - invite tracker
**/ping** - ping checker

**FUN**
**/8ball** - 8ball yes or no
**/rps <rock|paper|scissors>**
**/pick** - to get random number to guess
**/guess (number)** - do this if you want to guess the number
**/knock** - if you want to laugh
**/gamemode (a,s,c)** - useless command lol

**Info**
**/user-info** - check your info
**/about** - info of pingers!
**/version** - version of pingers!
`)
  })  
client.on("message", function (message) {
if (message.content === 'hello') {      //The bot will react to "hello" with an emoji. Unicode emojis are easier to add, but not mandatory.
	message.react("☺")
}
});
        
client.on('message', (message) => {
    var mes = message.content.split(" ");
    if(message.content == '/pick') {
        message.reply('Picking a random number between 1 and 100');
        num = Math.floor((Math.random() * 100) + 1);
        guesses = 0;
    }
    if(mes[0] == '/guess') {
        if (num == 0)
        {
            message.reply('Picking a random number between 1 and 100');
            num = Math.floor((Math.random() * 100) + 1);
            guesses = 0;
        }
        else if(mes[1] == num)
        {
            guesses++;
            message.reply('You got it! Only took ' + guesses + ' tries.');
            message.reply('do /pick if you want continue')
            num = Math.floor((Math.random() * 100) + 1);
            guesses = 0;
        }
        else if(mes[1] < num)
        {
            message.reply(mes[1] + ' is too low!');
            guesses++;
        }
        else if(mes[1] > num)
        {
            message.reply(mes[1] + ' is too high!');
            guesses++;
        }
    }

});

client.on("message", function (message) {
    if (message.content.includes("discord.gg/")) {
    message.reply("dont advertise!"); 
    message.delete();
  }
});

client.on("message", function (message) {
    if (message.content.includes("Discord.gg/")) {
    message.reply("comeon stop advertise!"); 
    message.delete();
  }
});

client.on('message', (message) => {
    if (message.content.includes('/knock')) {
      const msg = message.content.split(' ');

          message.reply(knock());
       
    }
});
    
client.on("message", function (message) {
    if (message.content.includes("DISCORD.GG/")) {
    message.reply("why you want to advertise!"); 
    message.delete();
  }
});

client.on("message", function (message) {
    if (message.content.includes("fuck")) {
    message.reply("don't say bad words"); 
    message.delete();
  }
});

client.on("message", function (message) {
    if (message.content.includes("bitch")) {
    message.reply("dont advertise!"); 
    message.delete();
  }
});

client.on("message", function (message) {
    if (message.content.includes("fu*k")) {
    message.reply("don't say badwords"); 
    message.delete();
  }
});

client.on("message", function (message) {
    if (message.content.includes("shit")) {
    message.reply("don't say badwords come on!"); 
    message.delete();
  }
});
    
client.on("message", function (message) {
    if (message.content.includes("fu*k")) {
    message.reply("don't say badwords come on!"); 
    message.delete();
  }
});

    if (command === 'rps') {
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
        if (result === choice) return message.reply("It's a tie! We had the same choice.");
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.reply('I won!');
                else return message.reply('You won!');
            }
            case 'paper': {
                if (result === 'scissors') return message.reply('I won!');
                else return message.reply('You won!');        
            }
            case 'scissors': {
                if (result === 'rock') return message.reply('I won!');
                else return message.reply('You won!');
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }
    }
});    

client.on('message', message => {
    if(message.content === "/8ball"){
    message.reply( 'Your anwser is: ' + doMagic8BallVoodoo());
}
});  
    
  client.on('message', message => {
	if (message.content === `/user-info`) {
	message.channel.send(`Your Info ${message.author}\n**Your username: ${message.author.username}**\n**Your ID: ${message.author.id}**`);
}
});

  client.on('message', message => {
    if(message.content === "/invites"){
        var user = message.author;

        message.guild.fetchInvites()
        .then

        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for(var i=0; i < userInvites.length; i++)
                {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
                     message.reply(`You have ${userInviteCount} invites.`);
            }
        )
    }
});

client.on('message', message => {
    if (message.content === '/ping') {  
      message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
  });
    
client.on('message', message => {
    if (message.content === '/about') {  
      message.channel.send(`**ORIGINAL MAKE BY ROOMYSTEVE12!** if you have question contact me in discord - Roomysteve12#4841`);
    }
  });
  
client.on('message', message => {
    if (message.content === '/version') {  
      message.channel.send(`*Version** - 1.0`);
    }
  });    
    
client.on('message', message => {
    if (message.content === 'hi') {  
      message.channel.send(`Hello! Good Morning Or Good Evening! ${message.author}`);
    }
  });
  
client.on('message', message => {
    if (message.content === '/gamemode c') {  
      message.channel.send(`Don't Cheat ${message.author}`);
    }
  });
  
client.on('message', message => {
    if (message.content === '/gamemode s') {  
      message.channel.send(`Good Job! 👏 ${message.author}`);
    }
  });
  
  client.on('message', message => {
    if (message.content === '/gamemode a') {  
      message.channel.send(`You Set Your Gamemode To Adventure${message.author}`);
    }
  });
  
  command(client, 'servers', (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `${guild.name} has a total of ${guild.memberCount} members`
      )
    })
  })

  command(client, ['cc', 'clearchannel'], (message) => {
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.messages.fetch().then((results) => {
        message.channel.bulkDelete(results)
      })
    }
  })

poll(client);
client.setMaxListeners(100)
client.login(token);