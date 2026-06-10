import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../exercicio9/Exercicio9.module.css";

interface DadosFormulario {
    nome: string;
    email: string;
    telefone: string;
}

export default function Exercicio11() {
    const [dados, setDados] = useState<DadosFormulario | null>(null);

    const { register, handleSubmit } = useForm<DadosFormulario>();

    function onSubmit(data: DadosFormulario) {
        setDados(data);
    }

    return (
        <div className={styles.container}>
            <h1>Exercício 11</h1>
            <p style={{ marginTop: "10px" }}>Formulário usando react-hook-form</p>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <input type="text" placeholder="Nome" {...register("nome")} />
                <input type="email" placeholder="Email" {...register("email")} />
                <input type="number" placeholder="Telefone" {...register("telefone")} />
                <button type="submit" className={styles.btn}>Cadastrar</button>
            </form>
            {dados && (
                <pre style={{ marginTop: "20px", textAlign: "left"}}>
                    {JSON.stringify(dados, null, 2)}
                </pre>
            )}
        </div>
    );
}