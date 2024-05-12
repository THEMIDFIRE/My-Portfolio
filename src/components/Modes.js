import React, { useState, useEffect } from 'react';
import 'primeicons/primeicons.css';

export default function Mode() {
    const savedMode = localStorage.getItem('isDark');
    const [isDark, setIsDark] = useState(savedMode ? JSON.parse(savedMode) : false);

    const handleToggle = () => {
        const newMode = !isDark;
        setIsDark(newMode);
        localStorage.setItem('isDark', JSON.stringify(newMode));
        document.body.classList.toggle('dark', !isDark);
    };

    useEffect(() => {
        document.body.classList.toggle('dark', isDark);
    }, [isDark]);

    return (
        <div class="darkThemeBtn">
            <input id="darkmode-toggle" type="checkbox" onChange={() => handleToggle(!isDark)} checked={isDark} />
            <label for="darkmode-toggle">
                <i className='pi pi-sun'></i>
                <i className='pi pi-moon'></i>
            </label>
            <span class="fake-body"></span>
        </div>
    );
}