import Exercicio1 from "../exercicio1/Exercicio1";
import { perguntas } from "../../../mocks/perguntas.mock";

export default function Exercicio4() {
    return (
        <div>
            <Exercicio1
                pergunta={perguntas[1].pergunta}
                resposta={perguntas[1].resposta}
                numExercicio={perguntas[1].numExercicio}
            />
        </div>
    )
}