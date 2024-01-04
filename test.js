// Importar discord.js y chatgpt
const Discord = require('discord.js');
const CharacterAI = require("node_characterai");


async function character(text) {
const characterAI = new CharacterAI();
await characterAI.authenticateAsGuest();

  // Place your character's id here
  const characterId = "8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw";

  const chat = await characterAI.createOrContinueChat(characterId)
  const response = await chat.sendAndAwaitResponse(text, true);
  
  return response
}

// Escuchar el evento message
client.on ('message', async (message) => {
  // Obtener el mensaje completo
  const msg = message.content;

  // Comprobar si el mensaje menciona al bot
  if (message.mentions.has (client.user)) {
    // Generar una respuesta usando chatgpt
    const response = await character(msg);

    // Enviar la respuesta al canal
    message.channel.send(response);
  }
});


// Iniciar sesión con el token de bot
client.login('MTE5MjMwNTE5MDUxMTA1NDk4OQ.GJltd2.sxZvpIo3j0xKxOOgmJeQL6VF4Yt8IJbm53bZG0');
