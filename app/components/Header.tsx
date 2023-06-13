import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/styles/components/Header.module.sass'

const Header = () => {
  return (
    <header className={styles.header}>
        <Link href="/"><Image src="/images/shared/desktop/logo-dark.png" width={152} height={20} alt="Designo logo" /></Link>
        <nav>
            <Link href="/our-company">Our company</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    </header>
  )
}

export default Header