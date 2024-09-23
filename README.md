## BOT de Whatsapp para conversar com o Gemini

Você sempre quis usar uma IA generativa integrada ao seu whatsapp? Não? Mesmo assim, AGORA VOCÊ PODE!

Essa é uma aplicação NodeJs que permite requisições diretas a Inteligência Artificial Generativa do Google, o Gemini. Você deve vincular o seu  whatsapp a aplicação para usar a ferramenta. Uma vez vinculado, qualquer pessoa que envie uma mensagem que tenha o formato "/DAI: mensagem", a mensagem será redirecionada para o Gemini e uma resposta automática será enviada como se fosse você que tivesse enviado.

Além do mais, os chats com o Gemini são guardados automaticamente na aplicação através de arquivos JSON. Dessa forma, a aplicação guarda o contexto das mensagens gerando respostas mais elaboradas a cada requisição.

## Preparação da aplicação

Para que você possa usar a aplicação e finalmente ter acesso ao Gemini no whatsapp, realize os passos abaixo.

Abra o terminal de seu computador e baixe o repositório:
```
git clone https://github.com/Daniel-Alencar/whatsapp-gemini
```
Mova para a pasta do projeto
```
cd whatsapp-gemini
```
Instale as dependências do projeto
```
npm install
```

Após isso, você deve somente configurar a chave do GEMINI em sua conta do google.
[Gerar chave Gemini](https://ai.google.dev/gemini-api/docs/api-key).

Você passará pelas seguintes etapas:
<p style="display: flex; flex-wrap: wrap; gap: 30px">

  Clique em "Gerar uma chave de API".
  <img width="700" alt="CreateKey" title="#CreateKey" src="./assets/create_key0.png" />
  
  Clique em "Criar chave de API".
  <img width="700" alt="CreateKey" title="#CreateKey" src="./assets/create_key1.png" />

  Imagem de chave Gemini criada.
  <img width="700" alt="CreateKey" title="#CreateKey" src="./assets/create_key2.png" />

  OBS.: Passos adicionais podem ser necessários para a criação da chave Gemini. Busque outras fontes para criar sua chave, se for esse o caso.
</p>

Ao criar a chave, crie um arquivo '.env' na aplicação e coloque a sua chave nela no seguinte formato.

```
API_KEY=AIzaSyCqm6L8yr1ota0pPZ3ATUU62XJW7bgK8uE
```

<p style="display: flex; flex-wrap: wrap;">
  <img width="700" alt="QRcode" title="#QRcode" src="./assets/env.png" />
</p>

Pronto, você já configurou o projeto.

Agora, você só precisa executá-lo com o comando abaixo.
```
npm run start
```

Um código de QR code deve aparecer na tela, nesse momento você deve abrir o whatsapp em seu celular e vincular o dispositivo (seu computador) ao whatsapp.

<p style="display: flex; flex-wrap: wrap;">
  <img width="700" alt="QRcode" title="#QRcode" src="./assets/QRcode.png" />
</p>

Escaneie o QR code e aguarde a sincronização de mensagens. Depois de um tempo, no terminal, deve aparecer a mensagem "Client is ready!". Nesse caso, você configurou com sucesso o projeto. Sempre que alguém lhe enviar uma mensagem /DAI, o Gemini responderá por você!

## Uso da aplicação

