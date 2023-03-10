import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
        <title>Ninja List | Home</title>
    </Head>
    <div>
    
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum minima accusantium quasi ea molestias, aliquid pariatur officia quis dolorum natus, reprehenderit enim ad tempore impedit quisquam a ab nemo provident.
        </p>
        <p className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum minima accusantium quasi ea molestias, aliquid pariatur officia quis dolorum natus, reprehenderit enim ad tempore impedit quisquam a ab nemo provident.
        </p>

    <Link href="/ninjas" className={styles.btn}>
      See Ninja Listing
    </Link>
    </div>
  </>
  )
}
