import React, { useEffect, useState } from 'react'

const Sheet = () => {

    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const contestId = 560740; // ضع هنا معرف المسابقة
  
    useEffect(() => {
      // جلب البيانات من API
      fetch(
        `https://codeforces.com/api/contest.standings?contestId=${contestId}&from=1&count=100`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "OK") {
            setProblems(data.result.problems); // تخزين المشاكل
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
        console.log(problems);
        console.log(problems);
    }, [contestId]);
    console.log(problems);
    if (loading) return <p>Loading...</p>;

    return (
        <div>
          <h1>Contest {contestId} Problems</h1>
          <ul>
            {problems.map((problem, index) => (
              <li key={index}>
                <strong>
                  {problem.index}: {problem.name}
                </strong>
                <br />
                Tags: {problem.tags?.join(", ") || "None"}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Sheet