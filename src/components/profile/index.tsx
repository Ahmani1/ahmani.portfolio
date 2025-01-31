/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { getTranslation } from "@/lib/hook";
import { useLayout } from "@/store/layout";
import { motion } from "framer-motion";
import Image from "next/image";

const Profile = () => {
    const { locale } = useLayout();
    const t = getTranslation(locale as Locales);
    
    return (
       <>
        <div className="w-auto h-auto relative md:float-left float-none mr-4 profile rounded-full text-center">
            <motion.div
                initial={{ opacity: 1 }}
                animate={{
                    transition: { delay: 2, duration: 0.5, ease: "easeIn" },
                }}
            >
                <div className="w-[150px] h-[150px] overflow-hidden  relative">
                    <Image
                        src="/profile.png"
                        alt="profi"
                        priority
                        quality={100}
                        fill
                        className="object-cover p-2 rounded-full"
                    />
                </div>
            </motion.div>

            <motion.svg
                className={"absolute top-0 md:left-0 left-auto w-[150px] h-[150px]"}
                viewBox="0 0 506 506"
                fill="transparent"
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r="253"
                    stroke="#16C172"
                    strokeWidth="4"
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    initial={{ strokeDasharray: "24 10 0  0" }}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22  22"],
                        rotate: [120, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                />
            </motion.svg>
        </div>

        <p className="text-center md:text-left">
            <h1 className="text-xl font-bold ">
              <span className="dark:text-white text-accent">// AHMANI </span>{" "}
              ELMOKHTAR //
            </h1>
            {t.aboutMe}
          </p>
       </>
    );
};

export default Profile;
