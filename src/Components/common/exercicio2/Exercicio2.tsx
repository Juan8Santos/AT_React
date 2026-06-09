import style from "./Exercicio2.module.css";

export default function Exercicio2() {
    return (
        <div className={style.container}>
            <h1>Exercicio 2</h1>
            <p>Aperte o botão para executar uma ação.</p>
            <button onClick={() => alert("Ação executada!")} className={style.btn}>Executar</button>
        </div>
    )
}