import { useState } from "react"
import React from "./Calculadora.css"

const Calculadora = () => {

    const [numero, setNumero] = useState(0)
    const [numeroS, setNumeroS] = useState(0)
    const [operador, setOperador] = useState()

    function inputNumero(valor){
        var num = valor.target.value
        if(numero === 0)
        {
            setNumero(num)
        }else{
            setNumero(numero + num)
        }
    }

    function limparDisplay(){
        setNumero(0)
    }

    function trocarSinal(){
        if(numero>0)
        {
            setNumero(-numero)
        }
        else{
            setNumero(Math.abs(numero))
        }
    }

    function porcentagem(){
        setNumero(numero/100)
    }

    function operacao(opera){
        var operaTipo = opera.target.value
    }



    return(
        <div className="calculadora">
            <div className="container">
                <div className="resultado">
                    <h1>{numero}</h1>
                </div>
                <div className="esp">
                    <button className="botaoEsp" onClick={limparDisplay}>AC</button>
                    <button className="botaoEsp" onClick={trocarSinal} >+/-</button>
                    <button className="botaoEsp" onClick={porcentagem}>%</button>
                    <button className="botaoNum" onClick={inputNumero} value={7}>7</button>
                    <button className="botaoNum" onClick={inputNumero} value={8}>8</button>
                    <button className="botaoNum" onClick={inputNumero} value={9}>9</button>
                    <button className="botaoNum" onClick={inputNumero} value={4}>4</button>
                    <button className="botaoNum" onClick={inputNumero} value={5}>5</button>
                    <button className="botaoNum" onClick={inputNumero} value={6}>6</button>
                    <button className="botaoNum" onClick={inputNumero} value={1}>1</button>
                    <button className="botaoNum" onClick={inputNumero} value={2}>2</button>
                    <button className="botaoNum" onClick={inputNumero} value={3}>3</button>
                    <button className="botaoNum " onClick={inputNumero} value={0}>0</button>
                    <button className="botaoNum" onClick={inputNumero} value={'.'}>,</button>
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