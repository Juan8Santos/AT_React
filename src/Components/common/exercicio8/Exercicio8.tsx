import { useEffect, useState } from "react";
import { getCategorias } from "../../../services/categorias";
import type { Categoria } from "../../../types/categoriaTypes";
import styles from "./Exercicio8.module.css";

export default function Exercicio8() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<Categoria | null>(null);

  useEffect(() => {
    async function carregarCategorias() {
      const data = await getCategorias();

      setCategorias(data);

      if (data.length > 0) {
        setCategoriaSelecionada(data[0]);
      }
    }

    carregarCategorias();
  }, []);

  function handleCategoria(event: React.ChangeEvent<HTMLSelectElement>) {
    const categoria = categorias.find(
      (categ) => categ.idCategory === event.target.value
    );

    if (categoria) {
      setCategoriaSelecionada(categoria);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Exercicio 8</h1>
      <select onChange={handleCategoria}>
        {categorias.map((categoria) => (
          <option
            key={categoria.idCategory}
            value={categoria.idCategory}
          >
            {categoria.strCategory}
          </option>
        ))}
      </select>
      {categoriaSelecionada && (
        <div className={styles.categoriaInfo}>
          <h2 style={{color: "var(--theme-color)"}}>{categoriaSelecionada.strCategory}</h2>
          <img
            src={categoriaSelecionada.strCategoryThumb}
            alt={categoriaSelecionada.strCategory}
            width={300}
          />
          <p>
            {categoriaSelecionada.strCategoryDescription}
          </p>
        </div>
      )}
    </div>
  );
}