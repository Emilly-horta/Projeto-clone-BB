import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Beneficios.module.scss";

export default function Beneficios() {
  return (
    <section className={styles.container} id="Beneficios">
      <div className={styles.beneficioslista}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>
            Vem ser cliente e aproveite os benefícios do BB
          </h1>
        </div>
        <div className={styles.beneficioitens}>
          <div className={styles.images}>
            <Image
              src="/src/assets/images/icon1.png"
              alt="abertura digital"
              width={70}
              height={80}
            />
          </div>
          <div className={styles.box}>
            <h1>Abertura Digital</h1>
            <p>De qualquer lugar, abra sua conta com poucos cliques</p>
          </div>
        </div>

        <div className={styles.beneficioitens}>
          <div className={styles.images}>
            <Image
              src="/src/assets/images/icon2.png"
              alt="abertura digital"
              width={70}
              height={80}
            />
          </div>
          <div className={styles.box}>
            <h1>Tudo pelo App</h1>
            <p>Todos os nossos produtos e serviços na palma da mão</p>
          </div>
        </div>

        <div className={styles.beneficioitens}>
          <div className={styles.images}>
            <Image
              src="/src/assets/images/icon3.png"
              alt="Seguranca"
              width={70}
              height={80}
            />
          </div>
          <div className={styles.box}>
            {" "}
            <h1>Segurança</h1>
            <p>Conte com a segurança que o Banco do Brasil pode oferecer</p>
          </div>
        </div>

        <div className={styles.beneficioitens}>
          <div className={styles.images}>
            <Image
              src="/src/assets/images/icon4.png"
              alt="conveniencia"
              width={70}
              height={80}
            />
          </div>
          <div className={styles.box}>
            <h1>Conveniência</h1>
            <p>Conte com o apoio da nossa rede de agências no seu dia a dia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
