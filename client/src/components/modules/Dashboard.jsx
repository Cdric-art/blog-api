import React, { useState } from 'react';
import axios from "axios";
import FlashMessage from "../libs/FlashMessage";
import { CreatedPostForm } from "../libs/PostsForm";

const Dashboard = ({me}) => {

    const [success, setSuccess] =useState(null)
    const [errors, setErrors] =useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess(null)
        setErrors(null)
        const form = e.target
        const data = new FormData(e.target)
        axios({
            method: 'post',
            withCredentials: true,
            url: `${process.env.REACT_APP_URL_API}/admin/posts`,
            data: data
        })
            .then(response => {
                setSuccess(response.data.message)
                form.reset()
            })
            .catch(err => setErrors(err.message))
    }

    return <div className="dashboard">
        <>
            {success && <FlashMessage message={success} type="success" />}
            {errors && <FlashMessage message={errors} type="error" />}
        </>
        <div className="new-post">
            <h2>Créer un nouveau post</h2>
            <CreatedPostForm submit={handleSubmit} me={me} />
        </div>
        <div className="update-post">
            <h2>Voir, supprimer ou modifier un post</h2>
        </div>
    </div>
};

export default Dashboard;
