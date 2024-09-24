import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from '../AnimatedText'
import line2 from '../../Images/line 2.jpeg'
import me from '../../Images/me.webp'
import Slider from 'react-slick'
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { AuthContext } from '../../Context/AuthContext'

const TalentedMember = () => {

    const [articles, setArticles] = useState([]);
    const {flagAdmin} = useContext(AuthContext)

    useEffect(() => {
        const fetchArticles = async () => {
          const articlesCollection = collection(db, 'talented');
          const articlesSnapshot = await getDocs(articlesCollection);
          const articlesList = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setArticles(articlesList);
        };
        fetchArticles();
      }, []);

      const handleDelete = async (id) => {
        const docRef = doc(db, 'news', id);
    
        await deleteDoc(docRef)
          .then(() => {
            alert("تم حذف الوثيقة بنجاح!");
            setArticles(articles.filter(article => article.id !== id)); // إزالة المقالة من الحالة بعد الحذف
          })
          .catch((error) => {
            alert("حدث خطأ أثناء محاولة حذف الوثيقة:", error);
          });
      }


    var settings = {
        dots: false,
        autoplay:true,
        arrows:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 2,  
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
      };

  return (
    <div className='talentedMembers bg-dark/10 shadow-top-only rounded-3xl relative -top-14'>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        <AnimatedText text="Talented Members" ClassName='text-center !text-6xl !text-blue-600 my-16'/>
        <div className="container py-16 pb-32">
            <Slider {...settings}>
                {articles.map(article => (
                    <div className=''>
                    {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>}
                    <div key={article.id} className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                        <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                            <h3>{article.title}</h3>
                        </div>
                        <img className='w-100 hover:scale-105 transition-transform' src={article.coverImageUrl} alt="" />
                    </div>
                    </div>  
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default TalentedMember