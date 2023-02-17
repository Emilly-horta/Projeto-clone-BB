import styles from "../styles/Opcoes.module.scss";

export default function Beneficios() {
  return (
    <section className={styles.container} id="beneficios">
      <div className={styles.wrap}>
        <h1>Ao seu lado em cada momento da vida</h1>
        <p>
          Sempre tem uma solução do BB pra cuidar do que é valioso pra você.
        </p>
      </div>

      <div className={styles.item}>
        <ul className={styles.lista}>
          <li>PATRIMÔNIO E FINANÇAS</li>
          <li>CASA E FAMÍLIA</li>
          <li>SAÚDE E BEM-ESTAR</li>
          <li>LAZER E ENTRETENIMENTO</li>
        </ul>
      </div>

      <div className={styles.box}>
        <div className={styles.opcoes}>
          <div className={styles.img1}>
            <h1>Open Finance</h1>
            <ul>
              <li>Aumente suas chances de ter mais limite aqui no BB</li>
            </ul>
            <p>Compartilhe seus dados</p>
          </div>

          <div className={styles.img2}>
            <h1 className={styles.financas}>Minhas Finanças</h1>
            <h3>No aplicativo do BB você organiza todas as suas contas</h3>
            <ul className={styles.img4}>
              <h1>Seguro de veículos</h1>
              <li>Praticidade e conforto onde e quando quiser</li>
            </ul>
          </div>

          <div className={styles.img3}>
            <h1>Investimentos</h1>
            <ul>
              <li>Quer saber quanto seu dinheiro pode render no BB?</li>
            </ul>
            <p>Descubra Agora</p>
          </div>
        </div>
      </div>
    </section>
  );
}
