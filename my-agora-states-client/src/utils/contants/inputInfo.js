const INPUT_INFO = [
  {
    element: 'textInput',
    htmlFor: 'id',
    labelText: 'GitHub ID',
    type: 'text',
    name: 'id',
    id: 'id',
    required: true,
    placeholder: 'GitHub ID를 입력하세요.',
  },
  {
    element: 'textInput',
    htmlFor: 'title',
    labelText: 'Question Title',
    type: 'text',
    name: 'title',
    id: 'title',
    required: true,
    placeholder: '질문의 제목을 작성하세요.',
  },
  {
    element: 'textarea',
    htmlFor: 'story',
    labelText: 'Question Title',
    name: 'story',
    id: 'story',
    required: true,
    placeholder: '질문의 내용을 작성하세요.',
  },
  {
    element: 'submitInput',
    type: 'submit',
    value: 'Submit',
  },
];

export default INPUT_INFO;
