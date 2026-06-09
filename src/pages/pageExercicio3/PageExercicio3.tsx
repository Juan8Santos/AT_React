import Navbar from "../../Components/ui/navbar/Navbar";
import Exercicio3 from "../../Components/common/exercicio3/Exercicio3";
import styles from "./PageExercicio3.module.css";

export default function PageExercicio3() {
    return (
        <div>
            <Navbar />
            <div className={styles.page}>
                <Exercicio3 />
            </div>
        </div>
    )
}