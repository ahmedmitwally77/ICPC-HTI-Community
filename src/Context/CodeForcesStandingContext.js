import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const CodeForcesContextStanding = createContext();

export const CodeForcesContextStandingProvider = ({ children }) => {
  const [standingData, setStandingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  // Array of sheet links
  const sheetLinks = [
    `https://api.scraperapi.com/?api_key=27e61be1a3defcd52a5ba98456c4dbf3&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/560740`,
    `https://api.scraperapi.com/?api_key=27e61be1a3defcd52a5ba98456c4dbf3&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/562542`,
    `https://api.scraperapi.com/?api_key=27e61be1a3defcd52a5ba98456c4dbf3&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/563052`,
    `https://api.scraperapi.com/?api_key=27e61be1a3defcd52a5ba98456c4dbf3&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/564666`,
    `https://api.scraperapi.com/?api_key=27e61be1a3defcd52a5ba98456c4dbf3&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/568330`,
    `https://api.scraperapi.com/?api_key=27e61be1a3defcd52a5ba98456c4dbf3&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/569054`,
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {

  //       // إذا لم تكن البيانات موجودة في Firestore، اجلبها من API
  //       const handleData = {};
  //       const promises = [];

  //       for (let i = 0; i < sheetLinks.length; i++) {
  //         const baseLink = sheetLinks[i];
  //         let page = 1;

  //         while (true) {
  //           const link = `${baseLink}/p/${page}/l/2063b65688e40601c8eda6d776202eb9`;

  //           promises.push(
  //             axios.get(link).then((response) => {
  //               const res = response.data.result;

  //               if (!res.contestants || Object.keys(res.contestants).length === 0) {
  //                 return null;
  //               }

  //               for (const handle in res.contestants) {
  //                 const problems = res.contestants[handle].ac.split("-").length;

  //                 if (!handleData[handle]) {
  //                   handleData[handle] = { handle: handle, total: 0 };
  //                 }

  //                 handleData[handle][`Sheet ${i + 1}`] =
  //                   (handleData[handle][`Sheet ${i + 1}`] || 0) + problems;

  //                 handleData[handle].total += problems;
  //               }

  //               return true;
  //             })
  //           );

  //           page++;
  //         }
  //       }

  //       await Promise.all(promises);

  //       const tableData = Object.keys(handleData).map((key) => ({
  //         ...handleData[key],
  //         handle: (
  //           <a
  //             href={`https://codeforces.com/profile/${handleData[key].handle}`}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             {handleData[key].handle}
  //           </a>
  //         ),
  //       }));

  //       setStandingData(tableData);
  //       setFilteredData(tableData);
  //       setLoading(false);
  //     } catch (err) {
  //       setError("Failed to fetch data");
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <CodeForcesContextStanding.Provider
      value={{ standingData, loading, error, filteredData, setFilteredData }}
    >
      {children}
    </CodeForcesContextStanding.Provider>
  );
};
