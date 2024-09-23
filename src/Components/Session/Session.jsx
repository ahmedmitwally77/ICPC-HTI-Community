import React from "react";
import AnimatedText from "../AnimatedText";
import line2 from "../../Images/line 2.jpeg";
import content from '../../Images/what1-removebg-preview.png'
import TransitionEffect from "../TransitionEffect";

const Session = () => {
  return <>
    <TransitionEffect />

    <div className="session">
      <div className="container py-20">
        <AnimatedText
          text="Session 1"
          ClassName="my-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark/75 z-20"
        />
        <div className="vid d-flex relative -top-4 justify-center align-items-center d-none d-md-flex ">
          <iframe
            width="950"
            height="500"
            src="https://www.youtube.com/embed/2TdDhpjc2z4?si=m_grSyp9BmqBp4-P"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="line d-flex justify-center align-items-center relative top-7 ">
          <img className="rounded-2xl w-[20%]" src={line2} alt="line" />
        </div>

        <div className="row py-16 justify-center align-items-center">
            <div className="col-md-6">
                <AnimatedText text="Session Content" ClassName='text-start !text-5xl !text-blue-500 '/>
                <ul className="fs-4 text-dark/75">
                    <li>-Lorem ipsum dolor sit.</li>
                    <li>-Lorem ipsum dolor</li>
                    <li>-Lorem ipsum dolor.</li>
                    <li>-Lorem ipsum </li>
                </ul>
            </div>
            <div className="col-md-6">
                <img className="w-100" src={content} alt="" />
            </div>
        </div>

        <div className="line d-flex justify-center align-items-center relative top-7 ">
          <img className="rounded-2xl w-[20%]" src={line2} alt="line" />
        </div>

        <AnimatedText
          text="Sheet"
          ClassName="my-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark/75 z-20"
        />

      </div>
    </div>
  </>
};

export default Session;
