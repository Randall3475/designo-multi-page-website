import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/components/Footer.module.sass";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <section className={styles.logoRow}>
        <Image
          src="/images/shared/desktop/logo-light.png"
          width={152}
          height={20}
          alt="Designo logo"
        />
        <nav>
          <Link href="/our-company">Our company</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        </section>
        <hr className={styles.hr} />
        <section className={styles.contactRow}>
          <ul className={styles.addressColumn}>
            <h4>Designo central office</h4>
            <li>3886 Wellington Street</li>
            <li>Toronto, Ontario M9C 3J5</li>
          </ul>
          <ul className={styles.contactColumn}>
            <h4>Contact Us (Central Office)</h4>
            <li>P : +1 253-863-8967</li>
            <li>M : contact@designo.co</li>
          </ul>
          <ul className={styles.iconList}>
            <Image src="/images/shared/desktop/icon-facebook.svg" width={24} height={24} alt="Facebook icon" />
            <Image src="/images/shared/desktop/icon-youtube.svg" width={24} height={24} alt="YouTube icon" />
            <Image src="/images/shared/desktop/icon-twitter.svg" width={24} height={24} alt="Twitter icon" />
            <Image src="/images/shared/desktop/icon-pinterest.svg" width={24} height={24} alt="Pinterest icon" />
            <Image src="/images/shared/desktop/icon-instagram.svg" width={24} height={24} alt="Instagram icon" />

          </ul>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
