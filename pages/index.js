import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instituto BdS</title>
        <meta name="description" content="Bar do Senac" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Instituto BdS</a>
        </h1>

        <p className={styles.description}>
          We are owner of: 
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Negativo </h2>
            <p>Empresa especializada em servicos com arduino</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Aplicativo para autista</h2>
            <p>Um aplicativo para auxiliar pessoas autistas</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Gustavo Maia
        </a>
      </footer>
    </div>
  )
}
