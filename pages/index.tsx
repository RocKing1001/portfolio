import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kunal Dandekar</title>
        <meta
          name="description"
          content="Kunal Dandekar | CS student and experienced fullstack web developer and an UI/UX engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span>
            {"Kunal Dandekar".split("").map((a, i) => (
              <span key={"name" + i} style={{ fontSize: 64 }}>
                {a}
              </span>
            ))}
          </span>
        </h1>

        <p className={styles.description}>
          Get started by <code className={styles.code}>playing around</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <span className={styles.myname}>Kunal Dandekar</span>
        <span className={styles.coffee}>
          {/* Colours according to the one dark colour scheme */}
          <span className={styles.human} style={{ color: "#e5c07b" }}>
            human
          </span>
          <span style={{ color: "#a6b2bf" }}>.</span>
          <span style={{ color: "#e06c75" }}>poweredBy</span>{" "}
          <span style={{ color: "#56b6c2" }}>!=</span>{" "}
          <span style={{ color: "#98c379" }}>"☕"</span>
        </span>
        <span className={styles.socials}>
          <span className={styles.gh}>{" github"}</span>
        </span>
      </footer>
    </div>
  );
};

export default Home;
