import Navbar from "../../Components/ui/navbar/Navbar";
import styles from "./PageExercicio1.module.css";
import Exercicio1 from "../../Components/common/exercicio1/Exercicio1";
import { perguntas } from "../../mocks/perguntas.mock";

export default function PageExercicio1() {

    return (
        <div >
            <Navbar />
            <div className={styles.page}>
                <Exercicio1
                    pergunta={perguntas[0].pergunta}
                    resposta={perguntas[0].resposta}
                    numExercicio={perguntas[0].numExercicio}
                />
            </div>
        </div>
    )
}