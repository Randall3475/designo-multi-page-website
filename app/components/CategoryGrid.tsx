import Image from "next/image";
import Link from "next/link";
import styles from "@/app/styles/components/CategoryGrid.module.sass";

const CategoryGrid = () => {
    return (
        <section className={styles.section}>
            <Link href="/web-design">
                <article>
                    <Image
                        src="/images/home/desktop/image-web-design-large.jpg"
                        width={541}
                        height={640}
                        alt="Image of a hang typing on a laptop"/>
                    <div className={styles.content}>
                        <h2>Web design</h2>
                        <div>
                            <p>View projects</p>
                            <Image
                                src="/images/shared/desktop/icon-right-arrow.svg"
                                width={6}
                                height={12}
                                alt="Arrow right icon"/></div>
                    </div>
                </article>
            </Link>
            <Link href="/web-design">
                <article>
                    <Image
                        src="/images/home/desktop/image-app-design.jpg"
                        width={541}
                        height={308}
                        alt="Image of a hang typing on a laptop"/>
                    <div className={styles.content}>
                        <h2>App design</h2>
                        <div>
                            <p>View projects</p>
                            <Image
                                src="/images/shared/desktop/icon-right-arrow.svg"
                                width={6}
                                height={12}
                                alt="Arrow right icon"/></div>
                    </div>
                </article>
            </Link>
            <Link href="/web-design">
                <article>
                    <Image
                        src="/images/home/desktop/image-graphic-design.jpg"
                        width={541}
                        height={308}
                        alt="Image of a hang typing on a laptop"/>
                    <div className={styles.content}>
                        <h2>Graphic design</h2>
                        <div>
                            <p>View projects</p>
                            <Image
                                src="/images/shared/desktop/icon-right-arrow.svg"
                                width={6}
                                height={12}
                                alt="Arrow right icon"/></div>
                    </div>
                </article>
            </Link>
        </section>
    )
}

export default CategoryGrid