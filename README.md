# React Calculator - Exercícios de Ciclo de Vida com useEffect

Este projeto foi criado como parte de um exercício para aprender sobre o ciclo de vida de componentes em React, utilizando o hook `useEffect` e `useState`. A aplicação contém diversos componentes interativos que demonstram como gerenciar e atualizar o estado dentro de um componente React, bem como sincronizar com o Local Storage e lidar com eventos de DOM como o redimensionamento da janela.
![image](https://github.com/user-attachments/assets/728193f0-b5f3-48f9-b9ac-f0dedb9735c6)


## Estrutura do Projeto

O projeto segue a seguinte estrutura de diretórios:

```bash
project-root/
├── public/
│   └── index.html        # Arquivo HTML principal fornecido pelo React.
├── src/
│   ├── components/       # Componentes React individuais.
│   │   ├── 1-TitleUpdater.js
│   │   ├── 2-WindowSize.js
│   │   ├── 3-PersistentCounter.js
│   │   ├── 4-RealTimeClock.js
│   │   ├── 5-ToggleText.js
│   │   └── 6-LimitedCounter.js
│   ├── styles/           # Arquivos CSS para estilização.
│   │   ├── App.css
│   │   └── Calculator.css
│   ├── App.js            # Componente principal que gerencia as rotas.
│   ├── index.js          # Ponto de entrada da aplicação React.
│   └── assets/           # Recursos estáticos, como imagens ou ícones.
│       └── icons/        # Ícones personalizados (se necessário).
│           └── calculator.png
├── package.json          # Configurações do projeto e dependências.
├── .gitignore            # Arquivos ou diretórios a serem ignorados pelo Git.
└── README.md
```

## Funcionalidades

### 1. **Atualização de Título com `useEffect`**
   - O título da aba do navegador é atualizado conforme o usuário interage com o componente, incrementando ou decrementando um número exibido.
   - **Component**: `TitleUpdater`

### 2. **Monitoramento de Largura da Janela**
   - A largura da janela do navegador é monitorada e exibida na tela, sendo atualizada em tempo real sempre que a janela for redimensionada.
   - **Component**: `WindowSize`

### 3. **Sincronização de Estado com Local Storage**
   - O valor de um contador é armazenado no Local Storage, de forma que ele persista entre as sessões do navegador.
   - **Component**: `PersistentCounter`

### 4. **Relógio em Tempo Real**
   - Um relógio digital exibe a hora atual, atualizando-se a cada segundo. O intervalo é limpo ao desmontar o componente para evitar vazamentos de memória.
   - **Component**: `RealTimeClock`

### 5. **Exibir/Mostrar Texto**
   - Um botão permite alternar entre mostrar ou esconder um texto, alterando a visibilidade do mesmo.
   - **Component**: `ToggleText`

### 6. **Contador com Limite**
   - Um contador é exibido e incrementado/decrementado por meio de botões. Existe um limite de 10 para o contador, e uma mensagem é mostrada quando o limite é atingido.
   - **Component**: `LimitedCounter`

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/teofilonicolau/react-calculator.git

```
2. Navegue até o diretório do projeto:
 ```bash
   cd ciclo-vida-react1
```
3. Instale as dependências:
   
```bash
   npm install

```

4. Instale tambem:

```bash
   npm install react-router-dom react-icons
```
5. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev

```
6. Isso iniciará o servidor de desenvolvimento e você poderá acessar o projeto no seu navegador em http://localhost:5173.




