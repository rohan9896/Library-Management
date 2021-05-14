import React from 'react'
import "./AuthorCard.css"

function AuthorCard() {
    return (
        <div className="AuthorCard">
            <img alt="author-img" src="https://i.insider.com/5978b6df197cf7fd1f8b48a4?width=750&format=jpeg&auto=webp" />
            <h3>JK Rowling</h3>
            <span>Books available - 4</span>
        </div>
    )
}

export default AuthorCard
