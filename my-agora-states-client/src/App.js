import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DataForm from './components/DataForm';
import DataList from './components/DataList';

function App() {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/discussions');
      setDatas(response.data);
    } catch (error) {
      console.error('error', error.message);
      throw error;
    }
  };

  const postData = async (body) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/discussions',
        body
      );
      console.log(response.data);
      setDatas([response.data, ...datas]);
    } catch (error) {
      console.error('error', error.message);
      throw error;
    }
  };

  const postDelete = async (id) => {
    try {
      const response = await axios.delete(
        'http://localhost:4000/discussions/' + id
      );
      setDatas(datas.filter((el) => el.id !== id));
    } catch (error) {
      console.error('error', error.message);
      throw error;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header>
        <h1>my agora states</h1>
      </header>
      <main>
        <DataForm onCreate={postData}></DataForm>
        <ul>
          {datas.map((data) => (
            <DataList onDelete={postDelete} data={data} key={data.id} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
