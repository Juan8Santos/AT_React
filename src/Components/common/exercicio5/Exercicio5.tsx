import styles from "./Exercicio5.module.css";
import { useState } from "react";

interface Props {
    valorInicial?: boolean;
}

export default function Exercicio5({ valorInicial = true }: Props) {

    const [isAdmin, setIsAdmin] = useState<boolean>(valorInicial);

    return (
        <div className={styles.container}>
            <h1>Exercicio 5</h1>
            <label className={styles.checkboxLabel}>
                <p>Usuario administrador ?</p>
                <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} className={styles.checkbox} />
            </label>
            <p style={{ marginTop: "20px" }}>
                {isAdmin ? "Bem vindo, admin!" : "Bem vindo, colaborador!"}
            </p>
        </div>
    );
}