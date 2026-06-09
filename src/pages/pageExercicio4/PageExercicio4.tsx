import Navbar from "../../Components/ui/navbar/Navbar";
import Exercicio4 from "../../Components/common/exercicio4/Exercicio4";
import styles from "./PageExercicio4.module.css";

export default function PageExercicio4() {
    return (
        <div>
            <Navbar />
            <div className={styles.page}>
                <Exercicio4/>
            </div>
        </div>
    )
}