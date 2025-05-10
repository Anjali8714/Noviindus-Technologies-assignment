import Image from "next/image";
import React from "react";

const Latestblogs = () => {
  const blogData = [
    {
      image: "/images/motherhelps.png",
      title: "Top tips for effective home tutoring",
      description: "Share practical advice on how students can make the most out of tutoring sessions.",
    },
    {
      image: "/images/readbooks.png",
      title: "Building a productive study environment",
      description: "Share practical advice on how students can make the most out of tutoring sessions.",
    },
    {
      image: "/images/businessmodels.png",
      title: "5 Skills every great tutor should have",
      description: "Outline essential skills for tutors, such as patience, adaptability, subject knowledge.",
    },
    {
      image: "/images/womanworking.png",
      title: "Getting the best individual tuition",
      description: "Share practical advice on how students can make the most out of tutoring sessions.",
    },
  ];

  return (
    <div className="bg-white px-8 py-16">
      <h1 className="text-3xl text-[#655945] pb-10 flex justify-start p-16">
        Our Latest <span className="font-bold">Blog Posts</span>
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {blogData.map((blog, index) => (
          <div key={index} className="w-[300px]">
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
              className="object-cover rounded-md"
            />
            <h4 className="font-bold text-md text-[#655945] pt-2">{blog.title}</h4>
            <p className="text-[#65594599] text-sm">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latestblogs;
