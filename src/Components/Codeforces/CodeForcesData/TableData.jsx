import React, { useState, useEffect } from 'react';
import { Get_Accepted } from './Get_Accepted';

function TableData() {
  const [standingData, setStandingData] = useState([]);
  const [loading, setLoading] = useState(false);

  // دالة لجلب البيانات
  const fetchData = async () => {
    setLoading(true); // بدء التحميل
    try {
      await Get_Accepted((data) => {
        setStandingData(data); // تحديث البيانات
        setLoading(false); // إيقاف التحميل

        // حفظ البيانات ووقت التحديث في localStorage
        localStorage.setItem('standingData', JSON.stringify(data));
        localStorage.setItem('lastUpdated', new Date().getTime());
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // إيقاف التحميل في حالة حدوث خطأ
    }
  };

  // جلب البيانات عند تحميل المكون (إذا مرت 24 ساعة أو لم تكن هناك بيانات)
  useEffect(() => {
    const savedData = localStorage.getItem('standingData'); // التحقق من وجود بيانات في localStorage
    const lastUpdated = localStorage.getItem('lastUpdated'); // وقت آخر تحديث
    const now = new Date().getTime(); // الوقت الحالي
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24 ساعة بالميلي ثانية

    // إذا لم تكن هناك بيانات أو مرت 24 ساعة منذ آخر تحديث
    if (!savedData || (lastUpdated && now - lastUpdated > twentyFourHours)) {
      fetchData(); // جلب البيانات
    } else if (savedData) {
      setStandingData(JSON.parse(savedData)); // استخدام البيانات المخزنة
    }
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Codeforces Standing</h1>
      <div className="text-center mb-4">
        <button
          className="btn btn-primary"
          onClick={fetchData} // استدعاء fetchData مباشرةً عند النقر
          disabled={loading}
        >
          {loading ? 'جاري التحديث...' : 'تحديث البيانات'}
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              {standingData[0]?.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {standingData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }}></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableData;