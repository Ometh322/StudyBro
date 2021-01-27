import React from 'react'
import TeachArticle from '../TeachArticle'

export default function ArticleList({articles}) {
    const articleElements = articles.map((article, index) =>
        <li key = {article.id}>
            <TeachArticle article = {article}/>
        </li>
    )
    return (
        <ul>
            {articleElements}
        </ul>
    )
}