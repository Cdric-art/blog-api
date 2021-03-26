import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Post({ data }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <Link href="/">
                    <a className={styles.back}>Back</a>
                </Link>

                <div className={styles.grid}>
                        <a key={data.post.id} href="https://nextjs.org/docs" className={styles.card}>
                            <h3>{data.post.title}</h3>
                            <Image src={`/uploads/${data.post.img}`} alt={data.title} width={400} height={200}/>
                            <p>{data.post.content}</p>
                        </a>
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

export async function getServerSideProps({ params }) {
    const data = await fetch(`http://127.0.0.1:3333/api/posts/${params.id}`)
        .then(res => res.json())
        .catch(err => console.log(err))

    return {
        props: {
            data
        }
    }
}
