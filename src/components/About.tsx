import Aboutimg from "../assets/Aboutimg.jpeg";
import { ABOUT_ME } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="img" src={Aboutimg} alt="About" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            {/* Adding margin between the image and the text */}
            <p className="my-2 py-6 text-sm lg:text-base leading-relaxed max-w-md md:max-w-xs lg:ml-8">
              {ABOUT_ME}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
