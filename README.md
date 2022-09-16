# NLW eSports Mobile ![Badge](https://img.shields.io/static/v1?label=expo-cli&message=5.4.8&color=white&style=flat&logo=EXPO) ![Badge](https://img.shields.io/static/v1?label=react&message=v18.2.0&color=blue&style=flat&logo=REACT) ![Badge](https://img.shields.io/static/v1?label=typescript&message=v4.7.4&color=blue&style=flat&logo=TYPESCRIPT)
 
<br />
<p align="center">
  <img src="src/assets/logo-nlw-esports@2x.png" />
</p>
<br />

Aplicativo mobile para encontrar um duo e se conectar para jogar juntos. 
É possível encontrar e se conectar a outros jogadores para poderem jogarem juntos.

Durante o evento do NLW da Rocketseat, essa foi a aplicação a ser desenvolvida durante o evento.
E ao decorrer dos 6 dias de evento, este foi o resultado final do aplicativo mobile.

Além do atual projeto, também foi feito uma aplicação para a web e um backend.

- **[NLW eSports Web](https://github.com/ImFelippe365/nlw-esports-web)**
- **[NLW eSports Server](https://github.com/ImFelippe365/nlw-esports-server)**

## ⚠️ Importante

O projeto foi integrado utilizando a API que desenvolvi durante o evento. É necessário que ela esteja em execução durante o uso dessa aplicação para que seja fornecido as rotas de jogos, anúncios e criação de anúncios. Você pode encontra-la **[clicando aqui](https://github.com/ImFelippe365/nlw-esports-server)**

Para isso, é necessário realizar uma pequena configuração dentro do projeto.
Basta editar o arquivo ``requestConfig.ts`` da pasta ``services`` para o seu IP e a porta da API (que inicialmente é 3333).
Exemplo: ``http://SEU_IP:PORT/``

## Tecnologias utilizadas

- React
- Expo
- TypeScript

## Futuras melhorias
- Opção de criar alerta para novos anúncios de um jogo
- Melhorar sistema de notificação
- Autenticação

## Demo
Caso queira ver mais de perto, basta instalar o **[Expo Go](https://expo.dev/client)** no seu celular e escanear o QR Code abaixo. 
Funciona tanto para Android quanto iOS.

**Ressaltando que a demo abaixo é uma aplicação estática, não faz nenhuma requisição de APIs**, já que não hospedei o back-end em nenhum lugar, não há como o app publicado se conectar com uma API local que não fosse a minha (com minha URL configurada). Quem sabe no futuro né?

É apenas uma demonstração de como ficou o aplicativo. :)

<p align="center">
<img src="https://user-images.githubusercontent.com/42660829/190726407-a060dbbf-5bbd-4e49-9524-a19ab9779e8d.png" width="250" />
</p>

## Instalação

Para instalar e usar pelo repositório, clone o repositório e instale as dependências usando o seguinte comando no diretório raiz.

```
npm install
```

ou se preferir:

```
yarn install
```

Depois você pode utilizar ``npm start`` ou ``yarn start`` para iniciar o projeto e rodar num celular localmente.

## Capturas de tela

<p align="center">
<img src="https://user-images.githubusercontent.com/42660829/190725817-d2a188f0-3a6e-4bc4-93ff-ea5ba1276e85.png" width="300" /> <img src="https://user-images.githubusercontent.com/42660829/190725807-671db00e-0fd3-4fd0-bfd5-61122dac749e.png" width="300" /> <img src="https://user-images.githubusercontent.com/42660829/190725813-3bc2b7a6-dafd-4c69-b799-9eed21bff248.png" width="300" /> 
</p>

