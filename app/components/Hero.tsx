import Link from 'next/link'
import Image from 'next/image'
import styles from "@/app/styles/Hero.module.sass";

const Hero = () => {
  return (
    <section className={styles.section}>
        <div className={styles.content}>
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <button>Learn more</button>
        </div>
        <div className={styles.image}>
            <Image src="/images/home/desktop/image-hero-phone.png" width={624} height={913} alt="A smartphone" />
        </div>
    </section>
  )
}

export default Hero