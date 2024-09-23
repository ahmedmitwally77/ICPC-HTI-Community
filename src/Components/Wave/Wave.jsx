import React, { useState } from "react";
import AnimatedText from "../AnimatedText";
import TransitionEffect from "../TransitionEffect";
import { Link } from "react-router-dom";

const Wave = () => {
    const [open, setOpen] = useState(false);

    // عناوين القائمة المنسدلة
    const titles = [
      { id: 1, title: "Session 1", content: "This is the content for Session 1." },
      { id: 2, title: "Session 2", content: "This is the content for Session 2." },
      { id: 3, title: "Session 3", content: "This is the content for Session 3." },
      { id: 4, title: "Session 4", content: "This is the content for Session 4." },
      { id: 5, title: "Session 5", content: "This is the content for Session 5." },
      { id: 6, title: "Session 6", content: "This is the content for Session 6." },
      { id: 7, title: "Session 7", content: "This is the content for Session 7." },
      { id: 8, title: "Session 8", content: "This is the content for Session 8." }
    ];

  return (
    <>
      <TransitionEffect />
      <div className="wave">
        <div className="container py-20">
            <AnimatedText
                text="wave 1"
                ClassName="text-center !text-6xl !text-blue-500 my-5"
            />
            <div className="text flex align-items-center justify-center">
                <p className="w-[75%] md:w-[100%] mb-5 text-center text-dark/75">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
                numquam esse tempora sequi voluptate enim labore veritatis hic,
                ipsam voluptas exercitationem saepe magni omnis. Accusantium atque
                blanditiis temporibus culpa explicabo? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Deleniti numquam esse tempora sequi
                voluptate enim labore veritatis hic, ipsam voluptas exercitationem
                saepe magni omnis. Accusantium atque blanditiis temporibus culpa
                explicabo?
                </p>
            </div>

            <div className="shadow p-4 rounded">
                <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpen(!open)}
                >
                <h3 className="text-dark/75">Sessions</h3>
                <span>{open ? "▲" : "▼"}</span>
                </div>

                <div
                className={`transition-all duration-300 overflow-hidden ${
                    open ? "max-h-96" : "max-h-0"
                }`}
                >
                <div className="mt-4 space-y-2">
                    {titles.map((item) => (
                    <div key={item.id} className="p-2 bg-gray-100 rounded">
                        <Link>
                            <h4 className="font-bold">{item.title}</h4>
                        </Link>
                    </div>
                    ))}
                </div>
                </div>
            </div>

            <AnimatedText
                text="Stanging"
                ClassName="text-start !text-5xl !text-blue-900 my-5"
            />

        </div>
      </div>
    </>
  );
};

export default Wave;
