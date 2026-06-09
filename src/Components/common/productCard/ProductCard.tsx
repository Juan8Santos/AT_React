import { truncateString } from "../../../utils/Utils";

import { mockCores } from "../../../mocks/cores.mock";

import styles from "./ProductCard.module.css";

interface ProductCardProps {
  nome: string;
  img: string;
  preco: number;
}

export default function ProductCard({nome,img,preco,}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer} >
        <img src={img} alt={nome} />
      </div>

      <h4>{truncateString(nome, 16)}</h4>

      <div className={styles.secaoPrecoCores}>
        <h4>R$ {preco.toFixed(2)}</h4>

        <div className={styles.secaoCores}>
          {CoresProduto()?.map((cor) => (
            <span
              key={cor}
              style={{
                display: "inline-block",
                height: "15px",
                width: "15px",
                backgroundColor: cor,
                borderRadius: "50%",
              }}
            ></span>
          ))}
        </div>
      </div>

      <button
        className={styles.cardButton}
        onClick={() => alert(`Produto ${nome} adicionado ao carrinho!`) }
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}

function CoresProduto() {
    const arrayCores = [...mockCores];
    const coresAleatorias = arrayCores.sort(() => 0.5 - Math.random()).slice(0, 3);
    return coresAleatorias;
}
