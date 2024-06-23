import pkg from 'whatsapp-web.js';
const { Client, LocalAuth, NoAuth } = pkg;
import qrcode from 'qrcode-terminal';
import puppeteer from 'puppeteer-core';

import formatarMensagem from './format.js';
import atualizarOuAdicionarItem from './add.js';
import ordenarArquivoJSON from './order.js';
import generate from './gemini.js';
import { readAndFormatConversation } from './formatChat.js';

// Crie uma instância do cliente
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
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
  
  // console.log("Buscando grupos...");
  // // Listando os IDs de todos os grupos
  // client.getChats().then(chats => {
  //   console.log('Lista de Grupos:');
  //   chats.forEach(chat => {
  //       if (chat.isGroup) {
  //         console.log(`- ${chat.name} (${chat.id._serialized})`);
  //       }
  //   });
  // }).catch(err => console.error('Erro ao listar grupos:', err));
});

// Responde às mensagens
client.on('message_create', async (message) => {
  
  // if (message.body === 'Daniel Alencar Penha Carvalho') {
  //   message.reply('Opa! Como posso lhe ajudar hoje?');
  // } else if (message.body === 'Obrigado Daniel!') {
  //   message.reply('De nada! Precisando, estamos aí!');
  // }
  
  // Pegar mensagens anteriores
  
  
  const regex = /DAI:\s(.+)/;
  const match = message.body.match(regex);
  if(match) {
    let previousMessages = await readAndFormatConversation('chats/chat.json');

    let allMessage = `Responda a conversa a seguir como se estivesse em um chat com outra(s) pessoa(s).(se não souber com quem está conversando, chame a pessoa de forma genérica):\n
      
    MENSAGENS ANTERIORES:
    ${previousMessages}
    
    MENSAGEM ATUAL:
    Pessoa: ${match[1]}`;

    const replyMessage = await generate(allMessage);
    message.reply(replyMessage);
  }
    
  // // Funções do BOT
  // // Usando regex para extrair nome e valor
  // const regex = /\/DAI (.+?):\s*(\d+(?:[.,]\d+)?)/;
  // const match = message.body.match(regex);
  
  // if (match) {
  //   const nome = match[1].trim();
  //   // Substitui ',' por '.' para garantir 
  //   // que o valor decimal seja interpretado corretamente
  //   const valor = parseFloat(match[2].replace(',', '.'));
  
  //   console.log("Nome:", nome);
  //   console.log("Valor:", valor);
  
  //   // Atualiza a lista
  //   await atualizarOuAdicionarItem(nome, valor);
  //   // Ordenar a lista
  //   await ordenarArquivoJSON();
  //   // Manda a mensagem formatada para o grupo
  //   const returnMessage = await formatarMensagem();
  //   message.reply(returnMessage);
});

// Inicializa o cliente
client.initialize();