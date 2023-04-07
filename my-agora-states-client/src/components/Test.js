import { useParams } from 'react-router-dom';

export default function Test() {
  console.log(useParams());
  console.log('hi');
  return <h1>Hello world!</h1>;
}
