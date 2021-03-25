import React from "react";

export function CreatedPostForm ({ me, submit }) {
    return <form onSubmit={submit}>
        <div className="form-group">
            <label htmlFor="title">Titre du post</label>
            <input type="text" name="title" required/>
        </div>
        <div className="form-group">
            <label htmlFor="content">Contenu du post</label>
            <textarea name="content" cols="30" rows="10" required/>
        </div>
        <div className="form-group">
            <label htmlFor="img">Image du post</label>
            <input type="file" name="img"/>
        </div>
        <input type="hidden" name="user_id" value={me.id}/>
        <button type="submit">Publier</button>
    </form>
}
