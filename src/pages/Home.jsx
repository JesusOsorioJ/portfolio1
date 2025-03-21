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
import { databases } from "../components/utils";

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

  useEffect(() => {
    inicio.current?.scrollIntoView({ behavior: "smooth" });
    const landing = document.getElementById("inicio");
    setTimeout(() => landing.classList.add("bg-[#000000a2]"), 3500);
    setTimeout(() => landing.classList.add("dark:bg-[#000000c1]"), 3500);
  }, []);

  return (
    <div className="text-[16px] text-white text-justify bg-[#000000a2]">
      <EfectoPrincipal />
      <Menu
        inicio={inicio}
        experiencia={experiencia}
        herramientas={herramientas}
        estudios={estudios}
        proyectos={proyectos}
        contacto={contacto}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {/* Seccion de intro */}
      <section
        ref={inicio}
        id="inicio"
        style={{
          backgroundImage: `url(/assets/images/${
            Math.floor(Math.random() * 15) + 1
          }.jpg)`,
        }}
        className="flex flex-col justify-between gap-10 items-center py-30 px-10 lg:px-30
            bg-cover min-h-screen w-full bg-blend-multiply duration-2000"
      >
        <div className="flex flex-col gap-5 items-center">
          <EfectoAparecer delay={5000}>
            <p className="text-[40px] lg:text-[60px] uppercase">Jesus Osorio</p>
            <p className="text-[20px] uppercase text-[#E9D8A6]">
              Full Stack JavaScript
            </p>
          </EfectoAparecer>
          <div>
            <EfectoTexto delay={4000} classAdd="max-w-[800px] " data={t("profile")} />
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
            <div>
              <EfectoTexto
                classAdd="font-bold uppercase"
                data="• Disruptive Studio, Guadalajara, Mexico"
              />
              <EfectoTexto
                classAdd="text-[#E9D8A6]"
                data=" Full Stack JavaScript"
              />
              <p>{t("disruptiveTime")}</p>
              <EfectoAparecer>
                <div>
                  <p className="font-bold">{t("responsibilities")}:</p>
                  <p className="pl-2">{t("disruptiveResponsibilities1")}</p>
                  <p className="pl-2">{t("disruptiveResponsibilities2")}</p>
                  <p className="pl-2">{t("disruptiveResponsibilities3")}</p>
                </div>
              </EfectoAparecer>
              <EfectoAparecer>
                <ul>
                  <li className="font-bold">{t("importantAchievements")}:</li>
                  <li className="pl-2">{t("disruptiveAchievements1")} </li>
                  <li className="pl-2">{t("disruptiveAchievements2")} </li>
                  <li className="pl-2">{t("disruptiveAchievements3")} </li>
                  <li className="pl-2">{t("disruptiveAchievements4")} </li>
                  <li className="pl-2">{t("disruptiveAchievements5")} </li>
                  <li className="pl-2">{t("disruptiveAchievements6")} </li>
                </ul>
                <div className="flex item-center gap-1">
                  <div className="font-bold">{t("technologies")}:</div>
                  <div>
                    JavaScript, Typescript, Node.js, Next.js, Vite, AWS, Prisma,
                    PostgreSQL, Docker, Socket.io, MongoDB (Mongoose), JSDoc,
                    React Hook Form.
                  </div>
                </div>
              </EfectoAparecer>
            </div>

            <div>
              <EfectoTexto
                classAdd="font-bold uppercase"
                data="• Make it real (Bootcamp)"
              />
              <EfectoTexto classAdd="text-[#E9D8A6]" data="Web developer" />
              <p>{t("makeRealTime")}</p>
              <EfectoAparecer>
                <div className="text-justify">
                  <p className="font-bold">{t("responsibilities")}:</p>
                  <p className="pl-2">{t("makeRealResponsibilities1")}</p>
                  <p className="pl-2">{t("makeRealResponsibilities2")}</p>
                  <p className="pl-2">{t("makeRealResponsibilities3")}</p>
                </div>
              </EfectoAparecer>
              <EfectoAparecer>
                <ul>
                  <li className="font-bold">{t("importantAchievements")}:</li>
                  <li className="pl-2">
                    {t("makeRealAchievements1")}{" "}
                    <a
                      className="text-[#E9D8A6]"
                      href="https://quickcall.netlify.app/"
                    >
                      LINK
                    </a>{" "}
                  </li>
                  <li className="pl-2">
                    {t("makeRealAchievements2")}{" "}
                    <a
                      className="text-[#E9D8A6]"
                      href="https://my-appcreate.vercel.app/"
                    >
                      LINK
                    </a>{" "}
                  </li>
                </ul>
              </EfectoAparecer>
            </div>
          </div>
        </div>
      </section>
      {/* Herramientas */}
      <section
        ref={herramientas}
        style={{
          backgroundImage: `url(/assets/images/${
            Math.floor(Math.random() * 15) + 1
          }.jpg)`,
        }}
        className="min-h-[60vh] w-screen bg-cover bg-blend-multiply bg-[#000000a2] dark:bg-[#000000c1] p-10 md:p-30"
      >
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
            <EfectoAparecer className="ml-20 my-[-30px]">
              <div className="h-[200px] w-[400px] bg-[url(/assets/photo/quickcall/landing.png)] bg-cover" />
            </EfectoAparecer>
            <EfectoAparecer delay={300}>
              <div className="h-[300px] w-[400px] bg-[url(/assets/photo/miapp/curso1.png)] bg-cover" />
            </EfectoAparecer>
            <EfectoAparecer className="ml-20 my-[-30px]" delay={600}>
              <div className="h-[200px] w-[400px] bg-[url(/assets/photo/quickbet/register.png)] bg-cover" />
            </EfectoAparecer>
          </div>

          <div className="flex flex-col gap-10 justify-center">
            <div className="flex flex-col item-center w-full">
              <div className="flex flex-col gap-4">
                <EfectoAparecer delay={100}>
                  <div className="text-lg font-bold">
                    • Full Stack JavaScript
                  </div>
                  <div className="font-bold">
                    Make it real, Medellín, Colombia.
                  </div>
                  <div>{t("makeItRealTime")}</div>
                  <div>{t("makeItRealDescription")}</div>
                </EfectoAparecer>
                <EfectoAparecer delay={200}>
                  <div className="text-lg font-bold">• Web developer</div>
                  <div className="font-bold">
                    MisionTIC 2022, Universidad del norte, Barranquilla,
                    Colombia.
                  </div>
                  <div>{t("misionTICTime")}</div>
                  <div>{t("misionTICDescription")}</div>
                </EfectoAparecer>
                <EfectoAparecer delay={300}>
                  <div className="text-lg font-bold">
                    • {t("chemicalEngineer")}
                  </div>
                  <div className="font-bold">
                    Universidad de Cartagena, Cartagena, Colombia.
                  </div>
                  <div>{t("universityTime")}</div>
                  <div>{t("researchGroup")}</div>
                </EfectoAparecer>
              </div>
            </div>

            <EfectoAparecer>
              <div className="flex flex-wrap gap-5 w-full ">
                <button
                  onClick={() =>
                    proyectos.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-[20px] group border h-[40px] relative flex 
                  items-center justify-center overflow-y-hidden px-10"
                >
                  <div className="z-10 text-[#ffffff] group-hover:text-[#000000] duration-500 ease-in-ou">
                    {t("continue")}
                  </div>
                  <div
                    className={`absolute top-0 h-[40px] w-full translate-y-full group-hover:translate-y-0 duration-500 ease-in-out bg-[#000000] bg-[#ffffff]`}
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
                  className="text-[20px] group border h-[40px] relative flex 
                  items-center justify-center overflow-y-hidden px-10"
                >
                  <div className="z-10 text-[#ffffff] group-hover:text-[#000000] duration-500 ease-in-ou">
                    {t("downloadResumeSpanish")}
                  </div>
                  <div
                    className={`absolute top-0 h-[40px] w-full translate-y-full group-hover:translate-y-0 duration-500 ease-in-out bg-[#000000] bg-[#ffffff]`}
                  />
                </button>
              </div>
            </EfectoAparecer>
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundImage: `url(/assets/images/${
            Math.floor(Math.random() * 15) + 1
          }.jpg)`,
        }}
        className="bg-cover h-[50vh] w-full  bg-blend-multiply bg-[#000000a2] dark:bg-[#000000c1]"
      />

      <SeccionBuscador proyectos={proyectos} contacto={contacto} />
      <Footer
        inicio={inicio}
        experiencia={experiencia}
        herramientas={herramientas}
        estudios={estudios}
        proyectos={proyectos}
      />
      <div ref={contacto} />
    </div>
  );
}

export const SeccionBuscador = ({ proyectos, contacto, buscador = false }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(databases);

  useEffect(() => {
    setFilteredData(
      databases.filter(
        (d) =>
          d.name.toLowerCase().includes(search.toLowerCase()) ||
          d.technologies.front.some((tech) =>
            tech.toLowerCase().includes(search.toLowerCase())
          ) ||
          d.technologies.back.some((tech) =>
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
  }, [search, databases]);

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
        className="w-[250px] text-[20px] group bg-[#005F73] max-h-[50px] relative flex flex-col overflow-y-hidden"
      >
        <div className="z-[10] min-h-[50px] mx-6 hover:text-black uppercase
        duration-500 ease-in-out flex flex-col items-center justify-center">
          {t("contact")}
        </div>
        <div className="absolute z-1 top-0 min-h-[50px] w-full translate-y-full group-hover:translate-y-0 duration-500 ease-in-out bg-white" />
      </button>
    </section>
  );
};
