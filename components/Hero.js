import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Hero.module.scss";

export default function Hero() {
  return ( 
    <section className={styles.container} id="hero">
      <Image
        className={styles.heroBackground}
        src="/src/assets/images/img-hero.jpg"
        alt="Picture of the author"
        fill
      />
      <div className={styles.wrap}>
        <h1 className={styles.title}>Vem ser Cliente</h1>

        <ul className={styles.goals}>
          <li className={styles.subtitle}>Vai no App BB e abra sua conta</li>
        </ul>

        <ul>
          <li>
            <Image
              className={styles.heroCode}
              src="/src/assets/images/qr-code.png"
              alt="Picture of the author"
              width={200}
              height={80}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
