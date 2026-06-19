// icons
import { FaFacebook, FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";

import { SiGmail } from "react-icons/si";
// import { Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import MyProfileImage from "../../public/images/My_AVATAR.jpg";

// Components
import Icon from "../components/Icon";
// motion
import { motion } from "motion/react";
import WordCycle from "../components/ui/WordCycle";
import { useTranslate } from "../hooks/useTranslate";
const Hero = () => {
  const t = useTranslate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-[55%_1fr] gap-0 md:gap-12 items-center min-h-[75vh] px-2 md:px-4">
      {/* Left */}
      <div className="mt-6 md:mt-0">
        <p className="text-primary font-semibold tracking-[0.3em] mb-3">
          {t("intro")}
          <motion.span
            className="inline-block text-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            👋
          </motion.span>
        </p>

        <h1 className="text-5xl font-black mb-4 leading-tight">
          Pyae Sone Hein
        </h1>
        {/* <WordCycle /> */}

        <h2 className="text-2xl md:text-4xl font-bold mb-2  h-[60px] md:h-[80px]">
          <span className="text-primary">
            <Typewriter
              words={[
                "Next.js Developer",
                "Full Stack Developer",
                "JavaScript Developer",

                "React Developer",
                "Java Backend Developer",
                "Spring Boot Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>

        <p className="text-base md:text-lg tracking-wide leading-8 text-gray-300 max-w-[600px] mb-8">
          {t("hero_paragraph", {
            tech: (chunks) => (
              <span className="text-primary font-semibold"> {chunks}</span>
            ),
          })}
        </p>
        {/* <div className="flex flex-wrap gap-4">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a href="/resume.pdf" className="btn btn-outline">
            Download Resume
          </a>
        </div> */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a href="#projects" className="btn btn-primary">
            {t("btn_view_pj")}
          </a>

          <a href="/#" className="btn btn-outline cursor-not-allowed">
            {t("btn_download")}
          </a>

          <div className="flex items-center gap-5 ml-2 mt-4 md:mt-0">
            <a target="_blank" href="https://github.com/richard-hein">
              <FaGithub
                className="text-3xl md:text-2xl hover:text-primary  hover:-translate-y-1
      transition-all duration-300"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pyae-sone-hein-0b88943a0/"
            >
              <FaLinkedin
                className="text-3xl md:text-2xl hover:text-primary  hover:-translate-y-1
      transition-all duration-300"
              />
            </a>
            <a href="mailto:pyaesone.dev.web@gmail.com">
              <SiGmail
                className="text-3xl md:text-2xl hover:text-primary hover:-translate-y-1
      transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="hidden md:flex justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={MyProfileImage}
          alt="Pyae Sone Hein"
          className="
        w-[280px]
        h-[340px]
        md:w-[350px]
        md:h-[420px]
        object-cover
        rounded-3xl
        border-4
        border-primary
        shadow-[0_0_40px_rgba(132,204,22,0.3)]
      "
        />
      </div>
    </div>
  );
};
export default Hero;
