import React from 'react'
import articleContent from './article-content';
import NotFound from './NotFound';

const Article = ({ match }) => {
  const name = match.params.name, article = [], matchingArticle = articleContent.find((article) => article.name === name);
  article.push(matchingArticle);
  if (article[0] === undefined) return <NotFound/>
  return (
    <>
      <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
        {article[0].title}
      </h1>
      {article[0].content.map((paragraph, index) => (
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</p>
      ))}
    </>
  )
}

export default Article;
