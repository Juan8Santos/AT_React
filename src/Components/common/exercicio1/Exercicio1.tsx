import styles from "./Exercicio1.module.css";
import { useState } from "react";

interface Exercicio1Props {
    pergunta: string;
    resposta: string;
    numExercicio: number;
}

export default function Exercicio1({ pergunta, resposta, numExercicio = 1 }: Exercicio1Props) {

    const [respostaVisivel, setRespostaVisivel] = useState<boolean>(false);
    return (
        <div className={styles.container}>
            <h1>Exercicio {numExercicio}</h1>
            <h3 style={{ marginTop: "10px" }}>{pergunta}</h3>
            <p style={{ display: respostaVisivel ? "block" : "none" }}>
                {resposta}
            </p>
            <button 
                onClick={() => setRespostaVisivel(!respostaVisivel)}
                className={styles.btn}
            >
                {respostaVisivel ? "Ocultar Resposta" : "Revelar Resposta"}
            </button>
        </div>
    )
}