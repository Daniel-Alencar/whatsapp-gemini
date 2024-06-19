const fs = require('fs-extra');

const filePath = 'ranking.json';

// Função para ler o arquivo JSON e formatar a saída
async function formatarMensagem() {
  let message = "";
  try {
    // Ler o conteúdo do arquivo JSON
    const data = await fs.readFile(filePath, 'utf8');
    const lista = JSON.parse(data);

    // Ordenar a lista com base no 'value' (opcional)
    lista.sort((a, b) => b.value - a.value);

    // Formatar e imprimir a saída conforme solicitado
    message = message.concat("Ranking Duolingo:\n");
    lista.forEach((item, index) => {
      const formattedValue = item.value.toFixed(1) + 'k';
      message = message.concat(`${index + 1}. ${item.name}: ${formattedValue}\n`)
    });

    console.log(message);
    return message;

  } catch (err) {
    console.error('Erro ao ler e formatar o arquivo:', err);
    return "";
  }
}

module.exports = formatarMensagem;