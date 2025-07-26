import React from "react";

function Resultado({resultado, total, onRestart}){
    return (
        <div className="text-center">
            <h2>Quiz Finalizado</h2>
            <p>Você acertou <strong>{resultado} de {total}</strong></p>
            <button className="btn btn-success mt-3" onClick={onRestart}>Jogar novamente</button>
        </div>
    )
}

export default Resultado