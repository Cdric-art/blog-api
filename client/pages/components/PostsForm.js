import styles from '../../styles/Home.module.css'
import { useState } from "react";
import axios from "axios";

export function CreatedPostForm ({ me, submit }) {
    return <form onSubmit={submit}>
        <div className={styles.formGroup}>
            <input type="text" name="title" placeholder="Titre du post"/>
        </div>
        <div className={styles.formGroup}>
            <textarea name="content" cols="30" rows="10" placeholder="Contenu du post"/>
        </div>
        <div className={styles.formGroup}>
            <input type="file" name="img"/>
        </div>
        <input type="hidden" name="user_id" value={me}/>
        <button type="submit">Publier</button>
    </form>
}

export function UpdatedPostForm ({ me, title, content, error, success, post_id }) {

    const [t, setT] = useState(title)
    const [c, setC] = useState(content)

    const handleSubmit = (e) => {
        e.preventDefault()
        success(null)
        error(null)
        const form = e.target
        const data = new FormData(form)
        axios({
            method: 'put',
            withCredentials: true,
            url: `http://127.0.0.1:3333/api/admin/posts/${post_id}`,
            data: data
        })
            .then(response => {
                success(response.data.message)
            })
            .catch(err => error(err.message))
    }

    const handleDelete = () => {
        success(null)
        error(null)

        axios({
            method: 'delete',
            withCredentials: true,
            url: `http://127.0.0.1:3333/api/admin/posts/${post_id}`,
        })
            .then(response => {
                success(response.data.message)
            })
            .catch(err => error(err.message))
    }


    return <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
            <input type="text" name="title" value={t} onChange={(e) => setT(e.target.value)}/>
        </div>
        <div className={styles.formGroup}>
            <textarea name="content" cols="30" rows="10" value={c} onChange={(e) => setC(e.target.value)}/>
        </div>
        <div className={styles.formGroup}>
            <input type="file" name="img" />
        </div>
        <input type="hidden" name="user_id" value={me}/>
        <button type="submit">Valider</button>
        <button type="button" onClick={handleDelete}>Delete</button>
    </form>
}
