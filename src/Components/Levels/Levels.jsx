import React, { useContext, useEffect, useState } from 'react'
import line2 from '../../Images/line 2.jpeg'
import why1 from '../../Images/why1-removebg-preview.png'
import AnimatedText from '../AnimatedText';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { AuthContext } from '../../Context/AuthContext';
import { motion } from 'framer-motion';

const Levels = () => {
    const [articles, setArticles] = useState([]);
    const {flagAdmin} = useContext(AuthContext)

    useEffect(() => {
        const fetchArticles = async () => {
          const articlesCollection = collection(db, 'levels');
          const articlesSnapshot = await getDocs(articlesCollection);
          const articlesList = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setArticles(articlesList);
        };
        fetchArticles();
      }, []);

      const handleDelete = async (id) => {
        const docRef = doc(db, 'levels', id);
    
        await deleteDoc(docRef)
          .then(() => {
            alert("تم حذف الوثيقة بنجاح!");
            setArticles(articles.filter(article => article.id !== id)); // إزالة المقالة من الحالة بعد الحذف
          })
          .catch((error) => {
            alert("حدث خطأ أثناء محاولة حذف الوثيقة:", error);
          });
      }

  return (
    <div className='levels bg-white rounded-3xl relative -top-14'>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>

        <div className="container py-20">
        <AnimatedText text="Levels" ClassName='text-start !text-5xl !text-blue-500 mb-20 z-10'/>
            <div className="row">
                {articles.map(article => (
                    <div key={article.id} className="col-md-4">
                    {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>}

                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:0.5 }} className="box border shadow-xl border-blue p-10 relative rounded-3xl ">
                        <img className='w-50 absolute  md:hidden -top-28 left-28 m-auto' src={article.coverImageUrl} alt={article.title} />
                        <h4 className='text-blue-900 fw-bold fs-2 text-center my-4 z-30'>{article.title}</h4>
                        <p className='text-dark/75'>{article.prefParagraph}</p>
                        <div className="btn d-flex justify-end">
                            <Link to={`/level/${article.id}`} className='btn grade2 rounded-3xl text-light px-4  text-end'>Join</Link>
                        </div>
                    </motion.div>
                    </div>
                ))}
                
                <div  className="col-md-4">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:0.7 , y:0}} transition={{duration:1 }} className="box md:my-7 shadow-xl border border-blue p-10 relative rounded-3xl ">
                        <img className='w-50 absolute  md:hidden -top-28 left-28 m-auto' src={why1} alt="" />
                        <h4 className='text-blue-900 fw-bold fs-2 text-center my-4 z-30'>Level 1</h4>
                        <p className='text-dark/75'>
                        Level One builds on the foundations established in
                         Level Zero. You'll enhance your problem-solving skills by working on a variety 
                          of algorithmic challenges, learning essential data structures, and optimizing your code for 
                          efficiency. Are you ready to elevate your skills? Join Level One now!
                        </p>
                        <div className="btn d-flex justify-end">
                          <spam  className='btn grade2 rounded-3xl text-light px-4  text-end'>Closed <i class="fa-solid fa-lock"></i></spam>
                        </div>
                    </motion.div>
                </div>
                <div  className="col-md-4">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:0.7 , y:0}} transition={{duration:1 }} className="box border shadow-xl border-blue p-10 relative rounded-3xl ">
                        <img className='w-50 absolute  md:hidden -top-28 left-28 m-auto' src={why1} alt="" />
                        <h4 className='text-blue-900 fw-bold fs-2 text-center my-4 z-30'>Level 2</h4>
                        <p className='text-dark/75'>
                        Level Two takes your programming journey to the next 
                        level. At this stage, you'll explore advanced algorithms and data structures, such 
                        as dynamic programming, graphs, and advanced search techniques.  This level is ideal
                         for those who want to sharpen their skills and excel in  ECPC. Don't miss out on this 
                         opportunity Enroll in Level Two today!
                        </p>
                        <div className="btn d-flex justify-end">
                          <spam  className='btn grade2 rounded-3xl text-light px-4  text-end'>Closed <i class="fa-solid fa-lock"></i></spam>
                        </div>
                    </motion.div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Levels