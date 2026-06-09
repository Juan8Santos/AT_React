import Navbar from "../../Components/ui/navbar/Navbar";
import styles from "./HomePage.module.css";

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <div className={styles.page}>
                <div className={styles.container}>
                    <h1>Bem vindo ao meu AT</h1>
                    <p>Esta é a página inicial, utilize o menu para navegar entre os exercicios.</p>
                </div>
            </div>
        </div>
    )
}