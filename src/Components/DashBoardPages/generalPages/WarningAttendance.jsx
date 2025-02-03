import React, { useState } from 'react'
import { FaCheck, FaEdit, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WarningAttendance = () => {

    const sessions = ["session1", "session2", "session3" , "session4" ,"session5" ," session6"];
        const [standingData, setStandingData] = useState([
              {name:"ahmed essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"alaa essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"essa essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"zezo essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"zozo essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"waal essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
              {name:"ziad essa" , email:"helmyzez@gmail.com" , phone:"01066958945" , session1:true , session2:true , session3:false},
      ]);

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
         
    // 🔹 تغيير حالة الجلسة (true/false)
    const toggleSession = (index, session) => {
        const updatedData = [...standingData];
        updatedData[index][session] = !updatedData[index][session];
        setStandingData(updatedData);
    };
     

  return (
    <div className='warning'>
        <div className="relative overflow-x-auto container">
                    <div className="headerStanding flex justify-between my-3">
                      <h2>Warning</h2>
                      <div className="pb-4 bg-white dark:bg-gray-900">
                        <input
                          type="text"
                          id="table-search"
                          className="block pt-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search by name"
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>

                        {/* if instructor make it display none  */}
                        <div className="drobDowns">
                                        
                          <details className="dropdown  bg-blue-300">
                            <summary className="bg-[#3C5B8E] p-2 rounded-md text-light btn-primary font-medium ">Waves </summary>
                            <ul className="menu dropdown-content bg-blue-400 rounded-box z-[1] w-52 p-2 shadow">
                              <li><Link className='text-light font-semibold no-underline'>Wave 1</Link></li>
                              <li><Link className='text-light font-semibold no-underline'>Wave 2</Link></li>
                            </ul>
                          </details>
                          <details className="dropdown ms-3 bg-blue-300">
                            <summary className="bg-[#3C5B8E] p-2 rounded-md text-light btn-primary font-medium ">Levels </summary>
                            <ul className="menu dropdown-content bg-blue-400 rounded-box z-[1] w-52 p-2 shadow">
                              <li><Link className='text-light font-semibold no-underline'>Level 1</Link></li>
                              <li><Link className='text-light font-semibold no-underline'>Level 2</Link></li>
                            </ul>
                          </details>
            
                          <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                  <Link to={'/'} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                </li>
                                <li>
                                  <Link to={'/'} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                                </li>
                                <li>
                                  <Link to={'/'} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                                </li>
                                <li>
                                  <Link to={'/'} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                                </li>
                              </ul>
                          </div>
            
                        </div>
                        
                    </div>
                    <hr />

                    <div className="btns flex my-3">
                        <Link to={'/dashboard/warning'}
                        class="relative no-underline w-40 flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                        >
                        <span
                            class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                            <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                            <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                        ></span>
                        <span
                            class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >Sheet&Contest</span
                        >
                        </Link>

                        <Link to={'/dashboard/warning_attendance'}
                        class="relative no-underline mx-3 w-32 flex items-center px-6 py-2 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                        >
                        <span
                            class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                        >
                            <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                        >
                            <span
                            class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                            ></span>
                        </span>
                        <span
                            class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                        ></span>
                        <span
                            class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >Attendance</span
                        >
                        </Link>

                            {/* <Link to={'/dashboard/warning'} className="text-light mt-3 p-2 rounded-xl no-underline font-normal bg-[#3C5B8E] hover:bg-blue-500">
                                Sheet&Contest
                            </Link>
                            <Link to={'/dashboard/warning_attendance'} className="text-light mt-3 mx-3 p-2 rounded-xl no-underline font-normal bg-[#3C5B8E] hover:bg-blue-500">
                                Attendance
                            </Link> */}
                    </div>

                    <div className="overflow-x-auto">
                                <table className="w-full table-auto border-separate border-spacing-y-2 border-yellow-300 my-3 text-sm text-left rtl:text-right text-gray-500 min-w-[1000px]">
                                <thead className="text-lg text-[#3A3A3A] uppercase dark:text-gray-400">
                                    <tr>
                                    <th scope="col" className="px-6 py-3 min-w-[180px] whitespace-nowrap">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 min-w-[220px] whitespace-nowrap">
                                        Email
                                    </th>
                                    <th scope="col" className="px-6 py-3 min-w-[160px] whitespace-nowrap">
                                        Phone number
                                    </th>
                                    {sessions.map((session, index) => (
                                        <th
                                        key={index}
                                        scope="col"
                                        className="px-6 py-3 min-w-[140px] text-center whitespace-nowrap"
                                        >
                                        {session}
                                        </th>
                                    ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRows.map((data, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className="font-medium bg-light/75 !border-yellow-300 fs-6 !h-10 text-dark/75 rounded-lg"
                                    >
                                        <td className="px-6 min-w-[180px] whitespace-nowrap text-[#656565]">{data.name}</td>
                                        <td className="px-6 min-w-[220px] whitespace-nowrap text-[#656565]">{data.email}</td>
                                        <td className="px-6 min-w-[160px] whitespace-nowrap text-[#656565]">{data.phone}</td>
                                        {sessions.map((session, sessionIndex) => (
                                        <td
                                            key={sessionIndex}
                                            className="px-6 min-w-[140px] text-center whitespace-nowrap"
                                        >
                                            {data[session] ? (
                                            <FaCheck className="text-green-500 inline-block" />
                                            ) : (
                                            <FaTimes className="text-red-500 inline-block" />
                                            )}
                                            <button
                                            onClick={() => toggleSession(rowIndex, session)}
                                            className="ml-2 text-blue-500 hover:text-blue-700"
                                            >
                                            <FaEdit />
                                            </button>
                                        </td>
                                        ))}
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
            
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
  )
}

export default WarningAttendance