import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './review.css';
import { Write } from '../write';


export function Review() {
  const movePage = useNavigate();
  const [activeComponent, setActiveComponent] = useState('review');

  const goPage = () => {
    movePage('/');
  };

  const goReview = () => {
    setActiveComponent('review');
  };

  const goWrite = () => {
    setActiveComponent('write');
  };
  return (
    <div className="review-box">
      <div id="review-name">평점</div>

      <div className="review-wrap">
        <div className="review">
          <div id="review-text">리뷰</div>
          <div id="text">멀티탭이 많아요</div>
        </div>
      </div>
      
      {/* {activeComponent === 'write' && <Write />}
      <button className="write_button" onClick={goWrite}>
          글쓰기
        </button> */}
    </div>
  );

 }
