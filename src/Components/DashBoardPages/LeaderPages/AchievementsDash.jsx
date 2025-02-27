import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AchievementsDash = () => {
  const [standingData, setStandingData] = useState([]);

  function getAllAchievements() {
    const option = {
      method: "GET",
      url: "https://icpc-hti.vercel.app/api/achievement",
      headers: { token: localStorage.getItem("userToken") }
    }
    axios.request(option).then(function (response) {
      if (response.status === 200) {
        setStandingData(response.data.data)
      }
    }).catch((error) => {
      alert(error.message)
    });
  }

  useEffect(() => {
    getAllAchievements()
  }, []);




  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);

  const navigate = useNavigate();




  const handleDeleteClick = (id) => {
    setRowToDelete(id);
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    if (rowToDelete !== null) {
      const option = {
        method: "DELETE",
        url: `https://icpc-hti.vercel.app/api/achievement/${rowToDelete}`,
        headers: { token: localStorage.getItem("userToken") }
      }
      axios.request(option).then( (response)=> {
        if (response.status === 200) {
          alert('تم حذف الخبر بنجاح');
          getAllAchievements()
        }
      }).catch((error) => {
        alert(error.message)
      });
      setShowDeletePopup(false);
      setRowToDelete(null);
    
    }
  };

  // update it in api updates
  const handleCancelDelete = () => {
    setShowDeletePopup(false);
    setRowToDelete(null);
  };

  // update it in api updates
  const handleUpdateClick = (session) => {

    // navigate(`/updatesession/${session}`);
    navigate(`addachievement`);
  };


  return (
    <div className='AchievementDash'>
      <div className="relative overflow-x-auto container">
        <div className="headerStanding flex justify-between my-3">
          <h2>Achievement</h2>
          <div className="add Achievement">
            <Link
              to={'addAchievement'}
              className="no-underline text-dark flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Add Achievement
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
              <th scope="col" className="px-6 py-3 text-center">
                Achievements
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Published
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {standingData.map((data, index) => (
              <tr
                key={data.id}
                className={`font-medium bg-light/75 !border-yellow-300 fs-6 !h-10 text-dark/75 rounded-lg
                  }`}
              >
                <td className="px-6 text-center">
                  {data.title}
                </td>
                <td className="px-6 text-center">
                  {data.id}
                </td>
                <td className="px-6 text-center">
                {new Date(data.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 text-center">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded mx-2"
                    onClick={() => handleDeleteClick(data.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded mx-2"
                    onClick={() => handleUpdateClick(data.session)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
        {showDeletePopup && (
          <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
              <p>هل متأكد من حذف الخبر</p>
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
        )}
      </div>
    </div>
  );
}

export default AchievementsDash