import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useRef, useState } from "react";
import "./i18n"; // Importa la configuración de i18n

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const inicio = useRef(null);
  const experiencia = useRef(null);
  const herramientas = useRef(null);
  const estudios = useRef(null);
  const proyectos = useRef(null);
  const contacto = useRef(null);

  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            <Home
              inicio={inicio}
              experiencia={experiencia}
              herramientas={herramientas}
              estudios={estudios}
              proyectos={proyectos}
              contacto={contacto}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          }
        />
        <Route
          path="/details/:url"
          element={
            <Details
              inicio={inicio}
              experiencia={experiencia}
              herramientas={herramientas}
              estudios={estudios}
              proyectos={proyectos}
              contacto={contacto}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
