import React from "react";

const Questions = () => {
  return (
    <div className="bg-[#F9F7F4] p-5">
      <h1 className="text-[#655945] font-semibold flex justify-center items-center text-3xl">
        Frequently asked Questions
      </h1>
      <div className="p-5 border rounded-t-lg m-8 bg-white">
        <h5 className="text-[#655945] font-semibold">
          What subjects do you offer tutoring in?
        </h5>
        <span className="text-[#655945CC]">
          We offer tutoring in a wide range of subjects including Math, Science,
          English, Reading, History, and many more. We also provide specialized
          test preparation for standardized tests such as the SAT, ACT, and AP
          exams.
        </span>
      </div>
      <div className="p-5 border rounded-t-lg m-8 bg-white">
        <h5 className="text-[#655945] font-semibold">
          What ages or grade levels do you tutor?
        </h5>
      </div>
      <div className="p-5 border rounded-t-lg m-8 bg-white">
        <h5 className="text-[#655945] font-semibold">
          Is tutoring one-on-one or in groups?
        </h5>
      </div>
      <div className="p-5 border rounded-t-lg m-8 bg-white">
        <h5 className="text-[#655945] font-semibold">
          Can sessions take place at our home?
        </h5>
      </div>
      <div className="p-5 border rounded-t-lg m-8 bg-white">
        <h5 className="text-[#655945] font-semibold">
          What is the duration and frequency of each tutoring session?
        </h5>
      </div>
    </div>
  );
};

export default Questions;
