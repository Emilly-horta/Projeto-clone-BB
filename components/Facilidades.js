import Image from "next/image";
import styles from "../styles/Facilidades.module.scss";

export default function Facilidades() {
  return (
    <section id="facilidades" className={styles.container}>
      <div className={styles.box}>
        <h1>Seu dia a dia com mais facilidade</h1>
        <div className={styles.row}>
          <div className={styles.conteudo}>
            <Image
              src="/src/assets/facilidades-icon/boleto.png"
              width={80}
              height={80}
              alt="2ª via de boleto"
              className={styles.image}
            />
            <p>2ª via de boleto</p>
          </div>
          <div className={styles.conteudo}>
            <Image
              src="/src/assets/facilidades-icon/relaciona.png"
              width={80}
              height={80}
              alt="BB Relaciona"
              className={styles.image}
            />
            <p>BB Relaciona</p>
          </div>
          <div className={styles.conteudo}>
            <Image
              src="/src/assets/facilidades-icon/pacotes.png"
              width={80}
              height={80}
              alt="Pacotes"
              className={styles.image}
            />
            <p>Pacotes</p>
          </div>
          <div className={styles.conteudo}>
            <Image
              src="/src/assets/facilidades-icon/portabilidade.png"
              width={80}
              height={80}
              alt="Portabilidade"
              className={styles.image}
            />
            <p>Portabilidade</p>
          </div>
          <div className={styles.conteudo}>
            <Image
              src="/src/assets/facilidades-icon/tarifas.png"
              width={80}
              height={80}
              alt="Tarifas"
              className={styles.image}
            />
            <p>Tarifas</p>
          </div>
          <div className={styles.conteudo}>
            <Image
              src="/src/assets/facilidades-icon/envelopes.png"
              width={80}
              height={80}
              alt="Envelopes"
              className={styles.image}
            />
            <p>Envelopes</p>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/src/assets/images/card.png"
            width={1050}
            height={300}
            alt="card"
          />
        </div>
      </div>
    </section>
  );
}
