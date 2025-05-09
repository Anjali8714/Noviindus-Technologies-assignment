import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#8A1538]">
      <div className=" flex flex-col lg:flex-row justify-between items-center p-10 ml-16 mr-24">
        <div className="flex gap-4 items-start">
          <Image src="/images/Vector.png" alt="vector" width={40} height={40} />
          <h1 className="font-bold text-2xl text-white">Educare</h1>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold mb-2 text-white">Navigation</h2>
          <span>Home</span>
          <span>About</span>
          <span>Curriculum</span>
          <span>Career</span>
          <span>Blogs</span>
          <span>Contact us</span>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold mb-2 text-white">Contact info</h2>
          <Link href={""} className="underline">
            educare@gmail.com
          </Link>
          <Link href={""} className="underline">
            info@educare.com
          </Link>
          <Link href={""} className="underline">
            +974 4412 3456
          </Link>
          <Link href={""} className="underline">
            +974 5534 7890
          </Link>
          <div className="flex mt-4 ">
            <Image src="/images/insta.png" alt="insta" width={30} height={30} />
            <Image src="/images/fb.png" alt="fb" width={30} height={30} />
            <Image src="/images/email.png" alt="email" width={30} height={30} />
            <Image src="/images/utube.png" alt="utube" width={30} height={30} />
          </div>
        </div>
        <div className="flex gap-4">
          <Image src="/images/Frame.png" alt="map" width={90} height={50} />
          <div className="flex flex-col">
            <h2 className="font-bold mb-1 text-white">Office Address</h2>
            <span>EducareEducation Center</span>
            <span>Building 45,AI Sadd Street,</span>
            <span>Doha, Qatar</span>
            <Link href="#" className="underline">
              View on Map
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-[#DCC196] " />
      <div className="flex flex-col lg:flex-row justify-between items-center px-8 lg:px-24 py-6 text-xs">
        <span>© 2024 educare</span>
        <span>
          Designed By{" "}
          <span className="text-[#DCC196]">Noviindus Technologies</span>
        </span>
        <div className="flex gap-4 text-[#DCC196]">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
