import { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/all';
import './q&a.css';
import SingleQA from './SingleQA/SingleQA.jsx';

function AmazonQA() {
  const [qaList, setQAList] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch('https://fec-amazon-back-end.onrender.com/amazon_qa') // for live
      // fetch('http://localhost:8000/amazon_qa') // for testing
      .then((response) => response.json())
      .then((data) => {
        setQAList(data);
      })
      .catch((error) => {
        // handle any errors
        console.error(error);
      });
  }, []);

  const qaListToShow = showAll ? qaList : qaList.slice(0, 1);

  return (
    <div className="qa">
      <h2>Looking for specific info?</h2>
      <span className="qa__search-label">Search product info, Q&A, reviews</span>
      <div className="spacer">
        <span className="qa__search-container">
          <HiOutlineSearch />
          <input type="text" placeholder="type a keyword" />
        </span>
      </div>
      <h2 className="qa__header">Customer Questions & Answers</h2>
      {qaListToShow.map((item) => (
        <SingleQA key={item.id} {...item} />
      ))}
      <button type="button" onClick={() => setShowAll(!showAll)} className="qa__show-all-button">
        {showAll ? 'See less' : 'See more answered questions'}
      </button>
    </div>
  );
}

export default AmazonQA;
