import React from 'react'
import "./AuthorCard.css"

function AuthorCard({authorName, authorImg, books}) {
    return (
        <div className="AuthorCard">
            <img alt="author-img" src={authorImg} />
            <h3>{authorName}</h3>
            <span>Books available - {books.length}</span>
        </div>
    )
}

export default AuthorCard
