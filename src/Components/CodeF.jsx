import DataTable from 'react-data-table-component';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const CodeF = () => {
    
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // لمتابعة حالة التحميل
  const [error, setError] = useState(null); // لمتابعة الأخطاء إن وجدت

  useEffect(() => {
    // دالة جلب البيانات
    const fetchData = async () => {
      try {
        const response = await fetch('https://cosmic-buttercream-1c5257.netlify.app/.netlify/functions/ac/g/DGuwfOZy2b/c/502525/p/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result); // تخزين البيانات في الـ state
        setLoading(false);
      } catch (error) {
        setError(error); // تخزين الخطأ إن وجد
        setLoading(false);
      }
    };

    fetchData();
    console.log(data);
    
  }, []); // تنفيذ fetch مرة واحدة عند تحميل المكون

    if (loading) return <div className='py-56'>Loading...</div>;
    if (error) return <div className='py-56'>Error: {error.message}</div>;

    return (
        <div className='standing'>
            
        </div>
    );
}

export default CodeF