import fs from 'fs-extra';

// Função para ler e formatar a conversa
export async function readAndFormatConversation(path) {

  let message = "";
  // Lê o arquivo JSON
  const data = await fs.readFile(path, 'utf8');

  // Converte a string JSON para um objeto JavaScript
  const messages = JSON.parse(data);

  // Formata as mensagens em uma string legível
  let formattedConversation = '';
  messages.forEach(message => {
    const { sender, text } = message;
    formattedConversation += `${sender}: ${text}\n`;
  });

  // Exibe a conversa formatada
  message = formattedConversation;

  return message;
}
