import styles from "@/app/styles/GetInTouch.module.sass";
import Link from 'next/link'

const GetInTouch = () => {
  return (
    <section className={styles.section}>
      <header>
        <h2>Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </header>
      <Link href="/contact-us"><button>Get in touch</button></Link>
    </section>
  );
};

export default GetInTouch;
