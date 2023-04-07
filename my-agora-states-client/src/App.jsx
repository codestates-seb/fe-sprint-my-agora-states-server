import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Discussions from './components/Discussions';
import { apis } from './api';

function App() {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    const getDiscussions = async () => {
      const { data } = await apis.getDiscussions();
      setDiscussions(data);
    };
    getDiscussions();
  }, []);

  const del = async (id) => {
    await apis.deleteDiscussion(id);
    setDiscussions((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <Layout>
      <Hero setDiscussions={setDiscussions} />
      <Discussions discussions={discussions} onDelete={del} />
    </Layout>
  );
}

export default App;
