import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Sheet = ({link}) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "efc0c555508381d513fd60c169d3b6bd"; // استبدل بمفتاح API الخاص بك
      const targetUrl = link;
  
      const scraperApiUrl = `https://api.scraperapi.com?api_key=${apiKey}&url=${encodeURIComponent(
        targetUrl
      )}`;
      try {
        const response = await axios.get(scraperApiUrl);
  
          setData(response.data.result.contest.problems);
          setLoading(false);
      } catch (err) {
        setError("Failed to fetch data", err);
        setLoading(false);
      }
    };
    fetchData();
    console.log(data);

    const interval = setInterval(() => {
      if (!data) {
        console.log("Retrying to fetch data...");
        fetchData();
      } else {
        clearInterval(interval); // أوقف المؤقت إذا تم جلب البيانات
      }
    }, 5000); // حاول مرة كل 5 ثوانٍ

    return () => clearInterval(interval); // تنظيف المؤقت عند إلغاء التركيب
    
  }, [link]);
  
    const [selectedProblems, setSelectedProblems] = useState([]);
  
    const handleCheckboxChange = (problemName) => {
      setSelectedProblems((prev) =>
        prev.includes(problemName)
          ? prev.filter((name) => name !== problemName)
          : [...prev, problemName]
      );
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

    if (error) return <div className='py-52'>{error}</div>;

    return (
        <div className='py-5'>

            <div className="table">
            <table border="1" style={{ width: "100%", textAlign: "left" }}>
              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>Problem Name</th>
                  <th>Link</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {data.map((problem, index) => (
                  <tr key={index}>
                    {/* <td>{index + 1}:-</td> */}
                    <td>{problem.name}</td>
                    <td>
                      <a href={problem.link} target="_blank" rel="noopener noreferrer">
                        View Problem
                      </a>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedProblems.includes(problem.name)}
                        onChange={() => handleCheckboxChange(problem.name)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            </div>
            
          </div>
      );
}

export default Sheet