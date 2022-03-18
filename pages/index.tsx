import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router';
import MoreInfo from '../components/MoreInfo';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kunal Dandekar</title>
        <meta
          name="description"
          content="Hi, I am Kunal Dandekar, aka thepiguy. I am an independent programmer who is actively looking for a job. I usually code in a strongly typed multi paragdim interpreted language with a non blocking event loop and object oriented features, but can also code in many other languages"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen p-16 flex flex-1 items-center justify-center flex-col bg-bgdark">
        <h1 className={styles.neonText}>KUNAL DANDEKAR </h1>
        <button onClick={() => Router.push("#moreinfo")} className="text-txtblue">READ MORE</button>
      </main>
      
      <MoreInfo />
    </div>
  );
}

export default Home
