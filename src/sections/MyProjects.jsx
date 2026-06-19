import Project from "../components/Project";
import { useTranslate } from "../hooks/useTranslate";

const MyProjects = () => {
  const t = useTranslate();
  return (
    <section id="projects" className=" mt-24 ">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">
          <span className="border-b-4 border-primary pb-2 ">
            {t("section_featured_projects")}
          </span>
        </h2>

        <p className="max-w-[700px] mt-8 md:mt-6 mx-auto text-gray-400 leading-relaxed">
          {t("featured_projects_subs")}
        </p>
      </div>

      {/* Projects */}

      <Project
        image="/images/yourfigs.png"
        title="yourFigs - Anime Figure Shop"
        description={t("featured_project_1")}
        techStack={[
          "Next.js",
          "TypeScript",
          "NextAuth",
          "Prisma",
          "Neon",
          "Paypal",
        ]}
        url="https://github.com/richard-hein/ProStore"
        demo="https://pro-store-pied-zeta.vercel.app/"
      />

      <Project
        image="/images/deezer.png"
        title="Deezer Clone"
        description={t("featured_project_2")}
        techStack={["Vue 3", "Pinia", "JavaScript"]}
        url="https://github.com/Richard-Hein/Deezer-Clone"
        demo="https://deezer-clone-indol.vercel.app/"
      />
      <Project
        image="/images/natrous.png"
        title="Natours Travel"
        description={t("featured_project_3")}
        techStack={["HTML", "Sass", "JavaScript"]}
        url="https://github.com/Richard-Hein/natours"
        demo="https://natours-pink-nine.vercel.app/"
      />
      <Project
        image="/images/e-plant.png"
        title="Welcome To Paradise Nursery"
        description={t("featured_project_4")}
        techStack={["React", "Redux", "CSS"]}
        url="https://github.com/Richard-Hein/E-Plant"
        demo="https://e-plant-three.vercel.app/"
      />

      <Project
        image="/images/lara_pos.png"
        title="Laravel Ecommerce Website"
        description={t("featured_project_5")}
        techStack={["Laravel", "PHP", "MySQL", "Blade"]}
        url="https://github.com/Richard-Hein/Laravel_POS"
      />

      <Project
        image="/images/nasa.png"
        title="NASA Mission Explorer"
        description={t("featured_project_6")}
        techStack={["React", "Express", "Node.js"]}
        url="https://github.com/Richard-Hein/NASA_ZTM"
      />
    </section>
  );
};

export default MyProjects;
