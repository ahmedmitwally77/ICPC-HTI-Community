import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase'; // تأكد من استيراد إعداد Firebase الخاص بك

const adminUID = "vpFEcaagXpabB5ulRTkHVp6RAAl2"; // UID الخاص بالمسؤول


const ProtectedAdmin = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(null); // حالة لتخزين حالة تسجيل الدخول كمسؤول

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.uid === adminUID) {
                    setIsAdmin(true); // المستخدم هو المسؤول
                } else {
                    setIsAdmin(false); // المستخدم ليس مسؤولاً
                }
            } else {
                setIsAdmin(false); // لا يوجد مستخدم مسجل
            }
        });

        return () => unsubscribe(); // قم بإلغاء الاشتراك عند إلغاء تركيب المكون
    }, []);

    if (isAdmin === null) {
        return <div>Loading...</div>; // يمكنك عرض شاشة تحميل أثناء انتظار حالة المصادقة
    }

    if (isAdmin) {
        return children; // إذا كان المستخدم مسؤولاً، ارجع المحتوى
    } else {
        return <Navigate to="/login" />; // إذا لم يكن مسؤولاً، توجيه إلى صفحة تسجيل الدخول
    }
}

export default ProtectedAdmin