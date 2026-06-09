import { Exercicio7 } from "../../Components/common/exercicio7/Exercicio7";
import Navbar from "../../Components/ui/navbar/Navbar";
import styles from "./PageExercicio7.module.css";

export default function PageExercicio7() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <Exercicio7 />
            </div>
        </div>
    )
}