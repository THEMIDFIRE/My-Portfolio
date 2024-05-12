import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Welcome from './Welcome';

export default function Header() {
    const navLinks = [
        { id: 1, title: "Projects", url: "/My-Portfolio/" },
        { id: 2, title: "Services", url: "/My-Portfolio/Services" }
    ];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > window.innerHeight * 0.1) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <Welcome />
            <nav>
                <ul>
                    {navLinks.map(({ id, title, url }) => (
                        <li key={id}>
                            <NavLink to={url} activeClassName="active">{title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
