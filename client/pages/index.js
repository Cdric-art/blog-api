import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
            { data.map(p => (
                <Link key={p.id} href={`posts/${p.id}`}>
                    <a className={styles.card}>
                        <h3>{p.title} &rarr;</h3>
                        <Image src={`/uploads/${p.img}`} alt={p.title} width={400} height={200}/>
                    </a>
                </Link>
            ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
    const data = await fetch('http://127.0.0.1:3333/api/posts')
        .then(res => res.json())
        .catch(err => console.log(err))

    return {
        props: {
            data
        }
    }
}
