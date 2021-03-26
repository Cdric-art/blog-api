import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CreatedPostForm } from "../components/PostsForm";
import { FlashMessage } from "../components/FlashMessage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

    const router = useRouter()
    const [success, setSuccess] =useState(null)
    const [errors, setErrors] =useState(null)

    useEffect(() => {
        const apiFetch = async () => {
            await axios({
                method: 'get',
                withCredentials: true,
                url: 'http://127.0.0.1:3333/api/admin',
            })
                .then(res => console.log(res.status))
                .catch(err => {
                    console.log(err)
                    router.push('/admin/login')
                })
        }

        apiFetch()

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess(null)
        setErrors(null)
        const form = e.target
        const data = new FormData(form)
        axios({
            method: 'post',
            withCredentials: true,
            url: 'http://127.0.0.1:3333/api/admin/posts',
            data: data
        })
            .then(response => {
                setSuccess(response.data.message)
                form.reset()
            })
            .catch(err => setErrors(err.message))
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Espace administrateur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Espace administrateur
                </h1>

                <Link href="/">
                    <a className={styles.back}>Home</a>
                </Link>

                <div className={styles.grid}>
                    <div>
                        <>
                            {success && <FlashMessage message={success} type="success" />}
                            {errors && <FlashMessage message={errors} type="error" />}
                        </>
                        <div className={styles.createdPost}>
                            <h2>Créer un nouveau post &rarr;</h2>
                            <CreatedPostForm submit={handleSubmit} me={2} />
                        </div>
                    </div>
                    <div className={styles.createdPost}>
                        <Link href={`/admin/posts`}>
                            <a>
                                <h3>Mes posts &rarr;</h3>
                                <p>Voir, modifier et supprimer</p>
                            </a>
                        </Link>
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
