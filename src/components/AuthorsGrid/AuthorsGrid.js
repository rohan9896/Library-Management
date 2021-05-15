import React from 'react'
import AuthorCard from '../AuthorCard/AuthorCard'
import "./AuthorsGrid.css"
import {AuthorData} from "../../data/authors-books-data"

function AuthorsGrid() {
    return (
        <div className="AuthorsGrid">
            {
                AuthorData.map(author => (
                    <div><AuthorCard {...author} /></div>
                ))
            }
        </div>
    )
}

export default AuthorsGrid
