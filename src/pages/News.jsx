import React, { useEffect, useState } from 'react';
import '../App.css';

function News() {
    const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://lodestonenews.com/news/topics')
    .then(response => response.json())
    .then(resData => setNews(resData))
  }, []);

  return (
    <div className="News">
      <table>
        <tbody>
        {
          news.map((news, index) => 
           <tr key={index}>
             <h3><a href={news.url}>{news.title}</a></h3>
             <img src={news.image} alt="news" width={490} />
             <p>{news.description}</p>
           </tr>
          )
        }
        </tbody>
      </table>
     </div>
  );
}

export default News;