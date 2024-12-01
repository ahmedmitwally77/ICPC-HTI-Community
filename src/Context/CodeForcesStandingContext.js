import axios from 'axios';
import { db } from '../firebase';
import React, {  createContext, useEffect, useState } from 'react'

export const CodeForcesContextStanding = createContext();

export const CodeForcesContextStandingProvider = ({children})=>{
   
  const [standingData, setStandingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  // Array of sheet links
  const sheetLinks = [
    `https://api.scraperapi.com/?api_key=425cda34ea31bfc2ed544e8acd0e3958&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/560740`,
    `https://api.scraperapi.com/?api_key=425cda34ea31bfc2ed544e8acd0e3958&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/562542`,
    `https://api.scraperapi.com/?api_key=425cda34ea31bfc2ed544e8acd0e3958&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/563052`,
    `https://api.scraperapi.com/?api_key=425cda34ea31bfc2ed544e8acd0e3958&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/564666`,
    `https://api.scraperapi.com/?api_key=425cda34ea31bfc2ed544e8acd0e3958&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/568330`,
    `https://api.scraperapi.com/?api_key=425cda34ea31bfc2ed544e8acd0e3958&url=https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/569054`,
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // تحقق إذا كانت البيانات موجودة في Local Storage ومحدثة
        const cachedData = JSON.parse(localStorage.getItem("standingData"));
        const lastUpdated = localStorage.getItem("lastUpdated");
        const now = new Date();

        if (cachedData && lastUpdated) {
          const hoursSinceUpdate =
            (now - new Date(lastUpdated)) / (1000 * 60 * 60);
          if (hoursSinceUpdate < 24) {
            // إذا كانت البيانات محدثة، استخدمها
            setStandingData(cachedData);
            setFilteredData(cachedData);
            setLoading(false);
            return;
          }
        }

        // إذا لم تكن البيانات موجودة أو قديمة، اجلب البيانات من API
        const handleData = {};
        const promises = [];

        for (let i = 0; i < sheetLinks.length; i++) {
          const baseLink = sheetLinks[i];
          let page = 1;

          while (true) {
            const link = `${baseLink}/p/${page}/l/2063b65688e40601c8eda6d776202eb9`;

            promises.push(
              axios.get(link).then((response) => {
                const res = response.data.result;

                if (!res.contestants || Object.keys(res.contestants).length === 0) {
                  return null;
                }

                for (const handle in res.contestants) {
                  const problems = res.contestants[handle].ac.split("-").length;

                  if (!handleData[handle]) {
                    handleData[handle] = { handle: handle, total: 0 };
                  }

                  handleData[handle][`Sheet ${i + 1}`] =
                    (handleData[handle][`Sheet ${i + 1}`] || 0) + problems;

                  handleData[handle].total += problems;
                }

                return true;
              })
            );

            page++;
          }
        }

        await Promise.all(promises);

        const tableData = Object.keys(handleData).map((key) => ({
          ...handleData[key],
          handle: (
            <a
              href={`https://codeforces.com/profile/${handleData[key].handle}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {handleData[key].handle}
            </a>
          ),
        }));

        setStandingData(tableData);
        setFilteredData(tableData);

        // حفظ البيانات في Local Storage
        localStorage.setItem("standingData", JSON.stringify(tableData));
        localStorage.setItem("lastUpdated", now.toISOString());

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  const saveArrayToFirestore = async (arrayData) => {
    try {
      if (!arrayData || arrayData.length === 0) {
        console.log('No data to save.');
        return;
      }
      // اكتب البيانات كمصفوفة في المستند المحدد
      await db.collection('standing').doc('standingDoc').set({
        data: arrayData,
        updatedAt: new Date().toISOString(), // إضافة تاريخ التحديث (اختياري)
      });
      console.log('Array saved to Firestore!');
    } catch (error) {
      console.error('Error saving array to Firestore:', error);
    }
  };
  
  
  

  // Firestore.collection('standing').doc('standingDoc').get().then((doc) => {
  //   if (doc.exists) {
  //     console.log('Array data:', doc.data().data);
  //   } else {
  //     console.log('No such document!');
  //   }
  // }).catch((error) => {
  //   console.error('Error fetching array:', error);
  // });
  
    
    return(
        <CodeForcesContextStanding.Provider value={{standingData,loading,error,filteredData,setFilteredData}} >
            {children}
        </CodeForcesContextStanding.Provider>
    )

}