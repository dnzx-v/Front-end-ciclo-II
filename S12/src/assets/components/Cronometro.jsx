import { useState, useRef } from "react"
export default function Cronometro() {
    const [valor, setvalor] = useState(0)
    const intervalo = useRef (null);
    function iniciar()
    {
        if (intervalo.current != null) return;
        intervalo.current = setInterval(
            () =>{
                setvalor((valorAnterior) => valorAnterior + 1);
            }
            ,1000)
    }

    function detener()
    {
        clearInterval(intervalo.current);
        intervalo.current = null;
    }

    function reiniciar()
    {
        setvalor(0);
        clearInterval.current = null;
        setvalor(0);
    }
    return (
        <>
        <h2>Cronometro</h2>
        <h2>{valor}</h2>
        <button onClick={iniciar}>Iniciar</button>
        <button onClick={detener}>Detener</button>
        <button onClick={reiniciar}>Reiniciar</button>
        </>
    )
}