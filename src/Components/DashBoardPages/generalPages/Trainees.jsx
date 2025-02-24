import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import { useQuery } from "react-query";

const Trainees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const rowsPerPage = 15;

  const navigate = useNavigate();
  const { userToken } = useContext(AuthContext); // استدعاء التوكن من الكونتكست

  function getRequestData() {
    return axios.get(
      `https://icpc-hti.vercel.app/api/user?size=${rowsPerPage}&page=${currentPage}`,
      {
        headers: { token: userToken },
      }
    );
  }

  const { data, isLoading, isError, refetch } = useQuery(
    ["getRequestData", currentPage],
    getRequestData,
    {
      keepPreviousData: true, // للحفاظ على البيانات القديمة أثناء تحميل الجديدة
      refetchOnWindowFocus: false,
    }
  );

  console.log(data?.data?.data);

  // دالة لاستدعاء البيانات مرة واحدة عند الحاجة
  useEffect(() => {
    refetch();
  }, [currentPage]);

  const filteredData = data?.data?.data
    ? data.data.data.filter((data) =>
        data?.firstName?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData?.slice(indexOfFirstRow, indexOfLastRow);

  // 🔹 تحديد أو إلغاء تحديد كل الصفوف
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const allRows = currentRows.map((_, index) => index);
      setSelectedRows(allRows);
    }
    setSelectAll(!selectAll);
  };

  // 🔹 تحديد أو إلغاء تحديد صف معين
  const handleRowSelect = (index) => {
    const newSelectedRows = [...selectedRows];
    if (newSelectedRows.includes(index)) {
      newSelectedRows.splice(newSelectedRows.indexOf(index), 1);
    } else {
      newSelectedRows.push(index);
    }
    setSelectedRows(newSelectedRows);
  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`https://icpc-hti.vercel.app/api/user/profile/${id}`, {
        headers: { token: userToken },
      });
      refetch(); // تحديث البيانات بعد العملية
      alert("delete done");
    } catch (err) {
      alert("error while delete");
      return console.error("Request failed", err);
    }
  };

  // update it in api updates
  const HandleApproveClick = (id) => {
    setRowToDelete(id);
    setShowDeletePopup(true);
  };
  const cancle = () => {
    setShowDeletePopup(false);
  };

  const handleConfirmDelete = async () => {
    if (rowToDelete !== null && selectedRole) {
      try {
        await axios.patch(
          `https://icpc-hti.vercel.app/api/user/profile/${rowToDelete}`,
          { role: selectedRole },
          {
            headers: { token: userToken },
          }
        );
        refetch(); // تحديث البيانات بعد العملية
        setShowDeletePopup(false);
        alert("Role updated successfully");
      } catch (err) {
        alert("Error while updating role");
        console.error("Request failed", err);
      }
      setRowToDelete(null);
    } else {
      alert("Please select a role first!");
    }
  };



  if (isLoading)
    return (
      <>
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
      </>
    );
  // if (isError) return <p className="py-32">حدث خطأ أثناء تحميل البيانات.</p>;

  return (
    <div className="Sheets_Contest">
      <div className="relative overflow-x-auto container">
        <div className="headerStanding flex justify-between my-3">
          <h2>Trainees</h2>
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
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2 border-yellow-300 my-3 text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-lg text-[#3A3A3A] uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <input
                    className="checkbox-error checkbox checkbox-sm"
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 min-w-[220px] whitespace-nowrap"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 min-w-[180px] whitespace-nowrap"
                >
                  Handle
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 min-w-[180px] whitespace-nowrap"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 min-w-[150px] whitespace-nowrap"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 min-w-[120px] whitespace-nowrap"
                >
                  Status
                </th>
                {/* <th scope="col" className="px-6 py-3">
                Phone number
              </th> */}
                <th
                  scope="col"
                  className="px-6 py-3 min-w-[320px] whitespace-nowrap text-center"
                >
                  Actions
                </th>
              </tr>
            </thead>
            {isError ? <><p className="py-32">there is an error</p></> : <>
            
            <tbody>
              {currentRows.map((data, index) => (
                <tr
                  key={index}
                  className={`font-medium bg-light/75 !border-yellow-300 fs-6 !h-10 text-dark/75 rounded-lg ${
                    selectedRows.includes(index) ? "bg-gray-200" : ""
                  }`}
                >
                  <td className="px-6">
                    <input
                      className="checkbox checkbox-sm checkbox-success"
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleRowSelect(index)}
                    />
                  </td>
                  <td className="px-6">
                    {data?.firstName} {data?.lastName}
                  </td>
                  <td className="px-6">{data.codeforces_handle}</td>
                  <td className="px-6">{data.email}</td>
                  <td className="px-6">{data.role}</td>
                  <td className="px-6">{data.status}</td>
                  {/* <td className="px-6">{data.phone}</td> */}
                  <td className="px-6 text-center">
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded mx-2"
                      onClick={() => handleDeleteClick(data._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded mx-2"
                      onClick={() => HandleApproveClick(data._id)}
                    >
                      change role
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            </>}

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

        {showDeletePopup && (
        <div className="fixed z-50  inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-16 rounded-lg">
            <div className="flex w-100 justify-center mt-4">
            <form className="mt-5 w-100">
              <div className="w-100 me-2">
                <label
                  htmlFor="collegeYear"
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Change user role 
                </label>
                <select
                  name="collegeYear"
                  className="form-control mb-2"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value="">--Choose user--</option>
                  <option value="leader">leader</option>
                  <option value="instructor">instructor</option>
                  <option value="mentor">mentor</option>
                  <option value="hr">hr</option>
                  <option value="trainee">trainee</option>
                </select>
              </div>

              <div className="text-center w-100">
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  className="btnnew"
                >
                  Change Role
                </button>

                <button
                  type="button"
                  onClick={cancle}
                  className="btnnew"
                >
                  cancle
                </button>
              </div>
            </form>
              
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Trainees;
