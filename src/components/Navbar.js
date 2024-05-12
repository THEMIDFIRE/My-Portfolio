import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Welcome from './Welcome';

const Header = () => {
    const navLinks = [
        { id: 1, title: "Projects", url: "/My-Portfolio/projects" },
        { id: 2, title: "Services", url: "/My-Portfolio/services" }
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

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const headerClassName = scrolled ? 'scrolled' : '';

    return (
        <header className={headerClassName}>
            <Welcome />
            <nav>
                <ul>
                    {navLinks.map(({ id, title, url }) => (
                        <li key={id}>
                            <NavLink to={url} activeClassName="active" exact>{title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
