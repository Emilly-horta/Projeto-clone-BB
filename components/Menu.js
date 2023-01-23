import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Menu.module.scss";

export default function Menu() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href="/#index">
          <Image
            src="/src/assets/images/logo-bb.png"
            alt="Logotipo BB"
            width="32"
            height="20"
          />
        </Link>

        <ul className={styles.menu}>
          <li>
            <Link href="#">Pra você&#709;</Link>
          </li>
          <li>
            <Link href="#">Pro seu Negócio&#709;</Link>
          </li>
          <li>
            <Link href="#">Agronegócios&#709;</Link>
          </li>
          <li>
            <Link href="#">Setor Público&#709;</Link>
          </li>
          <li>
            <Link href="#">acesse sua conta&#709;</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
