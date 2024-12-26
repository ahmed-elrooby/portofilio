"use client"
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaFilePdf, FaRegUser } from "react-icons/fa";
import { HiMiniPresentationChartLine } from "react-icons/hi2";
import { IoIosHome, IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

// تحميل Lottie فقط على المتصفح
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
import contact from "../../Images/contact.json";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div className="relative w-[95%] mx-auto mt-[80px] md:mt-[120px] md:mb-[50px] mb-[40px]">
        <div className="text-center p-4 mb-6">
          <h1 className="text-2xl font-bold text-[--main-color] mb-2">
            Get in Touch with Us!
          </h1>
          <p className="text-gray-600 leading-[1.7] dark:text-gray-300">
            We're here to help. If you have any questions or suggestions, feel free to reach out.
            Our team is ready to respond to your inquiries as quickly as possible.
          </p>
        </div>

        <div className="fixed z-[26622] border-2 border-[--main-color] rounded-full px-1 md:px-3 h-[250px] flex flex-col gap-[5px] md:gap-[10px] items-center justify-center left-1 md:left-4 md:top-[40%] top-[30%] text-[--main-color]">
          <Link className="transition-all hover:text-gray-500 dark:hover:text-white" href="/">
            <IoIosHome size={36} />
          </Link>
          <Link className="transition-all hover:text-gray-500 dark:hover:text-white" href="/About">
            <FaRegUser size={36} />
          </Link>
          <Link className="transition-all hover:text-gray-500 dark:hover:text-white" href="/Contact">
            <IoMdMail size={36} />
          </Link>
          <Link className="transition-all hover:text-gray-500 dark:hover:text-white" href="/Projects">
            <HiMiniPresentationChartLine size={36} />
          </Link>
          <Link className="transition-all hover:text-gray-500 dark:hover:text-white" href="/Resume">
            <FaFilePdf size={36} />
          </Link>
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-center gap-[20px] md:gap-[30px]">
            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 1.3,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
            >
              <Lottie
                animationData={contact}
                loop={true}
                play
                className="w-full md:w-[450px] md:h-[350px]"
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 1.3,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
            >
              <Form />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
