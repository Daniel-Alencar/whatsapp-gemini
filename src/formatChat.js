import fs from 'fs-extra';

// Função para ler e formatar a conversa
export async function readAndFormatConversation(from) {

  const path = `chats/${from}.json`;
  let message = "";

  // Verifica se o arquivo existe
  if (!fs.existsSync(path)) {
    // Se o arquivo não existir, cria um novo com um array vazio
    fs.writeFileSync(path, '[]', 'utf8');
  }

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

export async function updateChat(file, from, message) {

  const path = `chats/${file}.json`;

  // Verifica se o arquivo existe
  if (!fs.existsSync(path)) {
    // Se o arquivo não existir, cria um novo com um array vazio
    fs.writeFileSync(path, '[]', 'utf8');
  }

  // Lê o arquivo JSON
  const data = await fs.readFile(path, 'utf8');

  try {
    // Converte a string JSON para um objeto JavaScript
    const messages = JSON.parse(data);

    // Adiciona a nova mensagem ao array existente
    messages.push({
      sender: from,
      text: message
    });

    // Converte o objeto JavaScript atualizado de volta para uma string JSON
    const updatedJsonContent = JSON.stringify(messages, null, 2);

    // Salva o arquivo JSON atualizado
    await fs.writeFile(path, updatedJsonContent, 'utf8');

  } catch (parseErr) {
    console.error('Erro ao analisar o JSON:', parseErr);
  }
}

// await updateChat('file', 'Pessoa', 'minhoca');
// await updateChat('file', 'Eu', 'zabuza');
// await updateChat('file', 'Pessoa', 'O quê');
// await updateChat('file', 'Eu', 'Macarrão');