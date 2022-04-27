import Head from 'next/head'
// import Image from 'next/image'
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
          <a href="https://web.yammer.com/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxMDM1NzMyNzQ2MjQifQ" className={styles.card}>
            <h2>Negativo </h2>
            <p>Empresa especializada em servicos com arduino</p>
            <span>Precisa estar logado</span>
          </a>

          <a href="#" className={styles.card}>
            <h2>Stage</h2>
            <p>App educacional para: organização de estudo, e acompanhamento de alunos</p>
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
