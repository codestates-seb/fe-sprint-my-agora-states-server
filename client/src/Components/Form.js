import React from "react";
import '../Stylesheets/Form.scss';
import {useState} from 'react';
import axios from "axios";

const url = 'http://localhost:4000/discussions';

export default function Form() {
  const [newData, setNewData] = useState();
  const [inputName, setInputName] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

  const handleInputName = (e) => {
    setInputName(e.target.value);
  }
  const handleInputTitle = (e) => {
    setInputTitle(e.target.value);
  }
  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  }

  const handlePostNewQuestion = async(e) => {
    try {
      if(inputName || inputTitle || inputContent) {
        setNewData({author : inputName, title : inputTitle});
        const result =  await axios.post(url, newData);
        if(result) {
          alert('your question succesfully registered');
          axios.get(`${url}/redirect`);
        }
      } else {
        alert('Fill in the whole inputs');
      }
    } catch(err) {
      console.log('Cannot post! Error occured', err);
    }
  }

  return (
    <div className="form-container">
      <div className="form-inputs-wrapper mb-5">
        <div className="form-input">
          <label className="form-label" htmlFor="input-name">이름을 입력하세요 </label>
          <input className="form-input-text" required='required' type="text" name="input_name" id="input-name" onClick={handleInputName}></input>
        </div>
        <div className="form-input">
          <label className="form-label" htmlFor="input-title">질문의 제목을 입력하세요 </label>
          <input className="form-input-text" required='required' type="text" name="input_title" id="input-title" onClick={handleInputTitle}></input>
        </div>
        <div className="form-input">
          <label className="form-label" htmlFor="input-content">질문의 내용을 입력하세요 </label>
          <input className="form-input-text" required='required' type="text" name="input_content" id="input-content" onClick={handleInputContent}></input>
        </div>
        <div className="button-container mt-3">
          <button className="form-button btn btn-warning" onClick={handlePostNewQuestion}>새로운 질문을 등록합니다.</button>
        </div>
      </div>
        <div className="search-container">
          <div className="search-input">
            <label className="form-label mb-0" htmlFor="input-search-by-id">질문의 id를 입력하세요 </label>
            <input className="form-input-text" type="text" name="input_id" id="input-search-by-id"></input>
          </div>
          <div className="button-container ms-3">
            <button className="form-button btn btn-warning">검색</button>
          </div>
        </div>
    </div>
  );
}
