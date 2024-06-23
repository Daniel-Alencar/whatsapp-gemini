import fs from 'fs-extra';

const filePath = 'ranking.json';

// Função para atualizar ou adicionar item no arquivo JSON
export default async function atualizarOuAdicionarItem(name, value) {
    try {
        // Ler o conteúdo do arquivo JSON
        const data = await fs.readFile(filePath, 'utf8');
        let lista = JSON.parse(data);

        // Verificar se o nome já existe na lista
        const index = lista.findIndex(item => item.name === name);

        if (index !== -1) {
            // Se existir, atualizar o 'value'
            // Novo valor para ser atualizado
            lista[index].value = Number(value);
            console.log(`Item '${name}' encontrado e atualizado.`);
        } else {
            // Se não existir, adicionar um novo item
            const novoItem = {
                name: name,
                // Valor inicial para um novo item
                value: Number(value)
            };
            lista.push(novoItem);
            console.log(`Item '${name}' não encontrado, novo item adicionado.`);
        }

        // Salvar a lista atualizada de volta no arquivo JSON
        await fs.writeFile(filePath, JSON.stringify(lista, null, 2));

        console.log('Lista atualizada e salva com sucesso!');
    } catch (err) {
        console.error('Erro ao atualizar ou adicionar item:', err);
    }
}
