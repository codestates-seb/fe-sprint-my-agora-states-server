import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Discussions from './components/Discussions';
import { apis } from './api';

function App() {
  const [discussions, setDiscussions] = useState([]);
  console.log(discussions);

  useEffect(() => {
    const getDiscussions = async () => {
      const { data } = await apis.getDiscussions();
      setDiscussions(data);
    };
    getDiscussions();
  }, []);

  return (
    <Layout>
      <Hero setDiscussions={setDiscussions} />
      <Discussions discussions={discussions} />
    </Layout>
  );
}

export default App;
