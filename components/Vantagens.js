import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Vantagens.module.scss";

export default function Vantagens() {
  return (
    <section className={styles.container} id="Vantagens">
      <div className={styles.wrap}>
        <div className={styles.box1}>
          <div className={styles.imagesconta}>
            <div className={styles.texto}>
              <h1>Conta Corrente BB</h1>
              <ul>
                <li>Completa e com abertura 100% digital.</li>
              </ul>
            </div>
          </div>
          <div className={styles.imagescartao}>
            <div className={styles.texto2}>
              <h1>Cartão de Crédito</h1>
              <ul>
                <li>Aproveite as vantagens de ter um Ourocard</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.images}>
            <Image
              src="/src/assets/images/img-88.jpg"
              alt="abertura digital"
              width={325}
              height={250}
              className={styles.img}
            />
            <div className={styles.information}>
              <h1>Emprestimo</h1>
              <p>
                Cliente BB tem linhas de crédito com condições diferenciadas de
                pagamento.
              </p>
            </div>
          </div>
          <div className={styles.images}>
            <Image
              src="/src/assets/images/img-89.png"
              alt="abertura digital"
              width={325}
              height={250}
              className={styles.img}
            />
            <div className={styles.information}>
              <h1>Investimento</h1>
              <p>
              Invista em seus sonhos, do seu jeito, com zero complicação.
              </p>
            </div>
          </div>
          <div className={styles.images}>
            <Image
              src="/src/assets/images/img-93.jpg"
              alt="abertura digital"
              width={425}
              height={250}
              className={styles.img}
            />
            <div className={styles.information}>
              <h1>Loja BB</h1>
              <p>
              Cashback, Gift Cards, Vantagens e Recarga de celular pra você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
