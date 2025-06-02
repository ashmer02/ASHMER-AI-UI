const chatForm = document.getElementById('chat-form');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userText = userInput.value.trim();
  if (!userText) return;

  addMessage(userText, 'user-msg');
  userInput.value = '';

  const botResponse = await getBotReply(userText);
  addMessage(botResponse, 'bot-msg');
});

function addMessage(text, className) {
  const msgDiv = document.createElement('div');
  msgDiv.className = className;
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getBotReply(msg) {
  // You can connect this to Cloudflare Worker AI or other API later
  return `You said: "${msg}"`;
}
