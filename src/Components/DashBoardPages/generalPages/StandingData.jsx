import React, { useState } from 'react'

const StandingData = () => {

  const standingData =[
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"alaa essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ahmed essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"waal essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ls;fsd essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
    {name:"ziad essa" , handle:"ziad_essa" , mentor:"mohamed alaa" , total: "40 / 50" },
  ]

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  // 🔹 تصفية البيانات بناءً على البحث
  const filteredData = standingData.filter((data) =>
    data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 تقسيم البيانات لصفحات
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);


  return (
    <div className="standing">
      <div className="relative overflow-x-auto container">
        <div className="headerStanding flex justify-between my-3">
          <h2>Standing</h2>
          <div className="pb-4 bg-white dark:bg-gray-900">
            <input
              type="text"
              id="table-search"
              className="block pt-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by name"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <hr />

          <table className="w-full border-separate border-spacing-y-2 my-3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-[#3A3A3A] uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Handle
                </th>
                <th scope="col" className="px-6 py-3">
                  Mentor
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((data, index) => (
                <tr
                  key={index}
                  className={`font-medium border fs-6 !h-10 text-light rounded-lg  ${
                    indexOfFirstRow + index < 10 ? "bg-[#71C07D]" : "bg-[#FEBA12]"
                  }`}
                >
                  <td className="px-6">
                    <span className={`mx-2 bg-light text-[#71C07D] px-2 rounded-sm  ${
                    indexOfFirstRow + index < 10 ? "text-[#71C07D]" : "text-[#FEBA12]"
                  }`}>
                      {indexOfFirstRow + index + 1}
                    </span>
                    {data.name}
                  </td>
                  <td className="px-6 underline">{data.handle}</td>
                  <td className="px-6">{data.mentor}</td>
                  <td className="px-6">{data.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

        {/* 🔹 أزرار التنقل بين الصفحات */}
        {filteredData.length > rowsPerPage && (
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded mx-2 disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded mx-2 disabled:opacity-50"
              disabled={indexOfLastRow >= filteredData.length}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StandingData
