import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from '../AnimatedText'
import line2 from '../../Images/line 2.jpeg'
import Slider from 'react-slick'

const OurAchievements = () => {

    const [articles, setArticles] = useState([]);
    // const {flagAdmin} = useContext(AuthContext)


    // useEffect(() => {
    //     const fetchArticles = async () => {
    //       const articlesCollection = collection(db, 'achievements');
    //       const articlesSnapshot = await getDocs(articlesCollection);
    //       const articlesList = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //       setArticles(articlesList);
    //     };
    //     fetchArticles();
    //   }, []);

    //   const handleDelete = async (id) => {
    //     const docRef = doc(db, 'achievements', id);
    
    //     await deleteDoc(docRef)
    //       .then(() => {
    //         alert("تم حذف الوثيقة بنجاح!");
    //         setArticles(articles.filter(achievement => achievement.id !== id)); // إزالة المقالة من الحالة بعد الحذف
    //       })
    //       .catch((error) => {
    //         alert("حدث خطأ أثناء محاولة حذف الوثيقة:", error);
    //       });
    //   }

    var settings = {
      autoplaySpeed: 2000,
        cssEase: "linear",
        dots: true,
        autoplay:true,
        arrows:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 1,  
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className='ourAchievements bg-light shadow-top-only rounded-3xl relative -top-14 '>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        <div className="container py-16 ">
            <AnimatedText text="Our Achievements" ClassName='text-center !text-6xl !text-blue-600 my-10'/>
            <Slider {...settings}>
                {articles.map(article => (
                <div  >
                    <div  className='d-flex justify-center align-items-center'>
                            <div key={article.id} className="row justify-center align-items-center w-[80%]">
                                    {/* {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>} */}

                                    <div className="col-md-6">
                                      <img className='rounded-xl' decoding="async" src={article.coverImageUrl} alt="icpc hti events" />
                                    </div>
                                    <div className="col-md-6 rtlll">
                                        <h2>{article.title}</h2>
                                        <p>{article.Paragraph}</p>
                                    </div>
    
                            </div>
                        </div>
                </div>
            ))}
            </Slider>
        </div>
    </div>
  )
}

export default OurAchievements