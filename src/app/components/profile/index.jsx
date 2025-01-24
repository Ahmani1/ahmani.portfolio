"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Profile = () => {
    return (
        <div className="w-auto h-auto relative md:float-left float-none mr-4 profile rounded-full">
            <motion.div
                initial={{ opacity: 1 }}
                animate={{
                    transition: { delay: 2, duration: 0.5, ease: "easeIn" },
                }}
            >
                <div className="w-[150px] h-[150px] overflow-hidden  relative">
                    <Image
                        src="/photo.png"
                        alt="profi"
                        priority
                        quality={100}
                        fill
                        className="object-cover p-2 rounded-full"
                    />
                </div>
            </motion.div>

            <motion.svg
                className={"absolute top-0 left-0 w-[150px] h-[150px]"}
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
    );
};

export default Profile;
