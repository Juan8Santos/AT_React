import { getPaises } from "../../../services/paises";
import { useEffect, useState } from "react";
import styles from "./Exercicio6.module.css";

import type { Paises } from "../../../types/paisesTypes";

interface Props {
    paisInicial?: string;
}

export default function Exercicio6({ paisInicial = "" }: Props) {
    const [paises, setPaises] = useState<Paises[]>([]);
    const [paisEscolhido, setPaisEscolhido] = useState<string>(paisInicial);

    useEffect(() => {
        async function carregarPaises() {
            try {
                const data = await getPaises();

                ordenarPaises(data);
            } catch (erro) {
                console.error(erro);
            }
        }

        carregarPaises();
    }, []);

    function ordenarPaises(data: Paises[]) {
        const paisesOrdenados = [...data].sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
        );

        setPaises(paisesOrdenados);
    }

    return (
        <div className={styles.container}>
            <h1>Exercicio 6</h1>
            <select className={styles.selectInput} onChange={(e) => setPaisEscolhido(e.target.value)} value={paisEscolhido}>
                <option value="">Selecione um país</option>
                {paises.map((country) => (
                    <option key={country.cca3}>
                    {country.name.common}
                    </option>
                ))}
            </select>
            <p style={{marginTop: "10px"}}>
                Pais escolhido: <span style={{color: "var(--theme-color)"}}>
                    {paisEscolhido || "Nenhum"}
                </span>
            </p>
        </div>
    )
}