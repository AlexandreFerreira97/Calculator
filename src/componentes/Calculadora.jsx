import React from "./Calculadora.css"

const Calculadora = () => {
    return(
        <div className="calculadora">
            <div className="container">
                <div className="resultado">
                    <h1>rere</h1>
                </div>
                <div className="esp">
                    <button className="botaoEsp">AC</button>
                    <button className="botaoEsp">+/-</button>
                    <button className="botaoEsp">%</button>
                    <button className="botaoNum">7</button>
                    <button className="botaoNum">8</button>
                    <button className="botaoNum">9</button>
                    <button className="botaoNum">4</button>
                    <button className="botaoNum">5</button>
                    <button className="botaoNum">6</button>
                    <button className="botaoNum">1</button>
                    <button className="botaoNum">2</button>
                    <button className="botaoNum">3</button>
                    <button className="botaoNum ">0</button>
                    <button className="botaoNum">,</button>
                </div>

                <div className="op"> 
                    <button className="botaoOp">/</button>
                    <button className="botaoOp" >X</button>
                    <button className="botaoOp">-</button>
                    <button className="botaoOp">+</button>
                    <button className="botaoOp">=</button>
                </div>
            </div>

        </div>

    )
}

export default Calculadora