import React from 'react'
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
import NotFound from './NotFound';

const Article = ({ match }) => {
  const name = match.params.name;
  // console.log(name);
  const article = articleContent.find((article) => article.name ===name);
  // console.log(article);
  if (!article) return <NotFound/>
  return (
    <>
      <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
        {article.title}
      </h1>
      {articleContent.map((paragraph, index) => (
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</p>
      ))}
    </>
  )
}

export default Article;