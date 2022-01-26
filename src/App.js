import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import PersonList from './Fetch.js';
export default function App() {
  const { content, setContent } = useState('');
  const { error, setError } = useState(null);
  const [loading, setLoading] = useState(null);
  const [person, setPerson] = useState('');
  const [data, setData] = useState([]);

  const fetchRandomData = () => {
    axios
      .get('https://api.quotable.io/random')
      .then((response) => {
        console.log(response.data.content);
        setContent(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading('loading...');
    //setError(null);
    const source = axios.CancelToken.source();

    axios
      .get(`https://jsonplaceholder.typicode.com/users`, {
        cancelToken: source.token,
      })
      .then((res) => {
        setLoading(false);
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        //setError('An error occurred. Awkward..');
        console.error(err);
      });
    return () => {
      source.cancel();
    };
  }, []);
  return (
    <div>
      <h1>Fetch List with useFetch</h1>
      {loading}
      <ul>
        {data.map((item) => (
          <li>
            <a href={item.name}>{item.name}</a>
          </li>
        ))}
      </ul>
      {error || (null && <p>{error}</p>)}
    </div>
  );
}
