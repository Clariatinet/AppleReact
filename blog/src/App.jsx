import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);
  let [good, setGood] = useState(0);
  let [modal, setModal] = useState(false);
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          title.sort();
          setTitle([...title]);
        }}
      >
        가나다순 정렬
      </button>
      <div className='list'>
        <h4>
          {title[0]}
          <button
            onClick={() => {
              title[0] = '여자 코트 추천';
              setTitle([...title]);
            }}
          >
            글수정
          </button>
          <span
            onClick={() => {
              setGood(good + 1);
            }}
          >
            👍
          </span>{' '}
          {good}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4
          onClick={() => {
            setModal(true);
            if (modal === true) {
              setModal(false);
            }
          }}
        >
          {title[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
