# Projeto React Native / Expo

## Instalação

1. Instale as dependências

   ```bash
   npm install
   ```

2. Instale as dependências nativas do Expo

   ```bash
   npx expo install
   ```

3. Rode o app com expo e abra-o no aplicativo 'Expo Go' usando o QRCode gerado no terminal.
   ```bash
   npx expo start
   ```

## Arquitetura e decisões

- hooks/ → Contém todos os hooks customizados, isolando a lógica do estado e requisições.

- layouts/ → Layouts principais, facilitando a composição da UI.

- screens/ → Telas que juntam layouts e hooks para formar as páginas da aplicação.

- components/ → Componentes reutilizáveis, separados por função, evitando repetição de código.

### Benefícios da estrutura

1. Reuso de código.

2. Escalabilidade para adicionar novas funcionalidades.

3. Separação clara entre lógica, layout e apresentação, mantendo o código limpo e de fácil manutenção.
