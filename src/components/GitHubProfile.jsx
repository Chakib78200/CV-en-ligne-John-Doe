import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import '../styles/GitHubProfile.css';

const GitHubProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = () => {
        setLoading(true);
        setError(null);

        const username = "github-John-Doe";


        axios.get(`https://api.github.com/users/${username}`)
            .then(response => {
                setProfile(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    };

    return (
        <div className="github-profile">
            <Helmet>
                <title>GitHub Profile</title>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-Content-Type-Options" content="nosniff" />
                <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
            </Helmet>

            <h1><strong>GitHub user</strong></h1>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}

            {profile && (
                <div className="profile">
                    <h2><strong>{profile.name}</strong></h2>
                    <img src={profile.avatar_url} alt={`${profile.login}'s avatar`} className="avatar" />
                    <p className="center-p-github">{profile.bio}</p>
                    <p className="center-p-github">Abonnés : {profile.followers}</p>
                    <p className="center-p-github">Abonnements : {profile.following}</p>
                    <p className="center-p-github">Créé le : {profile.created_at}</p>
                    <p className="center-p-github">Modifié le : {profile.updated_at}</p>
                    <p className="center-p-github">URL repositories : <a href={profile.repos_url} target="_blank" rel="noopener noreferrer">{profile.repos_url}</a></p>
                </div>
            )}
        </div>
    );
};

export default GitHubProfile;
