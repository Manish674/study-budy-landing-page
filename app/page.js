"use client";
import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "../component/Waitlist";
import React, { useState } from "react";

const FeatureCard = ({ heading, imgPath, para }) => {
  return (
    <div className="min-w-[100%]">
      <div className="flex justify-center">
        <Image
          src={`${imgPath}`}
          className="rounded-full"
          width={300}
          height={300}
        />
      </div>
      <div className="text-center mt-2">
        <h3 className="text-2xl font-normal">{heading}</h3>
        {para}
      </div>
    </div>
  );
};

export default function Home() {
  const [transformationValue, setTransformationValue] = useState(0);

  // decrement
  const handleLeftArrowClick = () => {
    if (transformationValue <= 0) {
      setTransformationValue(2);
      return;
    }

    setTransformationValue((prevState) => prevState - 1);
  };

  // increment
  const handleRightArrowClick = () => {
    if (transformationValue >= 2) {
      setTransformationValue(0);
      return;
    }
    setTransformationValue((prevState) => prevState + 1);
  };

  const featureData = [
    {
      heading: "StudyChat: Virtual Study Hangouts",
      imgPath: "/images/VC.jpg",
      para: (
        <p className="text-sm">
          Connect, collaborate, and excel with seamless video calls.{" "}
          <bold>Study together</bold>, anytime, anywhere
        </p>
      ),
    },
    {
      heading: "TaskTrack: Organize and Conquer",
      imgPath: "/images/todo.jpg",
      para: (
        <p className="text-sm">
          Your ultimate sidekick for student success. Organize, conquer, and
          stay on top of your academic tasks effortlessly
        </p>
      ),
    },
    {
      heading: "StudyFlow: The Mastery Tool",
      imgPath: "/images/pomodoro-timer.jpg",
      para: (
        <p className="text-sm">
          Boost your focus and productivity with StudyFlow. Master time
          management and achieve study success effortlessly
        </p>
      ),
    },
  ];

  return (
    <div className="pb-4">
      <div className="border-b p-4 font-extrabold text-4xl">
        StudyBuddy
      </div> 
      <div>
        <div className="lg:flex lg:h-screen items-center justify-around">
          <div className=" lg:w-[50%] mt-16 flex flex-col items-center justify-center">
            <div className="">
              <h1 className="font-semibold text-center text-3xl">
                StudyBuddy: Connect, Collaborate, Excel <br /> The Ultimate
                Virtual Study Platform
              </h1>
              <p className="p-4 text-[#635f68] text-center">
                Welcome to StudyHub, virtual study platform designed to enhance
                your academic journey. Connect with fellow students through
                immersive video calls, collaborate seamlessly on projects, and
                unlock your full potential with our suite of productivity
                features.{" "}
              </p>
            </div>
            <Link href={"#join-waitlist"}>
              <button className="mt-4 bg-[#1a73e8] p-4 rounded-lg text-white font-medium">
                Join waitlist
              </button>
            </Link>
          </div>
          <hr className="my-8 w-3/4 mx-auto lg:hidden" />
          <div className=" lg:w-[40%] flex w-[90%] mx-auto lg:mx-0 lg:justify-center">
            {/* Arrow */}
            <div className=" my-auto" onClick={() => handleLeftArrowClick()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.605"
                height="15.555"
                fill="#635f68"
              >
                <path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z" />
              </svg>
            </div>

            <div className="overflow-hidden lg:w-[60%] ">
              <div
                className="flex flex-nowrap w-full"
                style={{
                  transform: `translateX(-${transformationValue * 100}%)`,
                }}
              >
                {featureData.map((el, i) => (
                  <FeatureCard
                    key={i}
                    heading={el.heading}
                    imgPath={el.imgPath}
                    para={el.para}
                  />
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className=" my-auto" onClick={() => handleRightArrowClick()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.605"
                height="15.555"
                fill="#635f68"
              >
                <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
              </svg>
            </div>
          </div>
        </div>
        <div
          id="join-waitlist"
          className="max-w-[600px] mx-auto lg:h-screen lg:flex items-center"
        >
          <div className="lg:w-full">
            <h2 className="font-semibold text-center text-4xl">
              Join the waitlist
            </h2>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
}
