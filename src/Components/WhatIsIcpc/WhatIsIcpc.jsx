import React from "react";
import MainHeading from "../MainHeading/MainHeading";
import whaticpc from "../../Images/IcpcFoundation-roadmap.png"
import roaticpc from "../../Images/road-roadmap.png"


const BoxyTop = (title,des,linkTitle,link) => {
    return (
        <div className="box relative w-3/4 pb-12">
            <div className="content relative z-20">
                <MainHeading title2={title} />
                <p className="my-4 w-3/4 md:w-full">{des}</p>
                <a href={link} className="grade2 btn">{linkTitle}</a>
            </div>
            <div className="layer shadowInRoadmap bg-white z-[0]  absolute top-[-300px] sm:!bg-red-500 left-[-200px] w-[900px] h-[850px] lg:h-[800px] lg:w-[620px]  md:h-[800px] xl:w-[700px] xl:h-[700px] md:w-[550px]  rounded-[90%] skew-x-[-10deg]">
            </div>
        </div>
    );
}


const BoxyBottom = (title,des,linkTitle,link) => {
    return (
        <div className="box relative w-full flex justify-end md:justify-start py-12">
            <div className="content relative z-20 flex flex-col w-1/2 lg:w-3/4 md:w-full py-8 ">
                <MainHeading title2={title} />
                <p className="my-4 ">{des}</p>
                <a href={link} className="grade2 btn w-fit">{linkTitle}</a>
            </div>
            <div className="layer shadowInRoadmap bg-white z-[0]  absolute left-[200px] lg:left-[20px] lg:top-[-100px] xl:left-[150px] sm:left-[-130px]  md:left-[-100px] top-[-150px] w-[900px] h-[850px] rounded-[90%] skew-x-[-10deg]">
            </div>
        </div>
    );
};


export default function WhatIsIcpc() {
    return (
        <div className="what-is-icpc h-[170vh] xl:h-[180vh] w-100 bg-icpc overflow-hidden py-16">
            <div className="container ">
                <div className="whatIcpc flex flex-wrap">
                        <div className="box w-2/3 sm:w-full">
                        {BoxyTop("What is ICPC ?",
                            "The International Collegiate Programming Contest (ICPC) is an annual, team-based, multi-tiered programming competition among universities worldwide. Teams of three students, representing their university, work collaboratively to solve a set of algorithmic problems within a limited time.", 
                            "Learn More", "#")}
                        </div>
                        <div className="image w-1/3">
                            <img src={whaticpc} className="w-100 sm:hidden" alt="" />
                        </div>
                </div>

                <div className="whatIcpc flex flex-wrap  mt-[300px] xl:mt-[150px] lg:mt-[100px] md:mt-[100px]">
                    <div className="image w-1/3">
                        <img src={roaticpc} className="w-100 sm:hidden" alt="" />
                    </div>
                    <div className="box w-2/3">
                        {BoxyBottom("Our Roadmap", "Our Roadmap contains all the materials we use for our training, that includes slides, sheets, and even videos! The Roadmap targets everyone interested in PS, either you're a college student, older or even younger, no matter what your major is, as long as you're interested in learning and willing"
                            , "Learn More",
                            "#")}
                    </div>
                </div>
            </div>
        </div>
    );
}
