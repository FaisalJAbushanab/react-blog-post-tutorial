import React from 'react'
import { Link } from 'react-router-dom';
const Missing = () => {
    return (
        <main className='Missing'>
            <h2>Post NOt Found</h2>
            <p>Well, that's dissapointing.</p>
            <p>
                <Link to="/">Vist our Homepage</Link>
            </p>
        </main>
    )
}

export default Missing