// NODE DEPENDENCIES
import React from 'react';
import { Link } from 'react-router-dom';

// IMPORT STYLES
import './styles.css';

function Home() {
    return (
        <main>
            <nav>
                <Link to='/profiles'>profiles</Link>
                <Link to='/exhibitions'>exhibitions</Link>
                <Link to='/learning'>learning</Link>
            </nav>
        </main>
    );
}

export default Home;