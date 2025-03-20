import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { motion } from "framer-motion";
import { Email, Github, Linkedin, NextIcon, Phone, PrevIcon, ToolSvg } from "./Icons";

import { useTranslation } from "react-i18next";
import { databases, generateRandomString, technologies } from "./utils";


export const Menu = ({
  inicio,
  herramientas,
  experiencia,
  estudios,
  proyectos,
  contacto,
  isOpen,
  setIsOpen,
}) => {
  const navigate = new useNavigate();
  const { t, i18n } = useTranslation();
  

  return (
    <div>
      <div className="fixed top-[50px] left-[70px] flex items-center justify-center gap-3 z-[110] ">
        <BotonMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <SunMoonToggle />
        <button
          className="text-[20px] uppercase"
          onClick={() => {
            i18n.changeLanguage(i18n.language == "es" ? "en" : "es");
          }}
        >
          {i18n.language}
        </button>
      </div>

      <div onClick={() => {setIsOpen(false);}} className={`fixed top-0 h-screen w-screen z-[100] ${!isOpen && "-translate-x-full"}`}/>

      <div
        className={`z-[100] backdrop-blur-[2px] fixed top-0 duration-300 flex flex-col h-screen justify-between bg-[#00121981]  px-[70px] py-[50px] pr-[120px] ${
          !isOpen && "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-[100px] my-[120px]">
          <div />
          <div className="flex flex-col gap-5">
            <div className="group w-fit">
              <button
                onClick={() => {
                  navigate("/");
                  inicio.current?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out uppercase"
              >
                {t("home")}
              </button>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>

            <div className="group w-fit">
              <button
                onClick={() => {
                  navigate("/");
                  experiencia.current?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out uppercase"
              >
                {t("workExperience")}
              </button>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>

            <div className="group w-fit">
              <button
                onClick={() => {
                  navigate("/");
                  herramientas.current?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out uppercase"
              >
                {t("tools")}
              </button>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>
            <div className="group w-fit">
              <button
                onClick={() => {
                  navigate("/");
                   estudios.current?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out uppercase"
              >
                {t("academicTraining")}
              </button>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>
            <div className="group w-fit">
              <button
                onClick={() => {
                  proyectos.current?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out uppercase"
              >
                {t("myProjects")}
              </button>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>
            <div className="group w-fit">
              <button
                onClick={() => {
                  contacto.current?.scrollIntoView({ behavior: "smooth" });
                  setIsOpen(false);
                }}
                className="group-hover:text-[#E9D8A6] duration-300 ease-in-out uppercase"
              >
                {t("contact")}
              </button>
              <div className="bg-[#E9D8A6] h-[7px] w-0 group-hover:w-full duration-300 ease-in-out" />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <a
              className="hover:text-[#E9D8A6] duration-300"
              href="https://www.linkedin.com/in/jesus-david-osorio-jimenez/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              className="hover:text-[#E9D8A6] duration-300"
              href="https://github.com/JesusOsorioJ"
              target="_blank"
            >
              <Github />
            </a>
            <a
              className="hover:text-[#E9D8A6] duration-300"
              href="mailto:jesusosoriojimenez@outlook.com"
            >
              <Email />
            </a>
            <a
              className="hover:text-[#E9D8A6] duration-300"
              href="https://wa.me/573174526421"
            >
              <Phone />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Carrusel = ({filteredData}) => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full flex flex-col items-center">
      
      <Swiper
        navigation
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper w-[90vw]"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          800: { slidesPerView: 2, spaceBetween: 20 },
          1500: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {filteredData.map((d, i) => (
          <SwiperSlide key={i}>
            <a
              href={`/details/${d.url}`}
              className="flex flex-col gap-1 duration-500"
            >
              <div className="relative w-full group overflow-hidden">
                <img
                  src={`/assets/photo/${d.url}/${d.imageswebpages[0]}.png`}
                  className="w-full h-[400px] bg-cover"
                  alt={d.imageswebpages[0]}
                />
                <div className="text-[18px] bg-[#000000cb] size-full absolute top-0 translate-y-full group-hover:translate-y-0 duration-500 p-10">
                  <p>{t(`${d.url}Description`)}</p>
                </div>
              </div>

              <div className="z-10 pb-10">
                <p className="text-[18px] font-[600] uppercase">{d.name}</p>
                <div className="flex flex-wrap gap-2 text-[16px] capitalize">
                  <p>{d.technologies.frontend[0]}</p>
                  <p>{d.technologies.backend[0]}</p>
                  <p>{d.technologies.database[0]}</p>
                  <p>{d.technologies.test[0]}</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};



export const BuscarPorPaginacion = ({filteredData }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);


  const itemsPerPage = 4;
    const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(filteredData.length / itemsPerPage)
 

  return (
    <div className="w-full flex flex-col items-center gap-2">
      

   {/* Paginación */}
   {filteredData.length != 0 && <div className="flex gap-2 mt-4 items-center">
        <button
          className="p-2 text-2xl hover:text-[#E9D8A6] disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <PrevIcon />
        </button>
        <span className="p-2">Página {currentPage}/{totalPage}</span>
        <button
          className="p-2 text-2xl hover:text-[#E9D8A6] disabled:opacity-50"
          onClick={() =>
            setCurrentPage((prev) =>
              prev < totalPage ? prev + 1 : prev
            )
          }
          disabled={indexOfLastItem >= filteredData.length}
        >
          <NextIcon />
        </button>
      </div>}
      <div className="flex flex-wrap gap-3 justify-center">
        {currentItems.map((d, i) => (
          <a
            key={i}
            href={`/details/${d.url}`}
            className="flex flex-col gap-1 duration-500"
          >
            <div className="relative w-full group overflow-hidden">
              <img
                src={`/assets/photo/${d.url}/${d.imageswebpages[0]}.png`}
                className="h-[300px] w-[450px] bg-cover"
                alt={d.imageswebpages[0]}
              />
              <div className="text-[18px] bg-[#000000cb] size-full absolute top-0 translate-y-full group-hover:translate-y-0 duration-500 p-10">
                <p>{t(`${d.url}Description`)}</p>
              </div>
            </div>
            <div className="z-10 pb-10">
              <p className="text-[18px] font-[600] uppercase">{d.name}</p>
              <div className="flex flex-wrap gap-2 text-[16px] capitalize">
                <p>{d.technologies.frontend[0]}</p>
                <p>{d.technologies.backend[0]}</p>
                <p>{d.technologies.database[0]}</p>
                <p>{d.technologies.test[0]}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};


export const CarruselDetails = ({ data }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className={`${isOpen ? "fixed top-0 left-0 size-full p-30 z-80" : "w-[500px]"}`}
    >
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "absolute top-0 left-0 bg-[#00000081] size-full" : "hidden"
        }`}
      />
      <Swiper
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 2000 }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className={`mySwiper w-full `}
      >
        {data.imageswebpages.map((d, i) => (
          <SwiperSlide key={i}>
            <a className="flex flex-col gap-1 mb-10">
              <button
                onClick={() => setIsOpen(true)}
                className="size-auto relative group overflow-hidden"
              >
                <img
                  src={`/assets/photo/${data.url}/${d}.png`}
                  className="size-auto"
                  alt={d}
                />
                <div className="text-[16px] text-left  bg-[#00000081] backdrop-blur-md w-full absolute bottom-0 p-3">
                  <p>{t(`${data.url}Images${i + 1}`)}</p>
                </div>
              </button>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </button>
  );
};

export const Footer = ({
  inicio,
  experiencia,
  herramientas,
  estudios,
  proyectos,
}) => {
  const navigate = new useNavigate();
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col gap-[40px] bg-gray-800 text-white 
    p-[50px] lg:p-[80px]">
          <p className="text-[#E9D8A6] text-[22px] uppercase">{t("links")}</p>
          <div className="flex flex-col items-start gap-[10px] text-[18px]">
            <button
              onClick={() => {
                navigate("/");
                inicio.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-[#E9D8A6]"
            >
              {t("home")}
            </button>

            <button
              onClick={() => {
                navigate("/");
                experiencia.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-[#E9D8A6]"
            >
              {t("workExperience")}
            </button>
            <button
              onClick={() => {
                navigate("/");
                herramientas.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-[#E9D8A6]"
            >
              {t("tools")}
            </button>
            <button
              onClick={() => {
                navigate("/");
                estudios.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-[#E9D8A6]"
            >
              {t("academicTraining")}
            </button>
            <button
              onClick={() => {
                navigate("/about");
                proyectos.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-[#E9D8A6]"
            >
              {t("myProjects")}
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <a
              className="hover:text-[#E9D8A6] duration-300"
              href="https://www.linkedin.com/in/jesus-david-osorio-jimenez/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              className="hover:text-[#E9D8A6] duration-300"
              href="https://github.com/JesusOsorioJ"
              target="_blank"
            >
              <Github />
            </a>
            <a
              className="hover:text-[#E9D8A6] duration-300"
              href="mailto:jesusosoriojimenez@outlook.com"
            >
              <Email />
            </a>
            <a
              className="hover:text-[#E9D8A6] duration-300"
              href="https://wa.me/573174526421"
            >
              <Phone />
            </a>
          </div>
    </footer>
  );
};

export const EfectoAparecer = ({
  children,
  translate="translate-y-full",
  delay = 0,
  className = "",
}) => {
  const idRandom = generateRandomString(20);
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const fondo = document.getElementById(idRandom);
          if (fondo)
            setTimeout(() => {
              fondo.classList.replace(translate, ".");
            }, delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.9 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative inline-block overflow-hidden ${className}`}>
      <div
        id={idRandom}
        className={`${translate} duration-300 ease-in-out`}
      >
        {children}
      </div>
    </div>


  );
};

export const EfectoTexto = ({
  data,
  delay = 0,
  classAdd,
  textSize = "text-[18px]",
}) => {
  const array = data.split(/(?=\s)|/g);
  const containerRef = useRef(null);
  const idRandom = generateRandomString(20);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          array.forEach((i, index) => {
            const text = document.getElementById(`letra${idRandom}${index}`);
            if (text) {
              setTimeout(() => {
                text.classList.replace("text-[0px]", textSize);
              }, index * 15 + delay);
            }
          });
          observer.unobserve(element);
        }
      },
      { threshold: 0.9 }
    );
    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap items-end h-fit ${classAdd}`}
    >
      {array.map((d, i) => (
        <div
          id={`letra${idRandom}${i}`}
          className="duration-200 text-[0px]"
          key={i}
        >
          {d === " " ? "\u00A0" : d}
        </div>
      ))}
    </div>
  );
};

export const EfectoIconos = ({ data, delay = 0, quitarTexto, svgSize, classAdd }) => {
  const containerRef = useRef(null);
  const idRandom = generateRandomString(20);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          data.forEach((i, index) => {
            const image = document.getElementById(`image${idRandom}${index}`);
            const text = document.getElementById(`text${idRandom}${index}`);

            if (text) {
              setTimeout(() => {
                image.classList.replace("scale-0", "scale-100");
              }, index * 100 + delay);

            if (quitarTexto)
              setTimeout(() => {
                image.classList.add("text-transparent");
              }, index * -100 + delay + 3000);
            }
          });
          observer.unobserve(element);
        }
      },
      { threshold: 0.9 }
    );
    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex gap-x-10 flex-wrap items-center">
      {data.map((e, i) => (
        <div
          id={`image${idRandom}${i}`}
          key={i}
          className={`${classAdd} hover:grayscale-0 hover:scale-125  scale-0 flex flex-col items-center group transition duration-300 ease-in-out`}
        >
          <ToolSvg iconname={e} size={svgSize} />
          <p
            id={`text${idRandom}${i}`}
            className="text-xs group-hover:text-white capitalize break-works max-w-[40px]"
          >
            {e}
          </p>
        </div>
      ))}
    </div>
  );
};


export function EfectoPrincipal() {
  useEffect(() => {
    const fondo1 = document.getElementById("fondo1");
    setTimeout(
      () => fondo1.classList.replace("bg-white", "bg-transparent"),
      500
    );

    const fondo = document.getElementById("fondo");
    setTimeout(() => fondo.classList.add("opacity-0"), 2500);
    setTimeout(() => fondo.classList.add("scale-300"), 1500);

    const fondo2 = document.getElementById("fondo2");
    setTimeout(() => fondo2.classList.add("hidden"), 3500);
  }, []);

  return (
    <div
      id="fondo2"
      className="fixed h-screen w-full text-white overflow-hidden"
    >
      <div
        id="fondo1"
        className="absolute top-0 bg-white h-screen w-screen duration-2000"
      />
      <svg
        id="fondo"
        viewBox="0 0 900 200"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-screen h-screen duration-1000"
        // style={{"position: absolute; top: 0; left: 0; width: 100vw; height: 100vh;"}}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="textMask">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Montserrat, sans-serif"
              fontSize="50"
              fontWeight="700"
              fill="black"
            >
              <tspan x="50%" dy="0">
                JUAN
              </tspan>
              <tspan x="50%" dy="1.2em">
                LEÓN
              </tspan>
            </text>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="black" mask="url(#textMask)" />
      </svg>
    </div>
  );
}

export const Facebook = () => (
  <div>
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="currentColor"
      className="hover:text-[#E9D8A6]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.2222 0H8.75C3.94444 0 0 3.94444 0 8.77778V26.25C0 31.0556 3.94444 35 8.75 35H26.2222C31.0556 35 35 31.0556 35 26.2222V8.77778C35 3.94444 31.0556 0 26.2222 0ZM22.1944 17.5H18.8889V28.3333H14.7222V17.5H12.5V13.0556H14.4444V11.1667C14.4444 9.38889 15.3333 6.58333 19.0833 6.58333H22.5V10.2778H20.0833C19.6944 10.2778 19.1667 10.5278 19.1667 11.3889V13.0556H22.5833L22.1944 17.5Z"
        fill="white hover:text-[#E9D8A6]"
      />
    </svg>
  </div>
);

const BotonMenu = ({ isOpen, setIsOpen }) => {
  return (
    <button onClick={() => setIsOpen(!isOpen)} className="w-[55px] h-[30px] ">
      <svg
        className="w-full h-full"
        viewBox="0 0 55 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className={`transition-all duration-300 origin-center ${
            isOpen ? "rotate-45 translate-y-[12px]" : ""
          }`}
          width="47"
          height="5"
          fill="#D9D9D9"
        />
        <rect
          className={`transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
          y="12"
          width="47"
          height="6"
          fill="#D9D9D9"
        />
        <rect
          className={`transition-all duration-300 origin-center ${
            isOpen ? "-rotate-45 -translate-y-[12px]" : ""
          }`}
          y="25"
          width="47"
          height="5"
          fill="#E9D8A6"
        />
      </svg>
    </button>
  );
};

function SunMoonToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="flex justify-center items-center ">
      <motion.div
        className="w-8 h-8 cursor-pointer"
        onClick={() => setIsDark(!isDark)}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDark ? (
          <motion.svg
            key="moon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <path d="M12 3.5A8.5 8.5 0 1 0 20.5 12a7 7 0 0 1-8.5-8.5Z" />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <circle cx="12" cy="12" r="5" fill="white" />
            <path
              d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.07 6.07-1.42-1.42M7.35 7.35 5.93 5.93m12.72 0-1.42 1.42M7.35 16.65l-1.42 1.42"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.svg>
        )}
      </motion.div>
    </div>
  );
}

export const Herramientas = ({data=technologies, quitarTexto=true,  svgSize="50px", classAdd=""  }) => {
  return (
    <div className="flex flex-col w-full gap-4">
       {Object.keys(data).map((d) => (
        <div className="flex flex-col items-start" key={d}>
          {data[d].length != 0 && <p className="pr-1 mb-0 text-lg uppercase">{d}</p>}
          <EfectoIconos data={data[d]} quitarTexto={quitarTexto} svgSize={svgSize} classAdd={classAdd} />
        </div>
      ))}
    </div>
  );
};


