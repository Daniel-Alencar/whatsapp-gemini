import fs from 'fs-extra';
import _ from 'lodash';

// Caminho para o arquivo JSON
const filePath = 'ranking.json';

// Função para ler e ordenar o arquivo JSON
export default async function ordenarArquivoJSON() {
  try {
    // Ler o conteúdo do arquivo JSON
    const data = await fs.readFile(filePath, 'utf8');
    const lista = JSON.parse(data);

    // Ordenar a lista com base no valor 'value'
    const listaOrdenada = _.orderBy(lista, ['value'], ['desc']);

    // Salvar a lista ordenada de volta no arquivo JSON
    await fs.writeFile(filePath, JSON.stringify(listaOrdenada, null, 2));

    console.log('Lista ordenada e salva com sucesso!');
  } catch (err) {
    console.error('Erro ao ordenar e salvar o arquivo:', err);
  }
}
