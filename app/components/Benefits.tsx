import Image from "next/image";
import styles from "@/app/styles/Benefits.module.sass";

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <article>
        <Image
          src="/images/home/desktop/illustration-passionate.svg"
          width={202}
          height={202}
          alt="Cartoon figure using a pen on a computer screen"
        />
        <h3>Passionate</h3>
        <p>
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
      </article>
      <article>
        <Image
          src="/images/home/desktop/illustration-resourceful.svg"
          width={202}
          height={202}
          alt="Cartoon figure using a pen on a computer screen"
        />
        <h3>Resourceful</h3>
        <p>
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </p>
      </article>
      <article>
        <Image
          src="/images/home/desktop/illustration-friendly.svg"
          width={202}
          height={202}
          alt="Cartoon figure using a pen on a computer screen"
        />
        <h3>Friendly</h3>
        <p>
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </article>
    </section>
  );
};

export default Benefits;
