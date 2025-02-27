import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const WaveDash = () => {
  
  const [selectedRows, setSelectedRows] = useState([]);
  const navigate = useNavigate();


  const { userToken } = useContext(AuthContext); // استدعاء التوكن من الكونتكست

  function getAllCamps() {
    return axios.get("https://icpc-hti.vercel.app/api/camp", {
      headers: { token: userToken },
    });
  }

 const { data, isLoading, isError, refetch } = useQuery("getAllCamps", getAllCamps, {
     enabled: false, // لا يتم جلب البيانات تلقائيًا
     refetchOnWindowFocus: false, // لا يعيد الجلب عند التنقل بين التبويبات
   });
   
   // دالة لاستدعاء البيانات مرة واحدة عند الحاجة
    useEffect(() => {
       refetch();
     }, []);



  const handleDeleteClick = (id) => {
    try{
       axios.delete(`https://icpc-hti.vercel.app/api/camp/${id}`, {
        headers: { token: userToken },
      });

      refetch()
      // alert("level deleted ^-^");
      toast.success("wave deleted successfully", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      refetch()
    } catch (error) {
      console.error("خطأ أثناء إرسال البيانات:", error);
      // alert("فى مشكله حصلت");
      toast.error("There is an error whule deleting", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    }

  };

  // update it in api updates
  const handleUpdateClick = (camp) => {
    navigate("addwave", { state: {
       campId: camp._id,
       startDate: camp.startDate, 
       endDate: camp.endDate, 
       title: camp.title, 
       description: camp.description ,
       registration: camp.registration ,
       levelId: camp.levelId ,
       instructorId: camp.instructorId,
       mentorsId: camp.mentorsId ,
       hrIds: camp.hrIds} });
  };


  if (isLoading) return <>
  <div className="flex align-middle pt-16 justify-center">
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
//  if (isError) return <p>حدث خطأ أثناء تحميل البيانات.</p>;
console.log(data?.data.data);


    return (
      <div className="wave dash">
              <ToastContainer />

        <div className="relative overflow-x-auto container">
          <div className="headerStanding flex justify-between my-3">
            <h2>Waves</h2>
            <div className="add Level">
              <Link
                to={"addwave"}
                className="no-underline text-dark flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              >
                Add Wave
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
  
          <table className="w-full border-separate border-spacing-y-2 border-yellow-300 my-3 text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-lg text-[#3A3A3A] uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3  min-w-[180px] whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="px-6 py-3  ">
                Trainees
                </th>
                <th scope="col" className="px-6 py-3  min-w-[180px] whitespace-nowrap">
                  Published
                </th>
                <th scope="col" className="px-6 py-3  ">
                Registration
                </th>
                <th scope="col" className="px-6 py-3 text-center min-w-[280px] whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            {isError ? <><p className="py-32">حدث خطأ أثناء تحميل البيانات.</p></> : <>
            <tbody>
              {data?.data.data.map((data, index) => (
                <tr
                  key={index}
                  className={`font-medium bg-light/75 !border-yellow-300 fs-6 !h-10 text-dark/75 rounded-lg ${
                    selectedRows.includes(index) ? "bg-gray-200" : ""
                  }`}
                >
                  <td className="px-6 text-center">{data.title}</td>
                  <td className="px-6 text-center">{data?.trainees?.length}</td>
                  <td className="px-6 text-center">{data.createdAt}</td>
                  <td className="px-6 text-center">{data.registration ? <>true</> : <>false</>}</td>
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
            
            </>}

          </table>
  
          
        </div>
      </div>
    );
}

export default WaveDash