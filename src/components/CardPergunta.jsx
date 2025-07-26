// importar react
import React from "react";

function CardPergunta({numPergunta, totalPerguntas, pergunta, onAnswer}){
    return (

        // Card
        <div className="card">

            {/* Contagem da Pergunta */}
            <div className="card-header">
                Pergunta {numPergunta} de {totalPerguntas}
            </div>

            {/* Título da Pergunta */}
            <div className="card-body">
                <h5 className="card-title">{pergunta.question}</h5>

                {/* As alternativas */}
                <div className="d-grid gap-2">
                    {/* Percorrer minhas opções pegando o índice */}
                    {pergunta.options.map((opcao, index) =>(
                        <button key={index} className="btn btn-outline-primary"
                        onClick={()=>{
                            // funcao de verificar a resposta
                            onAnswer(opcao === pergunta.answer)
                        }}>{opcao}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardPergunta