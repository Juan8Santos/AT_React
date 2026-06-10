import styles from "../exercicio9/Exercicio9.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import type { DadosFormulario } from "../../../types/dadosFormularioTypes";
import { formatarTelefone } from "../../../utils/Utils";

export default function Exercicio12() {

    const [dados, setDados] = useState<DadosFormulario | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<DadosFormulario>();

    const dadosFormatados = dados
        ? {
            ...dados,
            telefone: dados.telefone ? formatarTelefone(dados.telefone) : ""
        }
        : null;

    function onSubmit(data: DadosFormulario) {
        setDados(data);
    }

    return (
        <div className={styles.container}>
            <h1>Exercicio 12</h1>
            <p>Formulario de cadastro</p>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <input type="text" placeholder="Nome" {...register("nome", { required: "* Nome é obrigatório!" })} />
                {errors.nome && <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>{errors.nome.message}</p>}
                <input type="email" placeholder="Email" {...register("email", { required: "* Email é obrigatório!" })} />
                {errors.email && <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>{errors.email.message}</p>}
                <input type="number" placeholder="Telefone" {...register("telefone", {
                    validate: (value) =>
                        value === "" ||
                        /^\d{11}$/.test(value) ||
                        "* O telefone deve possuir 11 dígitos!"
                })} />
                {errors.telefone && <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>{errors.telefone.message}</p>}
                <button type="submit" className={styles.btn}>Cadastrar</button>
            </form>
            {dadosFormatados && (
                <pre style={{ marginTop: "20px", textAlign: "left" }}>
                    {JSON.stringify(dadosFormatados, null, 2)}
                </pre>
            )}
        </div>
    );
}