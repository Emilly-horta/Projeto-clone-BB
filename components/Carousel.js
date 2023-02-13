import Image from "next/image";
import styles from "../styles/Hero.module.scss";

export default function Carousel() {
  return (
    <section classNameName={styles.carousel} aria-label="Gallery">
      <ol className={styles.carousel__viewport}>
        <li
          id="carousel__slide1"
          tabindex="0"
          className={styles.carousel__slide}
        >
          <div className={styles.carousel__snapper}>
            <Image src="/src/assets/images/img-hero.jpg" fill />
            <div className={styles.wrap}>
              <h1 className={styles.title}>Vem ser Cliente</h1>

              <ul className={styles.goals}>
                <li className={styles.subtitle}>
                  Vai no App BB e abra sua conta
                </li>
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
          </div>
        </li>
        <li
          id="carousel__slide2"
          tabindex="0"
          className={styles.carousel__slide}
        >
          <div className={styles.carousel__snapper}>
            <Image src="/src/assets/images/banner2-slide.jpg" fill />
          </div>
        </li>
        <li
          id="carousel__slide3"
          tabindex="0"
          className={styles.carousel__slide}
        >
          <div className={styles.carousel__snapper}>
            <Image src="/src/assets/images/bb-sustentavel.jpg" fill />
          </div>
        </li>
      </ol>
    </section>
  );
}
