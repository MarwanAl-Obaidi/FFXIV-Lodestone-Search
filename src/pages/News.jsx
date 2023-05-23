import React, { useEffect, useState } from 'react';
import '../App.css';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://lodestonenews.com/news/topics')
      .then(response => response.json())
      .then(resData => setNews(resData))
  }, []);

  // Function to format the date and time
  const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return dateTime.toLocaleString(undefined, options);
  };

  return (
    <div className="News">
      <table>
        <tbody>
          {news.map((newsItem, index) => (
            <tr key={index}>
              <h3>
                <a href={newsItem.url}>{newsItem.title}</a>
              </h3>
              <img src={newsItem.image} alt="news" width={490} />
              <p><b>{formatDate(newsItem.time)}</b></p>
              <p>{newsItem.description}</p>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default News;