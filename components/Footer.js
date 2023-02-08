import styles from "../styles/Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <section id="footer">
      <div className={styles.row}>
        <div className={styles.content1}>
          <p>
            Central de Relacionamento BB <span>4004 0001 / 0800 729 0001</span>
          </p>
          <p>
            SAC <span>0800 729 0722</span>
          </p>
          <p>
            Ouvidoria BB <span>0800 729 5678</span>
          </p>
        </div>

        <div className={styles.content2}>
          <p>
            Deficientes Auditivos/Fala <span>0800 729 0088</span>{" "}
          </p>
          <p>
            WhatsApp <span>61 4004 0001</span>
          </p>
          <p>
            Central de Atendimento - Benefícios e Auxílios{" "}
            <span> 4003 5285 / 0800 729 5285</span>
          </p>
        </div>
      </div>

      <div className={styles.rowSecond}>
        <div className={styles.content2}>
          <p>
            © Banco do Brasil S/A - CNPJ 00.000.000/0001-91 SAUN QD 5 LT B, Asa
            Norte, Brasília-DF, Brasil - CEP 70040-911
          </p>
        </div>

        <div className={styles.content3}>
          <div className={styles.infos}>
            <div className={styles.icons}>
              {" "}
              <Image
                src="/src/assets/icons-footer/mapa.png"
                width={28}
                height={28}
                alt="mapa do site"
              />
              <p>Mapa do site </p>
            </div>
            <div className={styles.icons}>
              {" "}
              <Image
                src="/src/assets/icons-footer/seguranca.png"
                width={28}
                height={28}
                alt="seguranca"
              />
              <p>Segurança</p>
            </div>

            <div className={styles.icons}>
              {" "}
              <Image
                src="/src/assets/icons-footer/etica.png"
                width={30}
                height={30}
                alt="etica e integridade"
              />
              <p>Etica e integridade</p>
            </div>

            <div className={styles.icons}>
              {" "}
              <Image
                src="/src/assets/icons-footer/privacidade.png"
                width={30}
                height={30}
                alt="privacidade"
              />
              <p>Minha privacidade </p>
            </div>

            <div className={styles.icons}>
              {" "}
              <Image
                src="/src/assets/icons-footer/transparencia.png"
                width={30}
                height={30}
                alt="transparencia"
              />
              <p>Transparencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
