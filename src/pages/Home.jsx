import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  BuscarPorPaginacion,
  Carrusel,
  EfectoAparecer,
  EfectoPrincipal,
  EfectoTexto,
  Footer,
  Herramientas,
  Menu,
} from "../components/MyComponent";
import data from "../assets/locales/es.json";

export default function Home({
  inicio,
  herramientas,
  experiencia,
  estudios,
  proyectos,
  contacto,
  isOpen,
  setIsOpen,
}) {
  const { t } = useTranslation();
  const [showSQL, setShowSQL] = useState(false);
  const [hidden, setHidden] = useState(false);

  const changeStatus = (value) => {
    setShowSQL(value);
    setTimeout(() => { setHidden(value) }, 400)
  }

  useEffect(() => {
    inicio.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    fetch(import.meta.env.VITE_VISIT_TRACKER_URL, {
      method: "POST",
    }).catch((err) => console.error("Error registrando", err));
  }, []);


  return (
    <>
      <EfectoPrincipal />
      <div className={`text-[16px] text-white text-justify duration-500 ease-in-out 
                        ${showSQL ? "-translate-x-full" : " "} 
                        ${hidden ? "hidden" : ""}`}>
        <Menu
          inicio={inicio}
          experiencia={experiencia}
          herramientas={herramientas}
          estudios={estudios}
          proyectos={proyectos}
          contacto={contacto}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          delayOscuro={3500}
        />
        {/* Seccion de intro */}
        <section
          ref={inicio}
          className="flex flex-col justify-between gap-10 items-center py-30 px-10 lg:px-30 min-h-[90vh] w-full"
        >
          <div className="flex flex-col gap-5 items-center">
            <EfectoAparecer delay={5000}>
              <p className="text-[40px] lg:text-[60px] uppercase">Jesus Osorio</p>
              <p className="text-[20px] uppercase text-[#E9D8A6]">
                Full Stack JavaScript
              </p>
            </EfectoAparecer>
            <div>
              <EfectoTexto
                delay={4000}
                classAdd="max-w-[800px]"
                data={t("profile")}
              />
            </div>
          </div>
          <div>
            <EfectoAparecer delay={8000}>
              <button
                onClick={() => {
                  experiencia.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="word-container mb-1"
              >
                {t("continue")}
              </button>
            </EfectoAparecer>
          </div>
        </section>
        {/* Experiencia */}
        <section
          ref={experiencia}
          className="flex flex-col gap-5 justify-start items-center py-20 px-5 lg:px-30 bg-[#252525] dark:bg-black min-h-screen"
        >
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row-reverse ">
            <div className="flex flex-col items-start lg:items-end">
              <EfectoAparecer>
                <p className="uppercase text-[40px] lg:text-[55px]  lg:mt-[-20px]">
                  {t("workExperience")}
                </p>
              </EfectoAparecer>
              <button
                onClick={() => {
                  herramientas.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="word-container mb-1"
              >
                {t("continue")}
              </button>
            </div>
            <div className="flex flex-col w-full gap-10">
              {data.experience.map((d, i) => (
                <div key={i}>
                  <EfectoTexto
                    classAdd="font-bold uppercase"
                    data={t(`experience.${i}.name`)}
                  />
                  <EfectoTexto
                    classAdd="text-[#E9D8A6]"
                    data={t(`experience.${i}.position`)}
                  />
                  <p>{t(`experience.${i}.time`)}</p>
                  <EfectoAparecer>
                    <ul>
                      <li className="font-bold">{t("responsibilities")}:</li>
                      {d.responsibilities.map((_, j) => (
                        <div key={j} className="flex">
                          <p className="px-2">•</p>
                          <p>{t(`experience.${i}.responsibilities.${j}`)}</p>
                        </div>
                      ))}
                    </ul>
                  </EfectoAparecer>
                  <EfectoAparecer>
                    <ul>
                      <li className="font-bold">{t("importantAchievements")}:</li>
                      {d.achievements.map((_, j) => (
                        <div key={j} className="flex">
                          <p className="px-2">•</p>
                          <p>{t(`experience.${i}.achievements.${j}`)}</p>
                        </div>
                      ))}
                    </ul>
                    <div className="flex item-center gap-1 pt-3">
                      <p className="font-bold">{t("technologies")}:</p>
                      <p>{t(`experience.${i}.technologies`)}</p>
                    </div>
                  </EfectoAparecer>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Herramientas */}
        <section ref={herramientas} className="min-h-[60vh] p-10 md:p-30">
          <EfectoAparecer>
            <p className="text-[40px] lg:text-[60px] uppercase">{t("tools")}</p>
          </EfectoAparecer>
          <Herramientas />
        </section>
        {/* Estudios */}
        <section
          ref={estudios}
          className="flex flex-col gap-10 justify-start items-center py-20 px-5 lg:px-30 bg-[#252525] dark:bg-black  min-h-screen"
        >
          <EfectoAparecer>
            <p className="text-[40px] lg:text-[60px] uppercase">
              {t("academicTraining")}
            </p>
          </EfectoAparecer>
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="h-[30vh] w-[70%] my-[-30px] self-end lg:hidden mb-[-60px] bg-[url(/assets/photo/miapp/curso1.png)] bg-cover" />
            <div className="h-[30vh] w-[70%] lg:hidden bg-[url(/assets/photo/quickbet/register.png)] bg-cover" />
            <div className="hidden lg:flex flex-col ">
              <EfectoAparecer
                className="ml-20 my-[-30px]"
                translate="-translate-x-full"
              >
                <div className="h-[200px] w-[400px] bg-[url(/assets/photo/quickcall/landing.png)] bg-cover" />
              </EfectoAparecer>
              <EfectoAparecer delay={300}>
                <div className="h-[300px] w-[400px] bg-[url(/assets/photo/miapp/curso1.png)] bg-cover" />
              </EfectoAparecer>
              <EfectoAparecer
                className="ml-20 my-[-30px]"
                delay={600}
                translate="-translate-x-full"
              >
                <div className="h-[200px] w-[400px] bg-[url(/assets/photo/quickbet/register.png)] bg-cover" />
              </EfectoAparecer>
            </div>

            <div className="flex flex-col gap-10 justify-center">
              <div className="flex flex-col gap-4 item-center w-full">
                {data.academy.map((_, i) => (
                  <EfectoAparecer delay={100 * (i + 1)} key={i}>
                    <div className="text-lg font-bold">
                      {t(`academy.${i}.title`)}
                    </div>
                    <div className="text-[#E9D8A6]">
                      {t(`academy.${i}.university`)}
                    </div>
                    <div>{t(`academy.${i}.time`)}</div>
                    <div>{t(`academy.${i}.description`)}</div>
                  </EfectoAparecer>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Cursos */}
        <section
          ref={estudios}
          className="flex flex-col gap-10 justify-start items-center py-20 px-5 lg:px-30"
        >
          <EfectoAparecer>
            <p className="text-[40px] lg:text-[60px] uppercase">
              {t("coursesCertifications")}
            </p>
          </EfectoAparecer>
          <div className="flex flex-col gap-10 justify-center">
            <div className="flex flex-col gap-4 item-center w-full">
              {Array.from({ length: 2 }, (_, i) => (
                <EfectoAparecer delay={100 * (i + 1)} key={i}>
                  <div className="text-lg font-bold">
                    {t(`courses.${i}.title`)}
                  </div>
                  <div className="text-[#E9D8A6]">
                    {t(`courses.${i}.university`)}
                  </div>
                  <div>{t(`courses.${i}.time`)}</div>
                  <div>{t(`courses.${i}.description`)}</div>
                </EfectoAparecer>
              ))}
            </div>

            <EfectoAparecer>
              <div className="flex flex-wrap gap-5 w-full justify-center ">
                <button
                  onClick={() =>
                    proyectos.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-[18px] group border h-[40px] relative flex 
                      items-center justify-center overflow-y-hidden px-10"
                >
                  <div className="z-10 text-[#ffffff] group-hover:text-[#000000] duration-500 ease-in-out uppercase">
                    {t("continue")}
                  </div>
                  <div
                    className={`absolute top-0 h-[40px] w-full translate-y-full group-hover:translate-y-0 duration-500 ease-in-out bg-[#ffffff]`}
                  />
                </button>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    const value = "es";

                    if (value == "en") {
                      link.href = "/assets/cv/CV_EN.pdf";
                    } else {
                      link.href = "/assets/cv/CV_ES.pdf";
                    }
                    link.download = "CV.pdf";
                    link.click();
                  }}
                  className="text-[18px] group border h-[40px] relative flex 
                      items-center justify-center overflow-y-hidden px-10"
                >
                  <div className="z-10 text-[#ffffff] group-hover:text-[#000000] duration-500 ease-in-out uppercase">
                    {t("downloadResumeSpanish")}
                  </div>
                  <div
                    className={`absolute top-0 h-[40px] w-full translate-y-full group-hover:translate-y-0 duration-500 ease-in-out bg-[#ffffff]`}
                  />
                </button>
              </div>
            </EfectoAparecer>
          </div>
        </section>

        <SeccionBuscador proyectos={proyectos} contacto={contacto} />


        {/* Descripción del proyecto SQL */}
        <section
          ref={estudios}
          className="flex flex-col gap-10 justify-start items-center py-20 px-5 lg:px-30"
        >
          <div className="flex flex-col items-center">
            <EfectoAparecer>
              <p className="text-[40px] lg:text-[60px] uppercase">
                {t("sqlTitle")} <span className=" text-[#E9D8A6]">IA</span>
              </p>
            </EfectoAparecer>
            <div className="text-[#E9D8A6]">
              {t("sqlSubtitle")}
            </div>
          </div>
          <EfectoAparecer className="max-w-[900px]">{t("sqlText")}</EfectoAparecer>
          <EfectoAparecer translate="translate-x-full">
            <button
              onClick={() => changeStatus(true)}
              className="word-container mb-1"
            >
              {t("goToProject")}
            </button>
          </EfectoAparecer>
        </section>

        {/* Footer */}
        <Footer
          inicio={inicio}
          experiencia={experiencia}
          herramientas={herramientas}
          estudios={estudios}
          proyectos={proyectos}
        />
        <div ref={contacto} />
      </div>

      {/* ——— Panel de Proyecto SQL (iframe) ——— */}
      <div
        className={`
         w-screen h-screen
          duration-500 ease-in-out
          ${showSQL ? "" : "translate-x-full"}
          ${hidden ? "" : "hidden"}
        `}
      >
        <iframe
          src="https://sqlproject-ten.vercel.app/"
          className=" w-screen h-screen"
        />
        <button
          onClick={() => changeStatus(false)}
          className=" fixed top-4 right-6 text-[16px] group border h-[40px] flex 
                      items-center justify-center overflow-y-hidden px-5"
        >
          <div className="z-10 text-[#ffffff] group-hover:text-[#000000] duration-500 ease-in-out">
            <div className="flex gap-1">
              <p class="size-6 animate-bounce">
                ←
              </p>
              {t("backToPortfolio")}
            </div>
          </div>
          <div
            className={`absolute top-0 h-[40px] w-full translate-y-full group-hover:translate-y-0 duration-500 ease-in-out bg-[#ffffff]`}
          />
        </button>
      </div>
    </>
  );
}

export const SeccionBuscador = ({ proyectos, contacto, buscador = false }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data.projects);

  useEffect(() => {
    setFilteredData(
      data.projects.filter(
        (d) =>
          d.name.toLowerCase().includes(search.toLowerCase()) ||
          d.technologies.frontend.some((tech) =>
            tech.toLowerCase().includes(search.toLowerCase())
          ) ||
          d.technologies.backend.some((tech) =>
            tech.toLowerCase().includes(search.toLowerCase())
          ) ||
          d.technologies.database.some((tech) =>
            tech.toLowerCase().includes(search.toLowerCase())
          ) ||
          d.technologies.test.some((tech) =>
            tech.toLowerCase().includes(search.toLowerCase())
          )
      )
    );
  }, [search]);

  return (
    <section
      ref={proyectos}
      className="flex flex-col justify-center items-center gap-[30px] py-[100px] h-full bg-[#252525] dark:bg-black"
    >
      <div className="w-full flex flex-col items-center gap-[20px]">
        <p className="text-[50px] text-center leading-[50px] uppercase">
          {t("myProjects")}
        </p>
        <p className="text-[18px]">{t("listPersonalProjects")}</p>
        <input
          type="text"
          placeholder="Buscar por nombre o tecnología..."
          className="p-2 mb-4 border border-gray-300 rounded w-[90%] md:w-[50%]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {filteredData.length == 0 && t("nothingToShow")}
        {buscador ? (
          <BuscarPorPaginacion filteredData={filteredData} />
        ) : (
          <Carrusel filteredData={filteredData} />
        )}
      </div>

      <button
        onClick={() => contacto.current?.scrollIntoView({ behavior: "smooth" })}
        href="#portafolio"
        className="w-[250px] text-[18px] group bg-[#005F73] max-h-[50px] relative flex flex-col overflow-y-hidden"
      >
        <div
          className="z-[10] min-h-[50px] mx-6 hover:text-black uppercase
          duration-500 ease-in-out flex flex-col items-center justify-center"
        >
          {t("contact")}
        </div>
        <div className="absolute z-1 top-0 min-h-[50px] w-full translate-y-full group-hover:translate-y-0 duration-500 ease-in-out bg-white" />
      </button>
    </section>
  );
};
