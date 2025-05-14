"use client"
// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsCodeSlash } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import Link from "next/link";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
          <div className="flex justify-center items-center lg:sticky lg:top-24">
            <div className="w-full max-w-xl scale-110">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      {experience.github && (
                        <Link href={experience.github} target="_blank" className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors z-10" title="View on GitHub">
                          <FaGithub size={24} />
                        </Link>
                      )}
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-start gap-x-8 px-3 py-5">
                        <div className="flex flex-col items-center justify-center">
                          <div className="text-violet-500 transition-all duration-300 hover:scale-125 mt-1">
                            <BsCodeSlash size={36} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base text-[#16f2b3] mb-2">
                            {experience.language}
                          </p>
                          <p className="text-sm text-gray-300">
                            {experience.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;