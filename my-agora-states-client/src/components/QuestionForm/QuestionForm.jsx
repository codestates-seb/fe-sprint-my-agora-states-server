import { useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Input from './Input.jsx';
import INPUT_INFO from 'utils/contants/inputInfo.js';

function QuestionForm({ isSuccess, setIsSuccess }) {
  const [body, setBody] = useState({});
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSuccess) return;

    try {
      await axios.post('http://localhost:4000/discussions', body);

      form.current.reset();

      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormWrapper>
      <FormContainer>
        <h2 className="srOnly">질문 등록</h2>
        <form onSubmit={handleSubmit} ref={form}>
          {INPUT_INFO.map((info) => (
            <Input
              info={info}
              key={info.htmlFor}
              body={body}
              setBody={setBody}
            />
          ))}
        </form>
      </FormContainer>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  width: 33.75rem;
  margin: 0 auto;
`;

const FormContainer = styled.section`
  width: 23.75rem;
  padding: 2rem;
  margin: 0 auto 3rem;
  border-radius: 1.3rem;
  color: #ffffff;
  ${({ theme }) => theme.formContainer};
`;

export default QuestionForm;
