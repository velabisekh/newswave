import React, {useState,useEffect} from 'react';
import NewsItem from './NewsItem';
const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;

    console.log(`API Key: ${apiKey}`)

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

    },[category])

  return (
    <div>
        <h2 className='text-center'>LATEST<span className='badge bg-danger'>NEWS</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })}
    </div>
  )
}

export default NewsBoard;