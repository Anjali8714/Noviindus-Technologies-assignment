import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-[#8A1538] p-3 items-center">
      <div className="flex gap-4 ml-20">
        <Image src="/images/Vector.png" alt="vector" width={40} height={20} />
        <h1 className="font-bold text-2xl">Educare</h1>
      </div>

      <div className="flex gap-5">
        <Link href={"/about"}>About</Link>
        <Link href={"/about"}>Courses</Link>
        <Link href={"/about"}>Careers</Link>
        <Link href={"/about"}>News & Blog</Link>
        <Link href={"/about"}>Payments</Link>
      </div>

      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
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
        <button className="bg-white  text-[#8A1538] border rounded-xl px-2 mr-32 w-36">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
