import styles from "./Exercicio3.module.css";

export default function Exercicio3() {

    function handleClick() {
        alert("Ação executada!");
    }

    return (
        <div className={styles.container}>
            <h1>Exercicio 3</h1>
            <p>Aperte o botão para executar uma ação.</p>
            <button onClick={handleClick} className={styles.btn}>Executar</button>
        </div>
    )
}