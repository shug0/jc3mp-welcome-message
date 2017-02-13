const chat = jcmp.events.Call('get_chat')[0];

const message = "Bienvenue sur Rail de Cake ! Amuses toi bien ;-). Pour le chat vocal et les nouvelles rejoins notre Discord : https://raildecake.fr/discord";
const messageColor = new RGB(255, 140, 0);

jcmp.events.Add("PlayerReady", (player) => {
  chat.send(player, message, messageColor);
});
