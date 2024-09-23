## BOT de Whatsapp para conversar com o GEMINI

Você sempre quis usar uma IA generativa integrada ao seu whatsapp? Não? Mesmo assim, AGORA VOCÊ PODE!

Essa é uma aplicação NodeJs que permite requisições diretas a Inteligência Artificial Generativa do Google, o Gemini. Você deve vincular o seu  whatsapp a aplicação para usar a ferramenta. Uma vez vinculado, qualquer pessoa que envie uma mensagem que tenha o formato /DAI: <mensagem>, a mensagem será redirecionada para o Gemini e uma resposta automática será mandada como se fosse você que tivesse enviado.

Além do mais, os chats com o Gemini são guardados automaticamente na aplicação através de arquivos JSON. Dessa forma, a aplicação guarda o contexto das mensagens gerando respostas mais elaboradas a cada requisição.

## Uso da aplicação

Para que você possa usar a aplicação e finalmente ter acesso ao Gemini no whatsapp, realize os passos abaixo.

Baixe o repositório.
```
git clone
cd
npm install

```
Após isso, você deve somente configurar a chave do GEMINI em sua conta do google.
[https://ai.google.dev/gemini-api/docs/api-key](Gerar chave Gemini)


Escolha um projeto


Ao criar a chave, crie um arquivo .env na aplicação e coloque a sua chave nela no seguinte formato.


Pronto, você já configurou o projeto.

Agora, você só precisa executá-lo com o comando abaixo:
```
npm run start
```

Um código de QR code deve aparecer na tela, nesse momento você deve abrir o whatsapp em seu celular e vincular o dispositivo (seu computador) whatsapp. Escaneie o QR code e aguarde a sincronização de mensagens. Depois de um tempo, no console, deve aparecer a mensagem "Client is ready!". Nesse caso, você configurou com sucesso o projeto. Sempre que alguém lhe enviar uma mensagem /DAI, o Gemini responderá por você!
