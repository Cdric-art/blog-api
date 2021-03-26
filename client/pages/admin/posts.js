import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { UpdatedPostForm } from "../components/PostsForm";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { FlashMessage } from "../components/FlashMessage";

export default function Home({ data }) {

    const [success, setSuccess] =useState(null)
    const [errors, setErrors] =useState(null)



    return (
        <div className={styles.container}>
            <Head>
                <title>Modifier mes posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Espace administrateur
                </h1>

                <Link href="/admin">
                    <a className={styles.back}>Back</a>
                </Link>

                <div className={styles.grid}>
                    <>
                        {success && <FlashMessage message={success} type="success" />}
                        {errors && <FlashMessage message={errors} type="error" />}
                    </>
                    <div className={styles.updatedPost}>
                        { data.map(p => (
                            <UpdatedPostForm
                                key={p.id}
                                post_id={p.id}
                                title={p.title}
                                content={p.content}
                                error={setErrors}
                                success={setSuccess}
                                me={2}
                            />
                        ))}
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
