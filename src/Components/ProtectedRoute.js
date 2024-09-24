import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // تأكد من استيراد إعداد Firebase الخاص بك

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // حالة لتخزين حالة تسجيل الدخول

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true); // المستخدم مسجل
            } else {
                setIsAuthenticated(false); // المستخدم غير مسجل
            }
        });

        return () => unsubscribe(); // قم بإلغاء الاشتراك عند إلغاء تركيب المكون
    }, []);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // يمكنك عرض شاشة تحميل أثناء انتظار حالة المصادقة
    }

    if (isAuthenticated) {
        return children; // إذا كان المستخدم مسجلاً، ارجع المحتوى
    } else {
        return <Navigate to="/login" />; // إذا لم يكن مسجلاً، توجيه إلى صفحة تسجيل الدخول
    }
}

export default ProtectedRoute