import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);
  let [number, setNumber] = useState(0);
  let [modal, setModal] = useState(false);
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      {title.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4
              onClick={() => {
                setModal(true);
                if (modal === true) {
                  setModal(false);
                }
              }}
            >
              {title[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
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
