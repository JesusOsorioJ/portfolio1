import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Email,
  Github,
  Linkedin,
  NextIcon,
  Phone,
  PrevIcon,
  ToolSvg,
} from "./Icons";

import { useTranslation } from "react-i18next";
import { generateRandomString, technologies } from "./utils";

export const Menu = ({
  inicio,
  herramientas,
  experiencia,
  estudios,
  proyectos,
  contacto,
  isOpen,
  setIsOpen,
  delayOscuro = 1000,
}) => {
  const navigate = new useNavigate();
  const { t, i18n } = useTranslation();
  const imagesUrl = `url(/assets/images/${Math.floor(Math.random() * 15) + 1}.jpg)`
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const fondo = document.getElementById("fondoFixed");
    setTimeout(() => fondo.classList.add("bg-[#000000a2]"), delayOscuro);
    setTimeout(() => fondo.classList.add("dark:bg-[#000000c1]"), delayOscuro);
    setBackgroundImage(imagesUrl);
  }, []);

  return (
    <div>
      {/* Fondo fijo */}
      <div
        id="fondoFixed"
        style={{
          backgroundImage: backgroundImage,
        }}
        className="fixed top-0 left-0 bg-cover h-screen w-screen 
        duration-2000 bg-blend-multiply z-[-10] bg-center"
      />
      {/* Botones fijo */}
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

      <div
        onClick={() => {
          setIsOpen(false);
        }}
        className={`fixed top-0 h-screen w-screen z-[100] ${
          !isOpen && "-translate-x-full"
        }`}
      />

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

export const Carrusel = ({ filteredData }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Swiper
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper w-[90vw]"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          800: { slidesPerView: 2 },
          1500: { slidesPerView: 3 },
        }}
      >
        {filteredData.map((d, i) => (
          <SwiperSlide key={i}>
            <DescriptionProject d={d} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const BuscarPorPaginacion = ({ filteredData }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="w-full flex flex-col items-center gap-2">
      {/* Paginación */}
      {filteredData.length != 0 && (
        <div className="flex gap-2 mt-4 items-center">
          <button
            className="p-2 text-2xl hover:text-[#E9D8A6] disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <PrevIcon />
          </button>
          <span className="p-2">
            {t("page")} {currentPage}/{totalPage}  Total: {filteredData.length}
          </span>
          <button
            className="p-2 text-2xl hover:text-[#E9D8A6] disabled:opacity-50"
            onClick={() =>
              setCurrentPage((prev) => (prev < totalPage ? prev + 1 : prev))
            }
            disabled={indexOfLastItem >= filteredData.length}
          >
            <NextIcon />
          </button>
        </div>
      )}
      <div className="flex flex-wrap gap-3 justify-center">
        {currentItems.map((d, i) => (
          <DescriptionProject d={d} key={i} className="h-[300px] w-[450px]" />
        ))}
      </div>
    </div>
  );
};

const DescriptionProject = ({ d, className="w-full h-[400px]" }) => {
  const { t } = useTranslation();
  return (
    <a href={`/details/${d.url}`} className="flex flex-col duration-500">
      <div className="relative w-full group overflow-hidden">
        <img
          src={`/assets/photo/${d.url}/${d.images[0].name}.png`}
          className={`${className} bg-cover group-hover:scale-125 duration-1000 ease-in-out`}
          alt={d.images[0].name}
        />
        <div className="bg-[#000000cb] size-full absolute top-0 translate-y-full group-hover:translate-y-0 duration-1000 ease-in-out p-10">
          <p>{t(`projects.${d.no}.description`)}</p>
        </div>
      </div>
      <div className="z-10 py-2">
        <p className="text-[18px] uppercase">{d.name}</p>
        <div className="flex flex-wrap gap-2 capitalize text-[#808080]">
          <p>{d.technologies.frontend[0]}</p>
          <p>{d.technologies.backend[0]}</p>
          <p>{d.technologies.database[0]}</p>
          <p>{d.technologies.test[0]}</p>
        </div>
      </div>
    </a>
  );
};

export const CarruselDetails = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className={`duration-1000 fixed top-0 right-0 z-80 ease-in-out
          ${isOpen ? "w-[100vw] h-[100vh] p-10 lg:p-30 " : "w-0 h-0"}`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`${
            isOpen ? "absolute top-0 left-0 bg-[#00000081] size-full" : "hidden"
          }`}
        />
        <SwiperCarruselDetails project={project} setIsOpen={setIsOpen} />
      </div>
      <div className="w-[90vw] lg:w-[35vw]">
        <SwiperCarruselDetails project={project} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

const SwiperCarruselDetails = ({ project, setIsOpen }) => {
  const { t } = useTranslation();

  return (
    <Swiper
      pagination={{ clickable: true }}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper h-full"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        320: { slidesPerView: 1 },
      }}
    >
      {project.images.map((d, i) => (
        <SwiperSlide key={i}>
          <button
            onClick={() => setIsOpen(true)}
            className="flex flex-col size-full group"
          >
            <div className="text-[14px] text-left bg-[#000000] backdrop-blur-md w-full p-3">
              <p>{t(`projects.${project.no}.images.${i}.description`)}</p>
            </div>
            <img
              src={`/assets/photo/${project.url}/${d.name}.png`}
              className="size-full bg-cover"
              alt={d}
            />
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
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
    <footer
      className="flex flex-col gap-[40px] bg-[#1e2939d6]
       text-white p-[50px] lg:p-[80px]"
    >
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
  translate = "translate-y-full",
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
    <div
      ref={containerRef}
      className={`relative inline-block overflow-hidden ${className}`}
    >
      <div id={idRandom} className={`${translate} duration-1000 ease-in-out`}>
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

export const EfectoIconos = ({
  data,
  delay = 0,
  quitarTexto,
  svgSize,
  classAdd,
}) => {
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
  const [viewBox, setViewBox] = useState("0 0 1600 900");
  const [translate, setTranslate] = useState("translate(334, 334)");

  useEffect(() => {
    const fondo = document.getElementById("fondo");
    setTimeout(() => fondo.classList.replace("bg-white", "bg-transparent"), 1500);
    setTimeout(() => fondo.classList.replace("duration-1500", "duration-500"), 2700);
    setTimeout(() => fondo.classList.add("scale-3000"), 2700);
    setTimeout(() => fondo.classList.add("opacity-0"), 3200);

    const fondo2 = document.getElementById("fondo2");
    setTimeout(() => fondo2.classList.add("hidden"), 3500);

    const parte1 = document.getElementById("parte1");
    setTimeout(() => parte1.classList.remove("hidden"), 1200);
    const parte2 = document.getElementById("parte2");
    setTimeout(() => parte2.classList.remove("hidden"), 600);
    const parte3 = document.getElementById("parte3");
    setTimeout(() => parte3.classList.remove("hidden"), 700);

    const updateViewBox = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setViewBox(`0 0 ${width} ${height}`);
      setTranslate(`translate(${(width - 232) / 2}, ${(height - 232) / 2})`);
    };

    updateViewBox();
    window.addEventListener("resize", updateViewBox);
    return () => window.removeEventListener("resize", updateViewBox);
  }, []);

  return (
    <div
      id="fondo2"
      className="fixed h-screen w-full text-white overflow-hidden z-[100000]"
    >
      <svg
        id="fondo"
        viewBox={viewBox}
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-screen h-screen duration-1500 bg-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="textMask">
            <rect width="100%" height="100%" fill="white" />
            <g transform={translate} fill="black">
              <path d="M0,20v32v8v152h232V60v-8V20H0z M224,204H8V60h216V204z M224,52H8V28h216V52z" />
              <circle
                cx="20"
                cy="40"
                r="8"
                className="animate-pulse "
                style={{ animationDuration: "0.8s" }}
              />
              <circle
                cx="40"
                cy="40"
                r="8"
                className="animate-pulse"
                style={{ animationDelay: "150ms", animationDuration: "0.8s" }}
              />
              <circle
                cx="60"
                cy="40"
                r="8"
                className="animate-pulse"
                style={{ animationDelay: "300ms", animationDuration: "0.8s" }}
              />
              <path
                id="parte1"
                className="hidden"
                d="M96.424,177.676c0.514,0.221,1.049,0.326,1.574,0.326c1.553,0,3.029-0.91,3.678-2.426l36-84
                c0.871-2.031-0.07-4.383-2.1-5.252c-2.033-0.875-4.385,0.07-5.252,2.1l-36,84C93.453,174.455,94.394,176.807,96.424,177.676z"
              />
              <path
                id="parte2"
                className="hidden"
                d="M46.35,133.408l39.096,24.016c0.652,0.4,1.375,0.592,2.09,0.592c1.344,0,2.656-0.678,3.412-1.906
                  c1.156-1.883,0.568-4.346-1.314-5.502L56.086,130l33.547-20.609c1.883-1.156,2.471-3.619,1.314-5.502
                  c-1.158-1.881-3.623-2.475-5.502-1.314L46.35,126.592c-1.184,0.728-1.906,2.018-1.906,3.408
                  C44.443,131.391,45.166,132.682,46.35,133.408z"
              />
              <path
                id="parte3"
                className="hidden"
                d="M142.81,109.389L176.358,130l-33.547,20.608c-1.883,1.156-2.471,3.618-1.315,5.501c0.756,1.228,2.068,1.906,3.412,1.906
                  c0.713,0,1.438-0.192,2.09-0.592l39.096-24.016c1.184-0.727,1.906-2.018,1.906-3.408c0-1.39-0.723-2.68-1.906-3.408
                  l-39.096-24.018c-1.885-1.158-4.346-0.57-5.502,1.314C140.34,105.77,140.928,108.233,142.81,109.389z"
              />
            </g>
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
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === null) {
      localStorage.setItem("theme", "dark");
      return true;
    }
    return storedTheme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="w-8 h-8 cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
        animate={{ rotate: darkMode ? 360 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {darkMode ? (
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

export const Herramientas = ({
  data = technologies,
  quitarTexto = true,
  svgSize = "50px",
  classAdd = "",
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {Object.keys(data).map((d) => (
        <div className="flex flex-col items-start" key={d}>
          {data[d].length != 0 && (
            <p className="pr-1 mb-0 text-lg uppercase">{d}</p>
          )}
          <EfectoIconos
            data={data[d]}
            quitarTexto={quitarTexto}
            svgSize={svgSize}
            classAdd={classAdd}
          />
        </div>
      ))}
    </div>
  );
};
