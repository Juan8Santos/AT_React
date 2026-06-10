import type { DadosFormulario } from "../../../types/dadosFormularioTypes";
import styles from "../exercicio9/Exercicio9.module.css";
import { useState } from "react";
import { formatarTelefone } from "../../../utils/Utils";

export default function Exercicio10() {

    const [dadosForm, setDadosForm] = useState<DadosFormulario>({
        nome: "",
        email: "",
        telefone: ""
    });

    const [isVisivel, setIsVisivel] = useState<boolean>(false)

    const [erro, setErro] = useState<string>("")

    const dadosFormatados = {
        ...dadosForm,
        telefone: dadosForm.telefone
            ? formatarTelefone(dadosForm.telefone)
            : ""
    };

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setDadosForm(() => ({
            ...dadosForm,
            [name]: value
        }));
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        verificacao()
    }

    function verificacao() {
        if (!dadosForm.nome.trim()) {
            setErro("* Nome é obrigatório!");
            setIsVisivel(false);
            return;
        }

        if (!dadosForm.email.trim()) {
            setErro("* Email é obrigatório!");
            setIsVisivel(false);
            return;
        }

        if (
            dadosForm.telefone.trim() &&
            !/^\d{11}$/.test(dadosForm.telefone)
        ) {
            setErro("* O telefone deve possuir 11 dígitos!");
            setIsVisivel(false);
            return;
        }

        setErro("");
        setIsVisivel(true);
    }

    return (
        <div className={styles.container}>
            <h1>Exercicio 10</h1>
            <p style={{marginTop: "10px"}}>Formulario de cadastro</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" placeholder="Nome" name="nome" value={dadosForm.nome} onChange={handleInputChange} />
                <input type="email" placeholder="Email" name="email" value={dadosForm.email} onChange={handleInputChange} />
                <input type="number" placeholder="Telefone" name="telefone" value={dadosForm.telefone} onChange={handleInputChange} />
                <button type="submit" className={styles.btn}>Cadastrar</button>
                { erro.trim() != "" && <p style={{color: "red", fontSize: "14px", marginTop: "15px"}}>{erro}</p>}
            </form>
            { isVisivel &&
                <pre style={{marginTop: "20px", textAlign: "left"}}>
                    {JSON.stringify(dadosFormatados, null, 2)}
                </pre>
            }
        </div>
    )
}