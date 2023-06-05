import styled from 'styled-components';
import checkInputType from 'utils/functions/checkInputType.js';
import { inputMixin } from 'styles/mixin.js';

function Input({ info, setBody }) {
  const inputType = checkInputType(info.element);

  const handleKeyUp = (e) => {
    if (e.target.id === 'id')
      setBody((prevBody) => ({ ...prevBody, id: e.target.value }));
    if (e.target.id === 'title')
      setBody((prevBody) => ({ ...prevBody, title: e.target.value }));
    if (e.target.id === 'story')
      setBody((prevBody) => ({ ...prevBody, story: e.target.value }));
  };

  return (
    <>
      {inputType === 'textInput' && (
        <div>
          <label htmlFor={info.htmlFor}>{info.labelText}</label>
          <TextInput
            type={info.type}
            name={info.name}
            id={info.id}
            required={info.required}
            placeholder={info.placeholder}
            onKeyUp={handleKeyUp}
          />
        </div>
      )}
      {inputType === 'textarea' && (
        <div>
          <label htmlFor={info.htmlFor}>{info.labelText}</label>
          <Textarea
            name={info.name}
            id={info.id}
            required={info.required}
            placeholder={info.placeholder}
            onKeyUp={handleKeyUp}
          />
        </div>
      )}
      {inputType === 'submitInput' && (
        <SubmitInputWrapper>
          <SubmitInput type={info.type} value={info.value} />
        </SubmitInputWrapper>
      )}
    </>
  );
}

const TextInput = styled.input`
  ${inputMixin};
`;

const Textarea = styled.textarea`
  ${inputMixin};
  resize: none;
`;

const SubmitInputWrapper = styled.div`
  margin: 0 auto;
`;

const SubmitInput = styled.input`
  padding: 0.75rem 1.25rem;
  border-radius: 1.5rem;
  font-size: 1.25rem;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  ${({ theme }) => theme.submitInput};
`;

export default Input;
