import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬 독학',
  ]);
  let [modal, setModal] = useState(false);
  let [number, setNumber] = useState(0);
  let [value, setValue] = useState('');
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
                setNumber(i);
              }}
            >
              {title[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        type='text'
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(value);
          setTitle(copy);
        }}
      >
        추가
      </button>
      {modal === true ? (
        <Modal title={title} setTitle={setTitle} number={number} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.title[props.number]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  );
}

export default App;
