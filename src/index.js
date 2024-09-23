import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from 'qrcode-terminal';

import generate from './gemini.js';
import { 
  readAndFormatConversation,
  updateChat
} from './formatChat.js';

// Crie uma instância do cliente
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    devtools: true
  },
  webVersionCache: { 
    type: 'remote', 
    remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html', 
  }
});

// Gera um QR Code para autenticação
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
  console.log('QR RECEIVED', qr);
});

// Loga no cliente
client.on('ready', () => {
  console.log('Client is ready!');
  new Promise(a => setTimeout(a, 5000));
});

// Responde às mensagens
client.on('message_create', async (message) => {

  const regex = /DAI:\s(.+)/;
  const match = message.body.match(regex);
  if(match) {
    let previousMessages = await readAndFormatConversation(message.from);

    let allMessage = `Responda a conversa a seguir como se estivesse em um chat com outra(s) pessoa(s).(se não souber com quem está conversando, chame a pessoa de forma genérica):\n
      
    MENSAGENS ANTERIORES:
    ${previousMessages}
    
    MENSAGEM ATUAL:
    Pessoa: ${match[1]}`;

    const replyMessage = await generate(allMessage);
    message.reply(replyMessage);

    await updateChat(message.from, message.from, match[1]);
    await updateChat(message.from, 'Eu', replyMessage);
  }
});

// Inicializa o cliente
client.initialize();