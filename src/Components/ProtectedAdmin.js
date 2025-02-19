import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';



const ProtectedAdmin = ({ children, allowedRoles }) => {

    let {userData} = useContext(AuthContext)

    const user = userData; // جلب المستخدم الحالي
    const userRole = userData?.userRole; // يجب أن يكون لديك خاصية role في بيانات المستخدم

  if (!user) {
    return <Navigate to="/login" />; // توجيه لصفحة تسجيل الدخول إذا لم يكن مسجلاً
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" />; // توجيه لصفحة غير مسموح
  }

  return children; // عرض المحتوى إذا كان الدور مسموحاً
}

export default ProtectedAdmin