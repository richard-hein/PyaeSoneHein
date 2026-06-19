import { BsArrowUpSquare } from "react-icons/bs";

import MyProfileImage from "../../public/images/My_AVATAR.jpg";
import { RiNextjsFill } from "react-icons/ri";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGitAlt,
  FaLaravel,
  FaCss3Alt,
  FaHtml5,
  FaSass,
  FaJava,
  FaDatabase,
  FaDocker,
} from "react-icons/fa6";
import {
  SiSpringboot,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiRedux,
  SiNestjs,
  SiReactrouter,
  SiMongodb,
} from "react-icons/si";
import { motion } from "motion/react";
import { SkillCard } from "../components/ui/SkillCard";
import { useTranslate } from "../hooks/useTranslate";
const AboutMe = () => {
  const t = useTranslate();
  return (
    <section
      id="about"
      className="relative pt-[25px]  max-w-[1000px]  mx-auto "
    >
      <div className="mt-20">
        <h2 className="text-3xl w-fit mx-auto font-bold text-center mb-8 border-b-4 border-primary pb-2">
          {t("about")}
        </h2>

        <div className="bg-base-200 rounded-2xl p-8 border border-gray-700">
          <p className="text-lg leading-relaxed text-justify">
            {t("about_me")}
          </p>

          <blockquote className="mt-6 pt-6 border-t border-gray-600 text-center">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {t("my_fav_quote")}
            </p>

            <p className="text-base italic text-gray-400">
              "You have power over your mind, not outside events. Realize this,
              and you will find strength."
            </p>
            <cite className="mt-2 block text-sm text-primary not-italic">
              — {t("marcus_aurelius")}
            </cite>
          </blockquote>
        </div>
      </div>
      <div className="mt-12" id="skills">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="border-b-4 border-primary pb-2">
            {t("section_tech_stack")}
          </span>
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {t("category_programming_languages")}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <SkillCard icon={<FaJava />} name="Java" />
              <SkillCard icon={<SiTypescript />} name="TypeScript" />
              <SkillCard icon={<SiJavascript />} name="JavaScript" />
              <SkillCard icon={<SiPhp />} name="PHP" />
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {t("category_frontend")}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <SkillCard icon={<FaReact />} name="React" />
              <SkillCard icon={<RiNextjsFill />} name="Next.js" />
              <SkillCard icon={<FaVuejs />} name="Vue.js" />
              {/* <SkillCard icon={<SiRedux />} name="Redux" /> */}
              <SkillCard icon={<SiTailwindcss />} name="Tailwind" />
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {t("category_backend")}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <SkillCard icon={<SiSpringboot />} name="Spring Boot" />
              {/* <SkillCard icon={<SiNestjs />} name="NestJS" /> */}
              <SkillCard icon={<FaNodeJs />} name="Node.js" />
              <SkillCard icon={<SiExpress />} name="Express" />
              <SkillCard icon={<FaLaravel />} name="Laravel" />
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {t("category_tools_and_databases")}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <SkillCard icon={<FaGitAlt />} name="Git" />
              <SkillCard icon={<FaDocker />} name="Docker" />
              <SkillCard icon={<SiMysql />} name="MySQL" />
              <SkillCard icon={<SiMongodb />} name="Mongo" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex">
        <div className="mr-4">
          <h3 className="text-lg font-bold text-primary">Languages</h3>
          <ul className="list-disc list-inside text-sm md:text-lg">
            <li>JavaScript</li>
            <li>Python</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-lg font-bold text-primary">Framework</h3>
          <ul className="list-disc list-inside text-sm md:text-lg">
            <li>React</li>
            <li>Node.js</li>
            <li>Django</li>
          </ul>
        </div>
      </div> */}
    </section>
  );
};
export default AboutMe;
