const openChat = document.querySelector('.chat-widget__side-text');
const widget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const chat = document.getElementById('chat-widget__messages');
const botMessage = ['Добрый день!', 'Кто тут?', 'Мы вас не знаем!', 'Досвидания!'];
const chatArea = document.querySelector('.chat-widget__messages-container')
let date = new Date();

openChat.onclick = () => {
   widget.classList.add('chat-widget_active');
   setInterval(() => {
      console.log(new Date() - date)
      if(widget.className.includes('chat-widget_active') && new Date() - date >= 30000){
         date = new Date();
         botChatting();
      }
      chatArea.scrollTop = chatArea.scrollHeight;
   }, 1000)
}

input.addEventListener('keydown', (evt) => {
   date = new Date();
   if (evt.key === 'Enter' && input.value != ''){
      if (input.value.charAt(0) === ' '){
         input.value = ''
         return
      }
      chat.innerHTML += `
      <div class="message message_client">
         <div class="message__time">${date.toLocaleTimeString().slice(0, 5)}</div>
         <div class="message__text">${input.value}<div>
      </div>`;
      input.value = '';
      botChatting();
   }
   chatArea.scrollTop = chatArea.scrollHeight;
})

function botChatting(){
   chat.innerHTML += `
   <div class="message">
      <div class="message__time">${date.toLocaleTimeString().slice(0, 5)}</div>
      <div class="message__text">${botMessage[Math.floor(Math.random() * botMessage.length)]}</div>
   </div>`;
}
