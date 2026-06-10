import Exercicio6 from "../../Components/common/exercicio6/Exercicio6";
import Navbar from "../../Components/ui/navbar/Navbar";

interface Props {
    paisInicial?: string;
}

export default function PageExercicio6({ paisInicial }: Props) {
    return (
        <div>
            <Navbar />
            <div className="page">
                <Exercicio6 paisInicial={paisInicial} />
            </div>
        </div>
    );
}