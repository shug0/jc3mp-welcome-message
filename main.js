const chat = jcmp.events.Call('get_chat')[0];

const message = 'Bienvenu sur Rail de cake !';
const messageColor = new RGB(255, 140, 0);

jcmp.events.Add("PlayerReady", (player) => {
  chat.send(player, message, messageColor);
});