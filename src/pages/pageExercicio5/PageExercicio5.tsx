import Navbar from "../../Components/ui/navbar/Navbar";
import Exercicio5 from "../../Components/common/exercicio5/Exercicio5";
import styles from "./PageExercicio5.module.css";

export default function PageExercicio5() {
    return (
        <div>
            <Navbar />
            <div className={styles.page}>
                <Exercicio5 />
            </div>
        </div>
    )
}