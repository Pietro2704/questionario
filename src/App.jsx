import React from 'react'
import { useState } from 'react'

// importar os componentes
import CardPergunta from './components/CardPergunta'
import Resultado from './components/Resultado'

// importar as perguntas
import { perguntas } from './data/perguntas'

function App() {
  // Criar a variavel de pontos
  const [pontuacao, setPontuacao] = useState(0)
  // Criar variavel para ser o index da lista de perguntas
  const [index, setIndex] = useState(0)
  // Criar variavel para terminar o jogo
  const [acabou, setAcabou] = useState(false)

  // função que irá fazer o programa
  const verificar = (isCorrect) => {
    // ver se a pessoa acertou
    if (isCorrect) {
      setPontuacao(pontuacao + 1)
    }

    // Se tiver, passar para o proximo card
    const proximo = index + 1
    if (proximo < perguntas.length) {
      setIndex(proximo)
    } else {
      setAcabou(true)
    }
  }

  // Criar o Restart do Jogo
  const restart = () => {
    setPontuacao(0)
    setIndex(0)
    setAcabou(false)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Mini Quiz React</h1>
      {/* Se não acabou o jogo, mostrar o card da pergunta. Senão mostrar o resultado */}


      {!acabou ?
        (<CardPergunta
          numPergunta={index + 1}
          totalPerguntas={perguntas.length}
          pergunta={perguntas[index]}
          onAnswer={verificar} />)
        :
        (<Resultado
          resultado={pontuacao}
          total={perguntas.length}
          onRestart={restart} />)}
    </div>
  )
}

export default App
