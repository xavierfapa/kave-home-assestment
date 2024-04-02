import styles from "./categorias.module.css";

function Categorias() {
  const categorias = [
    "Estancias",
    "Proyectos",
    "Muebles",
    "Decoración",
    "We are Kave",
    "Estil",
  ];

  return (
    <div className={styles.categoriasWrapper}>
      <p className={styles.titulo}>Inspírate</p>
      <div className={styles.listaCategorias}>
        {categorias.map((categoria) => (
          <p
            className={`${styles.tituloCategoria} ${styles.bk}`}
            key={categoria}
          >
            {categoria}
          </p>
        ))}
      </div>
      <div className={styles.listaCategorias2}>
        {categorias.map((categoria) => (
          <div className={styles.categoryWrapper} key={categoria}>
            <div className={styles.imgCategoria}></div>
            <p className={styles.tituloCategoria}>{categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categorias;
