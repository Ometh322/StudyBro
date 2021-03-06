import React from 'react'
import Article from '../Article'

export default function ArticleList({articles}) {
    const articleElements = articles.map((article, index) =>
        <li key = {article.id}>
            <Article article = {article}/>
        </li>
    )
    // const newArticleElements = articleElements.concat([{
    //     id: 6,
    //     text: "Собрание старост в 310 кабинете"
    //   }])
    return (
        <ul>
            {articleElements}
        </ul>
    )
}


// function addTodo(title) {
//     setTodos(todos.concat([{
//       title,
//       id: Date.now(),
//       completed: false
//     }]))
//   }