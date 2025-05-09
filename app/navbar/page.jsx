'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#8A1538] p-3">
    <div className="flex flex-col lg:flex-row gap-4 justify-between  items-center">
      <div className="flex gap-4 lg:ml-20 ml-0 items-center justify-center">
        <Image src="/images/Vector.png" alt="vector" width={40} height={20} />
        <h1 className="font-bold text-2xl text-white">Educare</h1>
      </div>

      <div className="flex gap-5 flex-col lg:flex-row justify-center text-white">
        <Link href={""}>About</Link>
        <Link href={""}>Courses</Link>
        <Link href={""}>Careers</Link>
        <Link href={""}>News & Blog</Link>
        <Link href={""}>Payments</Link>
      </div>

      <div className="flex gap-4 lg:gap-8 flex-col lg:flex-row items-center">
        <div className="flex flex-col gap-2 text-white items-center lg:items-start">
          <div className="flex items-center gap-2">
            <Image
              src="/images/PhoneDisconnect.png"
              alt="phone number"
              width={20}
              height={20}
            />
            <span>+974 55555 3456</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/Envelope.png"
              alt="phone number"
              width={20}
              height={20}
            />
            <span>info@educare.qa</span>
          </div>
        </div>
        <button className="bg-white  text-[#8A1538] hover:bg-[#f2d4a4] border rounded px-2 py-3 mr-32 w-36">
          Contact Us
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
