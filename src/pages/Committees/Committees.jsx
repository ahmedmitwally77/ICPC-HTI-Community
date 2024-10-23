import React from 'react'
import AnimatedText from '../../Components/AnimatedText'
import HomeImg from '../../Images/IMG_3229 full.webp'
import line2 from '../../Images/line 2.jpeg'
import Tech from '../../Images/img2.webp'
import me from '../../Images/me.webp'
import me2 from '../../Images/me2.jpeg'
import adbelkareem from '../../Images/عبكريم.jpg'
import alaa from '../../Images/علاء.jpg'
import alaaa from '../../Images/Alaa Nabih.jpg'
import hager from '../../Images/Hager Sabry.jpg'
import rawan from '../../Images/Rawan Ahmed.jpg'
import mahmoudmc from '../../Images/training/mahmoud MC.jpg'
import abdallah from '../../Images/training/Abdallah Yasser.jpg'
import abdo from '../../Images/training/Abdo Khalil.jpg'
import meto from '../../Images/training/Ahmed Mitwally.jpg'
import omara from '../../Images/training/Ahmed Omara.jpg'
import amr from '../../Images/training/Amr Nabil N81.jpg'
import yasser from '../../Images/training/Abdalrahman Yasser.jpg'
import lujain from '../../Images/training/Lujain Haytham.jpeg'
import mario from '../../Images/training/Mario Eid.jpg'
import moali from '../../Images/training/Mohamed Ali.jpg'
import mohamed from '../../Images/training/Mostafa Hamed.jpg'
import jo from '../../Images/training/Yousef Fathy.jpg'
import anone from '../../Images/training/anone.jpeg'
import anone2 from '../../Images/training/anone2.jpg'
import hanya from '../../Images/hanya.jpeg'
import menna from '../../Images/menna.jpeg'
import sham3a from '../../Images/media/sham3a.jpg'
import mary from '../../Images/media/mary.jpeg'
import eid from '../../Images/ahmed eid.jpeg'
import Slider from 'react-slick'
import TransitionEffect from '../../Components/TransitionEffect'
import { Helmet } from 'react-helmet'


const Committees = () => {


    var settings = {
        className: "center",
        centerMode: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        dots: true,
        autoplay:true,
        arrows:true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 1,  
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
      };
    var settings2 = {
        className: "center",
        centerMode: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        dots: true,
        autoplay:true,
        arrows:true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 1,  
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
      };
    var settings3 = {
        className: "center",
        centerMode: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        dots: true,
        autoplay:true,
        arrows:true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 1,  
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
      };
    // var settings4 = {
    //     className: "center",
    //     centerMode: true,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear",
    //     dots: false,
    //     autoplay:true,
    //     arrows:true,
    //     speed: 400,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     responsive: [
    //         {
    //           breakpoint: 768,  
    //           settings: {
    //             slidesToShow: 1,  
    //             slidesToScroll: 1,
    //             dots: true,
    //           }
    //         }
    //       ]
    //   };


  return <>
    <Helmet>
        <title>Committees of ICPC HTI </title>
        <meta name='description' content='Discover the committees of ICPC HTI that organize and support competitive programming activities, including event management, technical support, and community outreach.' />
    </Helmet>
    <TransitionEffect/>
    <div className='committees  relative overflow-x-hidden'>
        <div className="hero bg-dark relative  -top-4">
            <AnimatedText text="Committees" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
            <div className='overlay absolute bgWaves w-100 h-[97.5%]'></div>
            <img src={HomeImg} alt="hti comunity in ecpc" />
        </div>

        <div className="committee bg-white rounded-3xl relative -top-14">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>

            <div className="container py-16">
                <AnimatedText text="Our Committees" ClassName='my-16 mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark '/>
                <div className="row my-16 pt-16">
                    <div className="col-md-3">
                        <div className="box shadow rounded-2xl p-4 relative bg-blue-500 hover:bg-yellow-500 d-flex flex-col justify-center align-items-center">
                            <img className='w-50 md:hidden block absolute -top-16 rounded-2xl right-20' src={Tech} alt="" />
                            <h3 className='text-light my-5 fw-bold '>Media Committee</h3>
                            <a className='bg-white text-blue-500 p-2 rounded-full px-3 text-decoration-none fw-bold' href="#Media">More</a>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="box md:mt-8 shadow rounded-2xl p-4 relative bg-blue-500 hover:bg-yellow-500 d-flex flex-col justify-center align-items-center">
                            <img className='w-50 md:hidden block absolute -top-16 rounded-2xl right-20' src={Tech} alt="" />
                            <h3 className='text-light my-5 fw-bold '>Tech Committee</h3>
                            <a className='bg-white text-blue-500 p-2 rounded-full px-3 text-decoration-none fw-bold' href="#Media">More</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box md:mt-8 shadow rounded-2xl p-4 relative bg-blue-500 hover:bg-yellow-500 d-flex flex-col justify-center align-items-center">
                            <img className='w-50 md:hidden block absolute -top-16 rounded-2xl right-20' src={Tech} alt="" />
                            <h3 className='text-light my-5 fw-bold '>HR Committee</h3>
                            <a className='bg-white text-blue-500 p-2 rounded-full px-3 text-decoration-none fw-bold' href="#hr">More</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box md:mt-8 shadow rounded-2xl p-4 relative bg-blue-500 hover:bg-yellow-500 d-flex flex-col justify-center align-items-center">
                            <img className='w-50 md:hidden block absolute -top-16 rounded-2xl right-20' src={Tech} alt="" />
                            <h3 className='text-light my-5  '>Training Committee</h3>
                            <a className='bg-white text-blue-500 p-2 rounded-full px-3 text-decoration-none fw-bold' href="#training">More</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div id='leaders' className="leaders">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>
            <AnimatedText text="Our leaders" ClassName='my-16 mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark '/>
            
            

            <div className="ourTeam py-16 container">
                <Slider {...settings2}>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>ziad essa</h3>
                                <p>Co-Leader of ICPC HTI</p>
                            </div>
                            <div className="image w-100 ">
                                <img className='w-100 ' src={me2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Mohamed Alaa</h3>
                                <p>Leader of ICPC HTI</p>
                            </div>
                            <div className="image w-100 ">
                                <img className='w-100  ' src={alaa} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Mohamed Abdelkreem</h3>
                                <p>Co-Leader of ICPC HTI</p>
                            </div>
                            <div className="image w-100 ">
                                <img className='w-100 ' src={adbelkareem} alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>

        <div id='Media' className="Media">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>
            <AnimatedText text="Media Committee" ClassName='my-16 mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark '/>
            
            <div className="ourMission container">
                <AnimatedText text="What is our mission!" ClassName='text-start ms-3 !text-4xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <ul className='text-dark/75 '>
                    <li className='p-1 fs-6'>- Media Coverage: The committee manages the media coverage of ICPC events, including press conferences, interviews, and photo opportunities.</li>
                    <li className='p-1 fs-6'>- They work to ensure that the media coverage is accurate, informative, and positive.</li>
                    <li className='p-1 fs-6'>- Content Creation: The media committee creates content for the ICPC's official media channels, such as press releases, social media posts, and articles.</li>
                    <li className='p-1 fs-6'>- This content is designed to promote the ICPC and its events to a wider audience.</li>
                </ul>
            </div>

            <div className="ourTeam py-16 container">
                <AnimatedText text="Our Team" ClassName='text-start ms-3 !text-5xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <Slider {...settings3}>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Youssef Shamaa</h3>
                                <p>Media MEMBER OF ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={sham3a} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Ahmed Eid</h3>
                                <p>Media MEMBER OF ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={eid} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Mary Gerges</h3>
                                <p>Media MEMBER OF ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={mary} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Rawda Mohamed</h3>
                                <p>Media MEMBER OF ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={anone} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Menna Elhwary</h3>
                                <p>Media MEMBER OF ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={anone} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
        
        <div id='Tech' className="Tech">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>
            <AnimatedText text="Tech Committee" ClassName='my-16 mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark '/>
            
            <div className="ourMission container">
                <AnimatedText text="What is our mission!" ClassName='text-start ms-3 !text-4xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <ul className='text-dark/75 '>
                    <li className='p-1 fs-6'>- Website Development: The committee develops the website's architecture, programming, and coding, ensuring that it is compatible with different browsers and devices.</li>
                    <li className='p-1 fs-6'>- Database Management: They design and implement databases to store and manage competition data, such as contestant information, problem submissions, and scores.</li>
                    <li className='p-1 fs-6'>- User Interface Design: The committee works with designers to create a visually appealing and intuitive user interface that is easy for contestants, judges, and organizers to navigate.</li>
                </ul>
            </div>

            <div className="ourTeam py-16 container">
                <AnimatedText text="Our Team" ClassName='text-start ms-3 !text-5xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <Slider {...settings2}>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>ziad essa</h3>
                                <p>Frontend Developer of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={me2} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Hanya Hisham</h3>
                                <p>UI/UX of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={hanya} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Menna Farag</h3>
                                <p>UI/UX of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={menna} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>

        </div>

        <div id='hr' className="hr">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>
            <AnimatedText text="Hr Committee" ClassName='my-16 mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark '/>
            
            <div className="ourMission container">
                <AnimatedText text="What is our mission!" ClassName='text-start ms-3 !text-4xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <ul className='text-dark/75 '>
                    <li className='p-1 fs-6'>- Community Building and Engagement: HR plays a vital role in fostering a positive and inclusive community within ICPC.</li>
                    <li className='p-1 fs-6'>- They organize events, networking opportunities, and other activities to strengthen connections among members and promote a sense of belonging.</li>
                    <li className='p-1 fs-6'>- Administrative Support: HR provides essential administrative support to the ICPC community, including managing paperwork, handling payroll, and ensuring compliance with relevant regulations.</li>
                    <li className='p-1 fs-6'>- They also assist with the organization of ICPC competitions and events.</li>
                </ul>
            </div>

            <div className="ourTeam py-16 container">
                <AnimatedText text="Our Team" ClassName='text-start ms-3 !text-5xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <Slider {...settings2}>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Alaa Nabih</h3>
                                <p>Hr Head of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={alaaa} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Hager Sabry</h3>
                                <p>Hr Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={hager} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Rawan Ahmed</h3>
                                <p>Hr Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={rawan} alt="" />
                        </div>
                    </div>
                    
                </Slider>
            </div>

        </div>

        <div id='training' className="training">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>
            <AnimatedText text="Training Committee" ClassName='my-16 mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark '/>
            
            <div className="ourMission container">
                <AnimatedText text="What is our mission!" ClassName='text-start ms-3 !text-4xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <ul className='text-dark/75 '>
                    <li className='p-1 fs-6'>- Training Program Organization: The committee organizes training programs, workshops, and online resources to deliver the training curriculum to participants.</li>
                    <li className='p-1 fs-6'>- This may involve partnering with universities, online platforms, or experienced trainers.</li>
                    <li className='p-1 fs-6'>- Mentorship: The committee may also provide mentorship opportunities for participants, connecting them with experienced programmers who can offer guidance and support.</li>
                    <li className='p-1 fs-6'>- Evaluation and Feedback: The committee evaluates the effectiveness of training programs and gathers feedback from participants to identify areas for improvement.</li>
                </ul>
            </div>

            <div className="ourTeam py-16 container">
                <AnimatedText text="Our Team" ClassName='text-start ms-3 !text-5xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <Slider  {...settings}>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Mahmoud MC</h3>
                                <p>Training Head of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={mahmoudmc} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Abdallah Yasser</h3>
                                <p>Training Vice Head of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={abdallah} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Amr Nabil</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={amr} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Ahmed Mitwally</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={meto} alt="" />
                        </div>
                    </div>
                </Slider>

                <Slider className='mt-8' {...settings}>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Abdalrahman Yasser</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={yasser} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Abdo Khalil</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={abdo} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Ahmed Omara</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={omara} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Mario Eid</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={mario} alt="" />
                        </div>
                    </div>
                </Slider>

                <Slider className='mt-8' {...settings}>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Lujain Haytham</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={lujain} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Tasneem Mohamed</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={anone} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Mohamed Ali</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={moali} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Mostafa Hamed</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={mohamed} alt="" />
                        </div>
                    </div>
                </Slider>

                <div className="row justify-center pt-10">
                    <div className="col-md-3 mt-8">
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>yahia zahran</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={anone2} alt="" />
                        </div>
                    </div>
                    <div className="col-md-3 mt-8">
                        <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                            <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                                <h3>Yousef Fathy</h3>
                                <p>Training Member of ICPC HTI</p>
                            </div>
                            <img className='w-100 ' src={jo} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  </>
}

export default Committees

