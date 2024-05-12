import React, { useState, useEffect } from 'react';

export default function Welcome() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentTime = new Date().getHours();

        if (currentTime >= 5 && currentTime < 12) {
            setGreeting('Good Morning');
        } else if (currentTime >= 12 && currentTime < 18) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }

        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setName(storedName);
        } else {
            const enteredName = prompt('Please enter your name:');
            if (enteredName) {
                localStorage.setItem('userName', enteredName);
                setName(enteredName);
            }
        }
    }, []);

    if (!name) {
        return null; // Don't render anything yet
    }

    const handleInputChange = (event) => {
        setName(event.target.value);
        localStorage.setItem('userName', event.target.value);
    }

    return (
        <div id="welcome">
            <h2 onChange={handleInputChange}>{greeting}, {name}!</h2>
        </div>
    );
}