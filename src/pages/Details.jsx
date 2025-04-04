import { useEffect } from "react";
import {
  CarruselDetails,
  EfectoAparecer,
  EfectoTexto,
  Footer,
  Herramientas,
  Menu,
} from "../components/MyComponent";
import { useParams } from "react-router-dom";
import { projects } from "../components/utils";
import { useTranslation } from "react-i18next";
import { SeccionBuscador } from "./Home";
import { ToolSvg } from "../components/Icons";

export default function Details({
  inicio,
  experiencia,
  herramientas,
  estudios,
  proyectos,
  contacto,
  isOpen,
  setIsOpen,
}) {
  const { t } = useTranslation();
  const { url } = useParams();
  const project = projects.filter((d) => url == d.url)[0];

  useEffect(() => {
    inicio.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="text-white text-[16px] text-justify">
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

      {/* Proyecto */}
      <section
        ref={inicio}
        id="inicio"
        className="flex flex-col gap-5 items-center py-30 px-5 md:px-30 min-h-screen w-full">
        <EfectoAparecer delay={1000}>
          <p className="text-[50px] uppercase w-fit">{project.name}</p>
        </EfectoAparecer>
        <div className="flex flex-col lg:flex-row-reverse gap-15 w-full">
          <div className="flex flex-col gap-10">
            <EfectoAparecer delay={1200}>
              <CarruselDetails data={project} />
              <div className="flex flex-wrap w-full gap-4">
                {project.webpage && (
                  <ButtonLink text="webPage" href={project.webpage} />
                )}
                {project.frontend && (
                  <ButtonLink text="frontend" href={project.frontend} />
                )}
                {project.backend && (
                  <ButtonLink text="backend" href={project.backend} />
                )}
                {project.videopage && (
                  <ButtonLink text="videopage" href={project.videopage} />
                )}
              </div>
            </EfectoAparecer>

            <Herramientas
              data={project.technologies}
              quitarTexto={false}
              svgSize="30px"
              classAdd="grayscale"
            />
          </div>

          <div className="flex flex-col gap-3">
            <EfectoTexto
              textSize="16px"
              classAdd="max-w-[800px]"
              data={t(`projects.${url}.description`)}
            />
            <EfectoAparecer delay={3000}>
              <p className="text-base font-bold text-[#E9D8A6]">
                {t("participants")}
              </p>
              {project.participants.map((d) => (
                <a
                  className="flex gap-1 hover:opacity-60"
                  key={d.name}
                  href={d.linkedin}
                >
                  <p>{t(d.rol)}:</p>
                  <p>{d.name}</p>
                </a>
              ))}

              {project.responsibilities != 0 && (
                <div className="mt-4">
                  <p className="text-base font-bold text-[#E9D8A6]">
                    {t("responsibilities")}
                  </p>
                  <ul role="list" className="list-disc space-y-2 pl-4">
                    {Array.from({ length: project.responsibilities },(_, i) => (
                      <li key={i}>{t(`projects.${url}.responsibilities${i + 1}`)}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.characteristics != 0 && (
                <div className="mt-4">
                  <p className="text-base font-bold text-[#E9D8A6]">
                    {t("characteristics")}
                  </p>
                  <ul role="list" className="list-disc space-y-2 pl-4">
                    {Array.from({ length: project.characteristics },(_, i) => (
                      <li key={i}>{t(`projects.${url}.characteristics${i + 1}`)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </EfectoAparecer>

            <EfectoAparecer delay={6000}>
              <button
                onClick={() => {
                  proyectos.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="word-container mb-1"
              >
                {t("myProjects")}
              </button>
            </EfectoAparecer>
          </div>
        </div>
      </section>

      <SeccionBuscador
        proyectos={proyectos}
        contacto={contacto}
        buscador={true}
      />
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

const ButtonLink = ({ text, href }) => {
  const { t } = useTranslation();

  return (
    <a
      href={href}
      className="text-[16px] group border h-[40px] relative flex 
      items-center justify-center overflow-y-hidden px-10 uppercase"
    >
      <div className="z-10 group-hover:text-[#000000] text-[#ffffff] duration-500 ease-in-out">
        <ToolSvg iconname={text} color="" />
      </div>
      <div className="z-10  text-[#ffffff] group-hover:text-[#000000] duration-500 ease-in-out">
        {t(text)}
      </div>
      <div className="absolute top-0 h-[40px] w-full translate-y-full group-hover:translate-y-0 duration-500 ease-in-out bg-[#ffffff]" />
    </a>
  );
};
