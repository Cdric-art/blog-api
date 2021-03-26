import styles from '../../styles/Home.module.css'

export default function CreatedPostForm ({ me, submit }) {
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


