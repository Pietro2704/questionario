# Questionário em ReactJS

## Passo 1: Criando o Projeto e Instalando Dependencias

```bash
npm create vite@latest nome-projeto --template react
```

```bash
cd nome-projeto
```

```bash
npm intall
```

```bash
npm install bootstrap@5.3.7
```

## Passo 2: Iniciando um repositório

```bash
git config --global user.name = "Seu Nome"
git config --global user.email = "seu@email.com"
```

```bash
git config user.name
git config user.email
```

```bash
git init
```

```bash
git add .
```

```bash
git commit -m 'o começo'
```

```bash
git remote add origin https://github.com/Pietro2704/questionario.git
```

```bash
git push -u origin main
```

## Passo 3: Criar as pastas components e data

- clique com o botão direito na pasta **src** 

- crie a pasta **'data'**, onde irá armazenar uma lista de perguntas

- crie a pasta **components** onde irá ter nossos componentes

```bash
git add .
```

```bash
git commit -m 'passo 3'
```

```bash
git push origin main
```

## Passo 4: Criar as perguntas

Na pasta data, vamos colocar um arquivo JS.

No arquivo, vamos colocar uma lista de objetos. Cada objeto sendo uma pergunta.

```javascript
export const perguntas = [
    // Pergunta 1
    {
        question: "Qual a linguagem é usada com React para estilizar componentes?",
        options:["HTML", "CSS", "Java", "Python"],
        anwer: "CSS"
    }

    // Pergunta 2
]
```

```bash
git add .
```

```bash
git commit -m 'passo 4'
```

```bash
git push origin main
```

## Passo 5: Criar o componente da Pergunta

Na pasta components, vamos colocar um arquivo jsx.

No arquivo, vamos criar um card para nossa pergunta.

```bash
git add .
```

```bash
git commit -m 'passo 5'
```

```bash
git push origin main
```

## Passo 6: Criar o componente do Resultado

Na pasta components, vamos colocar um arquivo jsx.

No arquivo, vamos criar um card para mostrar o resultado do jogador.

```bash
git add .
```

```bash
git commit -m 'passo 6'
```

```bash
git push origin main
```

## Passo 7: Criar o App.jsx

Agora, com nosso projeto pronto, basta apenas colocar no arquivo App.jsx (Nosso Componente principal)

```bash
git add .
```

```bash
git commit -m 'passo 6'
```

```bash
git push origin main
```

## Passo 8: Importar o bootstrap no main.jsx

No arquivo main.jsx, vamos importar o bootstrap que foi o framework utilizado para estilizar

```bash
git add .
```

```bash
git commit -m 'passo 6'
```

```bash
git push origin main
```

## Passo 9: Testar

```bash
npm run dev
```