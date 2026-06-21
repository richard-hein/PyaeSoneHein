import { certifications, contributedWebsites } from "../data/data";
import { motion } from "motion/react";
import { useTranslate } from "../hooks/useTranslate";
const MyJourney = () => {
  const t = useTranslate();
  const toModalId = (name) => `modal_${name.replace(/\s+/g, "_")}`;
  return (
    <>
      <section className="grid grid-cols-1 mt-[80px]">
        <section className="mt-8" id="experience">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="border-b-4 border-primary pb-2 leading-loose">
              {t("section_professional_experience")}
            </span>
          </h2>

          <div className="bg-base-200 border border-gray-700 rounded-3xl p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {t("role_frontend_developer")} (Next.js)
                </h3>

                <p className="text-primary font-medium mt-1">Shopdoora</p>
              </div>

              <div className="text-gray-400">{t("experience_duration")}</div>
            </div>
            {/* Description */}
            <div className="mt-8">
              <ul className="space-y-3 text-gray-300">
                <li>• {t("experience_1")}</li>

                <li>• {t("experience_2")}</li>
                <li>• {t("experience_3")}</li>
                <li>• {t("experience_4")}</li>
              </ul>
            </div>
            {/* Websites */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6">
                {t("websites_contributed")}
              </h4>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {contributedWebsites.map((web) => (
                <div key={web.name}>
                  <div
                    onClick={() =>
                      document.getElementById(toModalId(web.name)).showModal()
                    }
                    className="
              group
              border
              border-gray-700
              rounded-2xl
              overflow-hidden
              h-full
              hover:border-primary
              transition-all
              duration-300
              hover:-translate-y-2
              cursor-pointer
            "
                  >
                    <div className="h-[220px] bg-base-300 flex items-center justify-center">
                      <img
                        src={web.image}
                        alt={web.name}
                        className="object-fit w-full h-full"
                      />
                    </div>

                    <div className="p-5">
                      <h5 className="font-bold text-lg mt-2">{web.name}</h5>

                      <p className="text-sm text-gray-400 mt-2">
                        {t(web.description)}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {web.techStacks?.map((t) => (
                          <span key={t} className="badge badge-primary">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal Dialog */}
                  <dialog id={toModalId(web.name)} className="modal">
                    <div className="modal-box flex flex-col justify-center items-center">
                      <div className="flex justify-center items-center flex-col mb-4">
                        <img
                          src="./maintenace.svg"
                          className="h-[150px] w-[100px] object-fit"
                        />
                        <p className="text-sm w-[80%] mx-auto font-semibold text-gray-300">
                          {t("maintenance_text")}
                        </p>
                      </div>

                      <div className="modal-action">
                        <form method="dialog">
                          <button className="btn btn-primary">
                            {t("btn-close")}
                          </button>
                        </form>
                      </div>
                    </div>

                    {/* This must be a SIBLING of modal-box, not nested inside it */}
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h3 className="hidden md:block text-2xl font-bold text-center mb-6">
            {t("section_languages_certifications")}
          </h3>
          <h3 className="block md:hidden text-2xl font-bold text-center mb-6">
            {t("section_languages_certifications")}
          </h3>
          <div className="grid grid-cols-1  md:grid-cols-[200px_1fr] gap-3">
            <div className="grid grid-cols-1 gap-2">
              <div className="card bg-base-200 border border-gray-700">
                <div className="card-body text-center">
                  <h4 className="font-bold">🇲🇲 Myanmar</h4>
                  <p className="text-primary">Native</p>
                </div>
              </div>

              <div className="card bg-base-200 border border-gray-700">
                <div className="card-body text-center">
                  <h4 className="font-bold">🇺🇸 English</h4>
                  <p className="text-primary">Communicational (Intermediate)</p>
                </div>
              </div>

              <div className="card bg-base-200 border border-primary">
                <div className="card-body text-center">
                  <h4 className="font-bold">🇯🇵 Japanese</h4>
                  <p className="text-primary font-bold">JLPT N2</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-base-200 border border-gray-700 rounded-xl p-5 hover:border-primary transition-all"
                >
                  <h4 className="font-semibold">{cert.title}</h4>

                  <p className="text-primary/80 text-sm mt-1">
                    {cert.platform}
                  </p>

                  <p className="text-xs text-primary mt-3">
                    {cert.techStack.join("  •   ")}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default MyJourney;
