import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const CodeForcesContextStanding = createContext();

export const CodeForcesContextStandingProvider = ({ children }) => {

  const standingData =[
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"alaa essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ahmed essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"waal essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ls;fsd essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
    {name:"ziad essa" , sheet1:"20 / 30" , sheet2:"20 / 30" , sheet3: "40 / 50" , sheet4:"20 / 50", sheet5:"20 / 50", sheet6:"20 / 50", },
  ]
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
      value={{ standingData }}
    >
      {children}
    </CodeForcesContextStanding.Provider>
  );
};
