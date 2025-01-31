import React, { useContext, useEffect, useState } from 'react'
import style from './News.module.css'
import img from '../../Images/icpc core 2024.jpg'
import AnimatedText from '../AnimatedText'
import Slider from 'react-slick'
import { Link } from 'react-router-dom';
import bg from '../../Images/blob-scene-haikei (1).svg'
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { AuthContext } from '../../Context/AuthContext'
import MainHeading from '../MainHeading/MainHeading';

const News = () => {

    const [articles, setArticles] = useState([]);
    const {flagAdmin} = useContext(AuthContext)

    useEffect(() => {
        const fetchArticles = async () => {
          const articlesCollection = collection(db, 'news');
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
            setArticles(articles.filter(article => article.id !== id)); 
          })
          .catch((error) => {
            alert("حدث خطأ أثناء محاولة حذف الوثيقة:", error);
          });
      }

    var settings = {
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

      if (!articles) return <>
      <div id="lauding">
        <div class="sk-cube-grid ">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
          </div>
    </div>
      </>

  return (
    <div className='news bg-light relative py-24 mb-16'>
        <div  className=' top-0'>
            {/* <AnimatedText text="News & Events" ClassName='mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8 text-blue-500'/> */}
            <div className="container ">
              <MainHeading title1='' title2='News & Events'/>
                <Slider className='mt-5' {...settings}>
                {articles.map(article => (
                <div  >
                    <div  className='d-flex justify-center align-items-center '>
                            <div key={article.id} className="row justify-center align-items-center w-[80%]">
                                    {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>}

                                    <div className="col-md-6">
                                    <img className='rounded-xl' decoding="async" src={article.coverImageUrl} alt="icpc hti events" />
                                    </div>
                                    <div className="col-md-6 rtlll">
                                        <h2>{article.title}</h2>
                                        <p>{article.Paragraph}</p>
                                        {/* <Link className='btn btn-dark' to={'/'}>Read More</Link> */}
                                </div>
                            </div>
                    </div>
                </div>
                ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default News