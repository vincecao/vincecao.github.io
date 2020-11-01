import React, { useEffect, useState } from "react";
import {
  getPhotoSetsPromise,
  getPublicPhotosPromise,
} from "./flickrComponents/flickrApi";
import { motion, AnimatePresence } from "framer-motion";
import { indexData } from "./const";
// import "./App.css";

const App = () => {
  const [imgData, setImgData] = useState([]);
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    getPhotoSetsPromise().then((response = {}) => {
      if (response.data) {
        // console.log(response.data);
        setImgData(response.data);
      }
    });
  }, []);

  useEffect(() => {
    if (imgData.length > 0) {
      setTimeout(() => {
        if (index + 1 === imgData.length) {
          setIndex(0);
        } else {
          setIndex((_index) => _index + 1);
        }
      }, 7000);
    }
  }, [imgData, index]);

  // useEffect(() => {
  //   getPublicPhotosPromise().then((response = {}) => {
  //     if (response.data) {
  //       console.log(response.data);
  //     }
  //   });
  // }, []);

  const { firstname, lastname, fullname, links } = indexData;

  return (
    <div className="relative h-screen">
      <AnimatePresence exitBeforeEnter>
        <motion.img
          // style={{ background: `url("${imgData[index]}")` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          key={`image-${index}`}
          src={imgData[index]}
          className="absolute h-screen min-w-full object-cover"
        />
      </AnimatePresence>
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 border-4 border-white ${
          isHover ? "backdrop-blur" : ""
        }`}
      ></div>
      <div
        // initial={{ scale: 0.95, opacity: 0 }}
        // animate={{
        //   scale: 1,
        //   opacity: 1,
        //   transition: { duration: 1 },
        // }}
        // exit={{
        //   scale: 0.95,
        //   opacity: 0,
        //   transition: { duration: 1 },
        // }}
        className="absolute w-full h-screen"
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={`text-${index}`}
            initial={{ color: "#000000" }}
            animate={{
              color: "#ffffff",
              transition: { duration: 1 },
            }}
            exit={{
              color: "#000000",
              transition: { duration: 1 },
            }}
            className="text-shadow w-full h-full font-index p-6 antialiased leading-10 tracking-widest"
          >
            <div className="mt-20 mx-auto text-center mb-10">
              <p className="">
                {firstname} {lastname}
              </p>
              <p className=""> / </p>
              <p className="text-4xl font-body">{fullname}</p>
            </div>
            <div className="flex flex-col md:flex-row w-full text-center m-auto justify-center items-center">
              {links.map((link, index) => (
                <div key={link.link}>
                  {/* <ins>&middot;</ins> */}
                  {/* {index > 0 && <p className="inline"> / </p>} */}
                  <motion.div
                    whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    // className="transform scale-100 transition duration-150 ease-in-out hover:scale-125"
                  >
                    <p className="inline italic">/</p>
                    <a
                      className="mr-5 italic"
                      title={link.title}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute top-0 mt-5 left-0 ml-5">
        <motion.img
          initial={{ x: -100 }}
          animate={{
            x: 0,
            transition: {
              delay: 1,
            },
          }}
          src="/assets/avatar.png"
          alt="avatar"
          className="rounded-full w-12 h-12 shadow-md"
        />
      </div>
    </div>
  );
};

export default App;
