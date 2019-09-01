const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./settings.json')
const prefix = config.prefix;
const token = config.token;



bot.login('NjE2NjYwOTA1MTg2NDI2ODkw.XWm-Gw.WUM2VKYxLtp0HWU3psM5Jy7Ly8w')


bot.on("message", async message => {

  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    // let o = new Discord.RichEmbed()
    // .setTitle("ERROR")
    // .setColor("#d50000")
    // .setDescription("Command is invalid or an error has occurred.")
    // .setTimestamp()
    // message.channel.send(o)

  console.log(err)
  }

});







bot.on('guildMemberAdd', function (member) { 
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint, cette utilisatteur ne se trouve pas dans la blacklist. ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('606666246280314884').send(embed)
})




bot.on("message" , function (message) {
  let args = message.content.trim().split(/ +/g)
     if (args[0].toLowerCase() === prefix + "help") {
  
  const embed = new Discord.RichEmbed()
  .setTitle("Commande pour vérifié le serveur")
  .setDescription("Utilisez la commande #checkserver pour vérifié si il y a des membres blacklisté par SécurityBot.")
  .setFooter("SécurityBot™")
  .setColor("RANDOM")
  message.channel.send(embed)
  }
  })






  bot.on("message" , function (message) {
    let args = message.content.trim().split(/ +/g)
       if (args[0].toLowerCase() === prefix + "help") {
    
    const embed = new Discord.RichEmbed()
    .setTitle("Commande pour invité SécurityBot")
    .setDescription("Utilisez la commande #invite pour invité le bot sur votre serveur ou pour rejoindre le serveur de support.")
    .setFooter("SécurityBot™")
    .setColor("RANDOM")
    message.channel.send(embed)
    }
    })
  


   
      
          

   


    bot.on("message" , function (message) {
      let args = message.content.trim().split(/ +/g)
         if (args[0].toLowerCase() === prefix + "help") {
      
      const embed = new Discord.RichEmbed()
      .setTitle("Commande pour voir la blacklist")
      .setDescription("Utilisez la commande #blacklist pour voir les utilisateurs blacklisté. Si vous souhaitez ajouté un utilisateur dans la blacklist. Utilisez la commande #invite pour rejoindre le serveur de support et faire une demande. cela évite les spams.")
      .setFooter("SécurityBot™")
      .setColor("RANDOM")
      message.channel.send(embed)
      }
      })



    bot.on("message" , function (message) {
      let args = message.content.trim().split(/ +/g)
         if (args[0].toLowerCase() === prefix + "checkserver") {
      
      const embed = new Discord.RichEmbed()
      .setTitle("Scan lancé !")
      .setDescription("Votre serveur est en cours d'analyse, merci de patienter. Le temps de verification varie en fonction du nombre de personne présentes sur votre serveur. Si les résultats ne sont toujours pas affichés, effectué la commande #restart")
      .setFooter("SécurityBot™")
      .setColor("RANDOM")
      message.channel.send(embed)
      }
      })


      bot.on("message" , function (message) {
        let args = message.content.trim().split(/ +/g)
           if (args[0].toLowerCase() === prefix + "checkserver") {
        
        const embed = new Discord.RichEmbed()
        .setTitle("Scan terminé !")
        .setDescription("Aucun membres n'est blacklisté sur le serveur.")
        .setFooter("SécurityBot™")
        .setColor("RANDOM")
        message.channel.send(embed)
        }
        })
  


        bot.on("message" , function (message) {
          let args = message.content.trim().split(/ +/g)
             if (args[0].toLowerCase() === prefix + "restart") {
          
          const embed = new Discord.RichEmbed()
          .setTitle("SécurityBot est relancé !")
          .setDescription("Votre serveur est sécurisé et le bot est foncitonnel.")
          .setFooter("SécurityBot™")
          .setColor("RANDOM")
          message.channel.send(embed)
          }
          })



          bot.on("message" , function (message) {
            let args = message.content.trim().split(/ +/g)
               if (args[0].toLowerCase() === prefix + "checkserver") {
            
            const embed = new Discord.RichEmbed()
            .setTitle("Scan terminé !")
            .setDescription("SécurityBot n'a pas d'autorisations sufisantes, rendez-vous sur le serveur de support pour arrangé le problème.")
            .setFooter("SécurityBot™")
            .setColor("RANDOM")
            message.channel.send(embed)
            }
            })


            bot.on("message" , function (message) {
              let args = message.content.trim().split(/ +/g)
                 if (args[0].toLowerCase() === prefix + "blacklist") {
              
              const embed = new Discord.RichEmbed()
              .setTitle("blacklist")
              .setDescription("SécurityBot n'a trouvé aucun utilisateur dans la blacklist.")
              .setFooter("SécurityBot™")
              .setColor("RANDOM")
              message.channel.send(embed)
              }
              })



              bot.on('message', function (message) {
                if (message.content == "Salut !") { 
                  const replies = ["Hello !", "Hi !", "Cest une expression de salutation.", "Salut !", "Comment allez-vous ?", "Tous les matins, un bonjour poli.", ""] 
                  message.replytext = Math.floor((Math.random() * replies.length) + 0); 
                  message.channel.send(replies[message.replytext]); 
                }});
                
                


bot.on('guildMemberRemove', function (member) {
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('606666246280314884').send(embed)
})








//plusieurs questions reponses


bot.on('ready', () => {
  bot.user.setActivity("#help ", {type: "WATCHING"})
 console.log("Je suis prêt a apprendre");
});



bot.on('ready', () => {
  console.log('I am ready!');
});

//pour kick quelqun

bot.on('message', message => {
  
  if (!message.guild) return;

  
  if (message.content.startsWith('#kick')) {
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
     
      if (member) {
        
        member.kick('Optional reason that will display in the audit logs').then(() => {
        
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          
          message.reply('Je suis incapable de kick le membre');
          
          console.error(err);
        });
      } else {
        
        message.reply('Cette utilisateur nest pas dans cette guilde');
      }
    
    } else {
      message.reply('Mentionne un utilisateur pour kick!');
    }
  }
});





// ban quelqun

bot.on('message', message => {
  
  if (!message.guild) return;

  
  if (message.content.startsWith('#ban')) {
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
      
        member.ban({
          reason: 'Tu es mauvais !',
        }).then(() => {
          
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          
          message.reply('Je suis incapable de ban le membre');
          
          console.error(err);
        });
      } else {
        
        message.reply('Cet utilisateur ne fait pas partie de cette guilde!');
      }
    } else {
    
      message.reply('Tu dois mention le membre pour ban !');
    }
  }
});

