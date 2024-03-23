"use client";
import { SiWebmoney } from "react-icons/si";
import { motion } from "framer-motion";
import { LampContainer } from "../components/utils/lamp";

export default function Home() {
  return (
    <>
      <main className="flex justify-center items-center h-[100vh] ">
      <LampContainer>
              <motion.h1
             initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>  */}
        <div className="mt-[-180px] w-auto overflow-hidden ">
        
          <div className="text-center items-baseline justify-center flex font-medium text-white text-8xl">
            Gr   
            <span className="text-6xl text-white">
              <SiWebmoney />
            </span>
            en Starter
          </div>
          <div className="text-center justify-center flex text-lg mt-2 mb-4 text-white">
            <h2>Revolutionizing Green Initiatives with Web3</h2>
          </div>
            
          
          <div className="justify-center flex"></div>
        </div>
        </motion.h1>
          </LampContainer>
      </main>
    </>
  );
}
