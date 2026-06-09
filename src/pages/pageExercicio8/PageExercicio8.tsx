import Exercicio8 from "../../Components/common/exercicio8/Exercicio8";
import Navbar from "../../Components/ui/navbar/Navbar";
import styles from "./PageExercicio8.module.css";

export default function PageExercicio8() {
    return (
        <div>
            <Navbar />
            <div className={styles.page}>
                <Exercicio8 />
            </div>
        </div>
    )
}