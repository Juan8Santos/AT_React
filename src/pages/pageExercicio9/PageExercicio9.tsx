import Navbar from "../../Components/ui/navbar/Navbar";
import Exercicio9 from "../../Components/common/exercicio9/Exercicio9";
import type { DadosFormulario } from "../../types/dadosFormularioTypes";

interface Props {
    dadosIniciais?: DadosFormulario;
}

export default function PageExercicio9({ dadosIniciais }: Props) {
    return (
        <div>
            <Navbar />
            <div className="page">
                <Exercicio9 dadosIniciais={dadosIniciais} />
            </div>
        </div>
    );
}