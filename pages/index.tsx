import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kunal Dandekar</title>
        <meta
          name="description"
          content="Hi, I am Kunal Dandekar, aka thepiguy. I am an independent programmer who is actively looking for a job. I usually code in a strongly typed multi paragdim interpreted language with a non blocking event loop and object oriented features, but can also code in many other languages"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi, welcome to my portfolio</h1>
      </main>
    </div>
  );
}

export default Home
