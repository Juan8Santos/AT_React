import { faker } from "@faker-js/faker";
import { useState } from "react";
import styles from "./Exercicio7.module.css";

import ProductCard from "../productCard/ProductCard";

const produtos = [];

for (let i = 0; i < 100; i++) {
  produtos.push({
    id: faker.string.uuid(),
    nome: faker.commerce.productName(),
    img: faker.image.url(),
    preco: Number(faker.commerce.price())
  });
}

export function Exercicio7() {

    const [busca, setBusca] = useState<string>("");

    const filtro = produtos.filter((produto) =>
        produto.nome.toLowerCase().startsWith(busca.toLowerCase())
    );
    
    return (
        <div className={styles.container}>
            <h1>Exercicio 7</h1>
            <input
                type="text"
                placeholder="Digite o nome do produto..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className={styles.inputBusca}
            />
            <ul className={styles.listaProdutos}>
                {filtro.slice(0, 20).map((produto) => (
                    <ProductCard
                        key={produto.id}
                        nome={produto.nome}
                        img={produto.img}
                        preco={produto.preco}
                    />
                ))}
            </ul>
        </div>
    )
}