import React, { useState, useEffect } from 'react';
import { HiOutlineCode, HiOutlineExternalLink } from "react-icons/hi";
import { motion } from 'framer-motion';

export default function Projects() {
    const [latestRepos, setLatestRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const github = 'https://api.github.com/users/themidfire/repos';

        fetch(github)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch GitHub repositories');
                }
                return response.json();
            })
            .then(data => {
                const sortedRepos = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                const limitedRepos = sortedRepos.slice(0, 6);
                const reposWithPreviewPromises = limitedRepos.map(repo => {
                    return fetch(`https://api.github.com/repos/themidfire/${repo.name}/contents/preview-img.png`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Preview image not found for ${repo.name}`);
                            }
                            return response.json();
                        })
                        .then(previewImage => {
                            repo.previewImage = previewImage.download_url;
                            return repo;
                        })
                        .catch(error => {
                            console.error(`Error fetching preview image for ${repo.name}:`, error);
                            return repo;
                        });
                });

                Promise.all(reposWithPreviewPromises)
                    .then(reposWithPreview => {
                        setLatestRepos(reposWithPreview);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error('Error fetching repositories with preview images:', error);
                        setLoading(false);
                        setError(error);
                    });
            })
            .catch(error => {
                console.error('Error fetching GitHub repos:', error);
                setLoading(false);
                setError(error);
            });
    }, []);

    return (
        <section id='projects'>
            <h2>Projects</h2>
            <p>Here are some of the projects I have worked on.</p>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p id='error'>An error occurred while fetching repositories. Please try again later.</p>
            ) : latestRepos.length > 0 ? (
                <div className='cards'>
                    {latestRepos.map((repo, index) => (
                        <motion.div
                            key={repo.id}
                            className='card'
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3, duration: .4 }}
                        >
                            {repo.previewImage && (
                                <img src={repo.previewImage} alt={`${repo.name} Preview`} className='preview-image' />
                            )}
                            <div className='project-info' >
                                <h3>{repo.name}</h3>
                                <p>{repo.description}</p>
                                <div className='links'>
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        <HiOutlineCode />
                                    </a>
                                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                                        <HiOutlineExternalLink />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <p id='error'>No repositories found.</p>
            )}
        </section>
    );
}
