import type { DadosFormulario } from "../../../types/dadosFormularioTypes";
import styles from "./Exercicio9.module.css";
import { useState } from "react";

interface Props {
    dadosIniciais?: DadosFormulario;
}

export default function Exercicio9({ dadosIniciais }: Props) {

    const [dadosForm, setDadosForm] = useState<DadosFormulario>(
        dadosIniciais || {
            nome: "",
            email: "",
            telefone: ""
        }
    );


    const [isVisivel, setIsVisivel] = useState<boolean>(false)

    const [erro, setErro] = useState<string>("")

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

    function verificacao(){
        if (dadosForm.nome.trim() != "" && dadosForm.email.trim() != "" && dadosForm.telefone.trim() != "") {
            setErro("");
            setIsVisivel(true);
        } else {
            setErro("* Todos os campos precisam estar preenchidos!");
            setIsVisivel(false);
        }
    }

    return (
        <div className={styles.container}>
            <h1>Exercicio 9</h1>
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
                    {JSON.stringify(dadosForm, null, 2)}
                </pre>
            }
        </div>
    )
}