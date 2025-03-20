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
import { databases } from "../components/utils";
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
  const proyect = databases.filter((d) => url == d.url)[0];

  console.log({ proyect });

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
        className="flex flex-col justify-between gap-10 items-center py-30 px-10 lg:px-30
      bg-[url(/assets/images/obama.jpg)]  bg-cover min-h-screen w-full bg-blend-multiply bg-[#000000a8]
      "
      >
        <div className="flex flex-col gap-5 items-center">
          <EfectoAparecer >
            <p className="text-[50px] uppercase w-fit">{proyect.name}</p>
          </EfectoAparecer>
          <div className="flex gap-15 w-full">
            <div className="flex flex-col gap-3">
              <EfectoTexto
                textSize="16px"
                classAdd="max-w-[800px]"
                data={t(`${url}Description`)}
              />
              <EfectoAparecer
                delay={5000}
                
              
              >
                <p className="text-base font-bold text-[#E9D8A6]">
                  {t("participants")}
                </p>
                {proyect.participants.map((d) => (
                  <a
                    className="flex gap-1 hover:opacity-60"
                    key={d.name}
                    href={d.linkedin}
                  >
                    <p>{t(d.rol)}:</p>
                    <p>{d.name}</p>
                  </a>
                ))}

                {proyect.responsibilities.length != 0 && (
                  <div className="mt-4">
                    <p className="text-base font-bold text-[#E9D8A6]">
                      {t("responsibilities")}
                    </p>
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {proyect.responsibilities.map((d, i) => (
                        <li key={i}>{t(`${url}Responsibilities${i + 1}`)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {proyect.characteristics.length != 0 && (
                  <div className="mt-4">
                    <p className="text-base font-bold text-[#E9D8A6]">
                      {t("characteristics")}
                    </p>
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {proyect.characteristics.map((_, i) => (
                        <li key={i}>{t(`${url}Characteristics${i + 1}`)}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </EfectoAparecer>

              <EfectoAparecer
                delay={6000}
                
              >
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
            <div className="flex flex-col gap-10" >
              <CarruselDetails data={proyect} />
              <div className="flex flex-wrap w-full gap-4">
                {proyect.webpage && (
                  <ButtonLink text="webPage" href={proyect.webpage} />
                )}
                {proyect.frontend && (
                  <ButtonLink text="frontend" href={proyect.webpage} />
                )}
                {proyect.backend && (
                  <ButtonLink text="backend" href={proyect.webpage} />
                )}
                {proyect.videopage && (
                  <ButtonLink text="videopage" href={proyect.webpage} />
                )}
              </div>
                <Herramientas data= {proyect.technologies} quitarTexto={false} svgSize="30px" classAdd="grayscale" />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[url(/assets/images/landing2.jpg)] bg-cover h-[50vh] w-full bg-blend-multiply bg-[#00000073]" />

      <SeccionBuscador proyectos={proyectos} contacto={contacto} buscador={true} />

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
