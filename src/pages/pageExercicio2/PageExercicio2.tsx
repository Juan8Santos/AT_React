import Exercicio2 from "../../Components/common/exercicio2/Exercicio2";
import Navbar from "../../Components/ui/navbar/Navbar";
import styles from "./PageExercicio2.module.css";

export default function PageExercicio2() {
    return (
        <div>
            <Navbar />
            <div className={styles.page}>
                <Exercicio2 />
            </div>
        </div>
    )
}