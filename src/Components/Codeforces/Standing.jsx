import axios from "axios";
import { ref } from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { db } from "../../firebase";
import { get, set } from "firebase/database";
import { CodeForcesContextStanding } from "../../Context/CodeForcesStandingContext";

const Standing = () => {
 
  const {standingData,loading,error,filteredData , setFilteredData} = useContext(CodeForcesContextStanding)

  console.log(standingData);
  

  // const [standingData, setStandingData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [filteredData, setFilteredData] = useState([]);

  // // Array of sheet links
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
  //       const handleData = {};
  //       const sheetNames = []; // To store sheet names for dynamic columns

  //       for (let i = 0; i < sheetLinks.length; i++) {
  //         const baseLink = sheetLinks[i];
  //         let page = 1;
  //         let lastContestants = {};
  //         sheetNames.push(`Sheet ${i + 1}`); // Dynamically name the sheets

  //         while (true) {
  //           const link = `${baseLink}/p/${page}/l/2063b65688e40601c8eda6d776202eb9`;
  //           const response = await axios.get(link);
  //           const res = response.data.result;

  //           // Break if no data or repeated data
  //           if (!res.contestants || Object.keys(res.contestants).length === 0) {
  //             break;
  //           }
  //           if (JSON.stringify(res.contestants) === JSON.stringify(lastContestants)) {
  //             break;
  //           }

  //           lastContestants = res.contestants;

  //           for (const handle in res.contestants) {
  //             const problems = res.contestants[handle].ac.split("-").length;

  //             if (!handleData[handle]) {
  //               handleData[handle] = { handle: handle, total: 0 };
  //             }

  //             handleData[handle][`Sheet ${i + 1}`] =
  //               (handleData[handle][`Sheet ${i + 1}`] || 0) + problems;

  //             handleData[handle].total += problems;
  //           }

  //           page++; // Move to the next page
  //         }
  //       }

  //       // Convert handleData object to array for table display
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

  // Generate dynamic columns based on sheet names
  
  const columns = [
    {
      name: "Handle",
      selector: (row) => row.handle,
      sortable: true,
    },
    ...sheetLinks.map((_, i) => ({
      name: `Sheet ${i + 1}`,
      selector: (row) => row[`Sheet ${i + 1}`] || 0,
      sortable: true,
    })),
    {
      name: "Total Solved",
      selector: (row) => row.total,
      sortable: true,
    },
  ];

  const handleFilter = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = standingData.filter((row) => {
      const handleText = row.handle.props.children.toLowerCase();
      return handleText.includes(query);
    });
    setFilteredData(filtered);
  };

  if (loading) {
    return (
      <div id="loading">
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mb-5 mt-5">
      <div className="search text-end">
        <input
          type="text"
          className="form-control w-75 mb-4 m-auto"
          placeholder="Search By Handle"
          onChange={handleFilter}
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
        fixedHeader
        pagination
        conditionalRowStyles={[
          {
            when: (_, index) => index < 5,
            style: {
              backgroundColor: "lightgreen",
              color: "black",
            },
          },
        ]}
      />
      
    </div>
  );

};

export default Standing;


// const [standingData, setStandingData] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
// // const location = useLocation(); 
// // const { url } = location.state || {};


// useEffect(() => {
//   const fetchStandingData = async () => {
//     try {
//       console.log(url);
//       let contestants = [];
//       let page = 1;
//       let lastContestants = {};

//       while (true) {
//         const link = `https://api.scraperapi.com/?api_key=425cda34ea31bfc2ed544e8acd0e3958&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/564666/p/${page}/l/2063b65688e40601c8eda6d776202eb9`;
//         const response = await axios.get(link);
//         const res = response.data.result;
       
        

//         if (!res.contestants || Object.keys(res.contestants).length === 0) {
//           break;
//         }

//         if (JSON.stringify(res.contestants) === JSON.stringify(lastContestants)) {
//           break;
//         }

//         lastContestants = res.contestants;
        

//         for (const handle in res.contestants) {
//           const problems = res.contestants[handle].ac.split("-");
//           contestants.push({
//             handle: (
//               <a
//                 href={`https://codeforces.com/profile/${handle}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {handle}
//               </a>
//             ),
//             total: problems.length,
//           });
//         }
        
//         page++;
//       }
      
//       contestants.sort((a, b) => b.total - a.total);
//       setStandingData(contestants);
//       console.log(contestants);
       
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to fetch data");
//       setLoading(false);
//     }
//   };

//   if(error) window.location.reload();

//   fetchStandingData();
  
// }, [url]);



// const columns = [
//   {
//     name: "Handle",
//     selector: (row) => row.handle,
//     sortable: true,
//   },
//   {
//     name: "Total Problems",
//     selector: (row) => row.total ,
//     sortable: true,
//   },
// ];

// const [rec, setRec] = useState(standingData)
// useEffect(() => {
//   setRec(standingData);
// }, [standingData]);

// function handleFilter(e) {
//   const query = e.target.value.toLowerCase(); // النص المدخل من المستخدم
//   const filteredData = standingData.filter((row) => {
//     // استخراج النص من JSX باستخدام props.children
//     const handleText = row.handle.props.children.toLowerCase();
//     return handleText.includes(query);
//   });
//   setRec(filteredData); // تحديث البيانات المعروضة بناءً على النص المدخل
// }

// const conditionalRowStyles = [
//   {
//     when: (_, index) => index < 5, // تطبيق النمط على أول 5 صفوف
//     style: {
//       backgroundColor: "lightgreen", // لون الخلفية أخضر
//       color: "black", // لون النص
//     },
//   },
// ];

// if (loading) {
//   return (
//     <div id="loading">
//       <div className="sk-cube-grid">
//         <div className="sk-cube sk-cube1"></div>
//         <div className="sk-cube sk-cube2"></div>
//         <div className="sk-cube sk-cube3"></div>
//         <div className="sk-cube sk-cube4"></div>
//         <div className="sk-cube sk-cube5"></div>
//         <div className="sk-cube sk-cube6"></div>
//         <div className="sk-cube sk-cube7"></div>
//         <div className="sk-cube sk-cube8"></div>
//         <div className="sk-cube sk-cube9"></div>
//       </div>
//     </div>
//   );
// }
// if (error) return <p>{error}</p>;




// return (
//   <div>
//     <div className="container mb-5 mt-5">
//       <div className="search text-end">
//         <input type="text" className='form-control w-75 mb-4 m-auto ' placeholder='search By Handle'  onChange={handleFilter}/>
//       </div>
//       <DataTable
//         columns={columns}
//         data={rec}
//         fixedHeader
//         pagination
//         conditionalRowStyles={conditionalRowStyles}
//       />
//     </div>
//     {/* <table border="1" style={{ width: "100%", textAlign: "left" }}>
//       <thead>
//         <tr>
//           <th>Handle</th>
//           <th>Total Solved</th>
//         </tr>
//       </thead>
//       <tbody>
//         {standingData.map((contestant, index) => (
//           <tr key={index}>
//             <td>{contestant.handle}</td>
//             <td>{contestant.total}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table> */}
//   </div>
// );