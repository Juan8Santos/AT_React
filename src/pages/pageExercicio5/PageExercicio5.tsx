import Navbar from "../../Components/ui/navbar/Navbar";
import Exercicio5 from "../../Components/common/exercicio5/Exercicio5";

interface Props {
    valorInicial?: boolean;
}

export default function PageExercicio5({ valorInicial }: Props) {
    return (
        <div>
            <Navbar />
            <div className="page">
                <Exercicio5 valorInicial={valorInicial} />
            </div>
        </div>
    );
}