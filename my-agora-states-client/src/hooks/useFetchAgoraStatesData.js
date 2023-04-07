import axios from 'axios';
import { useState, useEffect } from 'react';

const url = 'http://localhost:4000/discussions';

export default function useFetchAgoraStatesData() {
  const [agoraStatesData, setAgoraStatesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(url).then((res) => res.data);
      setAgoraStatesData(data);
    };

    fetchData();
  }, []);

  return { agoraStatesData };
}
