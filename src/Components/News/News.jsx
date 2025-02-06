import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext'
import MainHeading from '../MainHeading/MainHeading';

const News = () => {

    const [articles, setArticles] = useState([]);
    // const {flagAdmin} = useContext(AuthContext)

    // useEffect(() => {
    //     const fetchArticles = async () => {
    //       const articlesCollection = collection(db, 'news');
    //       const articlesSnapshot = await getDocs(articlesCollection);
    //       const articlesList = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //       setArticles(articlesList);
    //     };
    //     fetchArticles();
    //   }, []);

    //   const handleDelete = async (id) => {
    //     const docRef = doc(db, 'news', id);
    //     await deleteDoc(docRef)
    //       .then(() => {
    //         alert("تم حذف الوثيقة بنجاح!");
    //         setArticles(articles.filter(article => article.id !== id)); 
    //       })
    //       .catch((error) => {
    //         alert("حدث خطأ أثناء محاولة حذف الوثيقة:", error);
    //       });
    //   }

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

    //   if (!articles) return <>
    //   <div id="lauding">
    //     <div class="sk-cube-grid ">
    //         <div class="sk-cube sk-cube1"></div>
    //         <div class="sk-cube sk-cube2"></div>
    //         <div class="sk-cube sk-cube3"></div>
    //         <div class="sk-cube sk-cube4"></div>
    //         <div class="sk-cube sk-cube5"></div>
    //         <div class="sk-cube sk-cube6"></div>
    //         <div class="sk-cube sk-cube7"></div>
    //         <div class="sk-cube sk-cube8"></div>
    //         <div class="sk-cube sk-cube9"></div>
    //       </div>
    // </div>
    //   </>

  return (
    <div className='news relative py-24 mb-16'>
        <div  className=' top-0'>
            {/* <AnimatedText text="News & Events" ClassName='mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8 text-blue-500'/> */}
            <div className="">
              <div className="container">
              <MainHeading title1='' title2='News & Events'/>
              </div>
                <Slider className='mt-5 `p-12 bg-light ' {...settings}>
                {articles.map( (article, index) => (
                <div key={index} >
                    <div  className='flex justify-center align-items-center '>
                            <div key={article.id} className="flex justify-center items-center flex-wrap md:flex-col sm:flex-col lg:flex-col  w-[70%] py-16">
                                    {/* {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>} */}
                                    <div className="w-1/2  md:w-full flex justify-center sm:w-full lg:w-full md:mb-12 sm:mb-12 lg:mb-12 ">
                                      <div className="image sm:after:hidden  after:w-[400px]  after:rounded-xl after:h-[450px]  after:bg-[#FFB600] relative after:z-[-1] after:translate-x-[-40px] after:translate-y-[-20px] after:top-0 after:left-0 after:absolute">
                                        <img className='rounded-xl w-[400px] h-[400px]' decoding="async" src={article.coverImageUrl} alt="icpc hti events" />
                                      </div>
                                    </div>

                                    <div className="w-1/2 pl-6 md:w-full sm:w-full lg:w-full ">
                                        <h2 className='text-3xl font-bold'>{article.title}</h2>
                                        <p className='text-xl text-[#3E3E3E] mt-4'>{article.Paragraph}</p>
                                        <Link className='btn grade2 ' to={'/'}>Read More</Link>
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