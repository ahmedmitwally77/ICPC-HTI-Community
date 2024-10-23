import React, { useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const CodeforcesScraper = () => {
  const [contestants, setContestants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchContestants = async () => {
      setLoading(true);
      setError('');
      
      try {
          const response = await axios.get('https://codeforces.com/group/DGuwfOZy2b/contest/512778/standings/groupmates/true');
          const $ = cheerio.load(response.data);
          const contestantsData = [];

          $('td.contestant-cell.dark').each((index, element) => {
              const nameTag = $(element).find('a');
              const name = nameTag.text();
              const profileLink = 'https://codeforces.com' + nameTag.attr('href');
              contestantsData.push({ name, profileLink });
          });

          setContestants(contestantsData);
      } catch (err) {
          setError('Error fetching data');
      } finally {
          setLoading(false);
      }
  };

  return (
      <div className='py-52'>
          <h1>Contestants</h1>
          <button onClick={fetchContestants} disabled={loading}>
              {loading ? 'Loading...' : 'Fetch Contestants'}
          </button>
          {error && <p>{error}</p>}
          <ul>
              {contestants.map((contestant, index) => (
                  <li key={index}>
                      <a href={contestant.profileLink} target="_blank" rel="noopener noreferrer">
                          {contestant.name}
                      </a>
                  </li>
              ))}
          </ul>
      </div>
  );

};

export default CodeforcesScraper;
