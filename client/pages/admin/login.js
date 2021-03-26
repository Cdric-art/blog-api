import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";
import axios from "axios";

export default function Home() {

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)

        axios({
            method: 'post',
            withCredentials: true,
            url: 'http://127.0.0.1:3333/api/admin/login',
            data: formData,
        })
            .then(() => {
                router.push('/admin')
            })
            .catch(err => console.error(err))
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Connection
                </h1>

                <div className={styles.grid}>
                    <div className={styles.login}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <input type="email" name="email" placeholder="Email"/>
                            </div>
                            <div className={styles.formGroup}>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                            <button type="submit">Se connecter</button>
                        </form>
                    </div>
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

