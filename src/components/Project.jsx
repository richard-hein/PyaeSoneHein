import { motion } from "motion/react";
import { useTranslate } from "../hooks/useTranslate";

const Project = ({
  image,
  title,
  description,
  url,
  demo = "",
  techStack = [],
  featured = false,
}) => {
  const t = useTranslate();
  return (
    <div className="flex flex-col-reverse px-3 items-center justify-between w-full border-b py-8 sm:flex-row gap-6">
      {/* Content */}
      <div className="w-full sm:w-[35%]">
        {/* {featured && (
          <span className="badge badge-primary mb-3">Featured Project</span>
        )} */}

        {/* <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="font-semibold tracking-wide text-xl mb-4"
        >
          {title}
        </motion.h1> */}
        <h1 className="font-semibold tracking-wide text-xl mb-4">{title}</h1>

        <p className="text-gray-300 leading-relaxed">{description}</p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                font-medium
                bg-primary/10
                text-primary
                border
                border-primary/20
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer">
              <button className="btn btn-primary">{t("btn_live")}</button>
            </a>
          )}

          <a href={url} target="_blank" rel="noreferrer">
            <button className="btn btn-outline">{t("btn_source")}</button>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="w-full sm:w-[60%] shadow-2xl border border-gray-700 rounded-xl overflow-hidden hover:border-primary transition-all">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] sm:h-[350px] object-cover"
        />
      </div>
    </div>
  );
};

export default Project;
