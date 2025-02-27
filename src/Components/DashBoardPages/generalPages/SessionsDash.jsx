import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import { useQuery } from 'react-query';

const SessionsDash = () => {
  const standingData = [
    { name: "Data type", published: "3/2/2025", attendance: "335", session: "Session1" },
    { name: "stls2", published: "3/2/2025", attendance: "335", session: "Session2" },
    { name: "Data type", published: "3/2/2025", attendance: "335", session: "Session3" },
    { name: "Data type", published: "3/2/2025", attendance: "335", session: "Session4" },
    { name: "stls1", published: "3/2/2025", attendance: "335", session: "Session5" },
    { name: "Data type", published: "3/2/2025", attendance: "335", session: "Session6" },
    { name: "Data type", published: "3/2/2025", attendance: "335", session: "Session7" },
  ];

  // const [searchTerm, setSearchTerm] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  // const rowsPerPage = 20;
  const navigate = useNavigate();

  const { userToken } = useContext(AuthContext); // استدعاء التوكن من الكونتكست


  function getAllSessions() {
    return axios.get("https://icpc-hti.vercel.app/api/session", {
      headers: { token: userToken },
    });
  }


  
 const { data, isLoading, isError, refetch } = useQuery("getAllSessions", getAllSessions, {
     enabled: false, // لا يتم جلب البيانات تلقائيًا
     refetchOnWindowFocus: false, // لا يعيد الجلب عند التنقل بين التبويبات
   });
   console.log(data?.data.data);
   
   
   // دالة لاستدعاء البيانات مرة واحدة عند الحاجة
    useEffect(() => {
       refetch();
     }, []);


  // const filteredData = data?.data.data.filter((data) =>
  //   data?.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const indexOfLastRow = currentPage * rowsPerPage;
  // const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  // const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

 
  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`https://icpc-hti.vercel.app/api/session/${id}`, {
        headers: { token: userToken },
      });
      await refetch();
      alert("Session deleted successfully!");
    } catch (error) {
      console.error("Error deleting session:", error);
      alert("حدثت مشكلة أثناء الحذف.");
    }
  };
  

  // update it in api updates
  const handleUpdateClick = (session) => {
    console.log(session);
    
    navigate("addsession", {
      state: {
        sessionId: session._id,
        title: session.title,
        description: session.description,
        sessionLink: session.sessionLink || "",
        sessionSlides: session.sessionSlides || "",
        levelId: session.levelId || "",
        campId: session.campId || "",
        sheetUpsolveLink: session.sessionSheet.sheetLink|| "",
        sessionSheetLink: session.sessionSheet.sheetUpsolve  || "",
        contestUpsolveLink: session.sessionContest.sheetLink || "",
        sessionContestLink: session.sessionContest.sheetUpsolve || "",
        attendance: session.attendance || false,
      },
    });  };

  if (isLoading) return <>
  <div className="flex align-middle py-32 justify-center">
    <div class="animate-pulse flex flex-col items-center gap-4 w-100">
      <div>
        <div class="w-48 h-6 bg-slate-400 rounded-md"></div>
        <div class="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
      </div>
      <div class="h-7 bg-slate-400 w-full rounded-md"></div>
      <div class="h-7 bg-slate-400 w-full rounded-md"></div>
      <div class="h-7 bg-slate-400 w-full rounded-md"></div>
      <div class="h-7 bg-slate-400 w-1/2 rounded-md"></div>
    </div>
  </div>
  </>;

// if (isError) return <p className="py-32">حدث خطأ أثناء تحميل البيانات.</p>;


  return (
    <div className='SessionsDash'>
      <div className="relative overflow-x-auto container">
        <div className="headerStanding flex justify-between my-3">
          <h2>Sessions</h2>
          <div className="add session">
            <Link
              to={'addsession'}
              className="no-underline text-dark flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Add Session
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <hr />

        {isError? <><p className="py-32">حدث خطأ أثناء تحميل البيانات.</p></> : <>
        
        <table className="w-full border-separate border-spacing-y-2 border-yellow-300 my-3 text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-lg text-[#3A3A3A] uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center min-w-[220px] whitespace-nowrap">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Published
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Attendance
              </th>
              <th scope="col" className="px-6 py-3 text-center  min-w-[300px] whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>

 

            
              {data?.data.data.map((data, index) => (
              <tr
                key={index}
                className={`font-medium bg-light/75 !border-yellow-300 fs-6 !h-10 text-dark/75 rounded-lg ${
                  selectedRows.includes(index) ? 'bg-gray-200' : ''
                }`}
              >
                <td className="px-6 text-center">
                  {data.title}
                </td>
                <td className="px-6 text-center">
                  {data.createdAt}
                </td>
                <td className="px-6 text-center">
                  {data.attendedTrainees.length}
                </td>
                <td className="px-6 text-center">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded mx-2"
                    onClick={() => handleDeleteClick(data._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded mx-2"
                    onClick={() => handleUpdateClick(data)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          
          </tbody>
        </table>
        </>}

        {/* {filteredData.length > rowsPerPage && (
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
        )} */}

        {/* {showDeletePopup && (
          <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
              <p>هل متأكد من حذف الجلسة؟</p>
              <div className="flex justify-center mt-4">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded mx-2"
                  onClick={handleConfirmDelete}
                >
                  احذف يعم
                </button>
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded mx-2"
                  onClick={handleCancelDelete}
                >
                  لا متحذفش
                </button>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SessionsDash;