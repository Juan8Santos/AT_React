import Exercicio6 from "../../Components/common/exercicio6/Exercicio6";
import Navbar from "../../Components/ui/navbar/Navbar";
import styles from "./PageExercicio6.module.css";

export default function PageExercicio6() {
    return (
        <div>
            <Navbar />
            <div className={styles.page}>
                <Exercicio6 />
            </div>
        </div>
    )
}