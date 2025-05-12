// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload, MdEmail } from "react-icons/md";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-start pt-20 lg:pt-32 min-h-screen">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] text-center mb-12">
          Hello, <br />
          I'm {' '}
          <span className="text-pink-500">{personalData.name}</span>
          {` , a passionate `}
          <span className="text-[#16f2b3]">Computer Science Student</span>
          {` & `}
          <span className="text-[#16f2b3]">Aspiring Developer</span>
          .
        </h1>

        <div className="flex items-center justify-center gap-5 mb-12">
          <Link
            href={personalData.github}
            target='_blank'
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <BsGithub size={30} />
          </Link>
          <Link
            href={personalData.linkedIn}
            target='_blank'
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <BsLinkedin size={30} />
          </Link>
          <Link
            href={personalData.codeforces}
            target='_blank'
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <SiCodeforces size={30} />
          </Link>
          <Link
            href={personalData.leetcode}
            target='_blank'
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <SiLeetcode size={30} />
          </Link>
          <Link
            href={`mailto:${personalData.email}`}
            target='_blank'
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            <MdEmail size={30} />
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
          >
            <span>Get Resume</span>
            <MdDownload size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;