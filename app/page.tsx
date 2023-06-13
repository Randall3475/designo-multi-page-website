import Image from 'next/image'
import Hero from '@/app/components/Hero'
import CategoryGrid from '@/app/components/CategoryGrid'
import Benefits from '@/app/components/Benefits'
import styles from '@/app/styles/pages/home.module.sass'

export default function Home() {
  return (
   <>
   <Hero />
   <Image className={styles.upperLeaf} src="/images/shared/desktop/bg-pattern-leaf.svg" width={1006} height={564} alt="Gray colored leaf" />
   <CategoryGrid />
   <Image className={styles.downerLeaf} src="/images/shared/desktop/bg-pattern-leaf.svg" width={1006} height={564} alt="Gray colored leaf" />
   <Benefits />
   </>
  )
}
