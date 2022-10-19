import React from "react";
import { Routes, Route } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import Actividades from "./pages/Actividades";
import Mensajes from "./pages/Mensajes";
import Paquetes from "./pages/Paquetes";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Ordenes from "./pages/Ordenes";
import Destinos from "./pages/Destinos";
import Setting from "./pages/Setting";

const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/mensajes" element={<Mensajes />} />
          <Route path="/paquetes" element={<Paquetes />} />
          <Route path="/ordenes" element={<Ordenes />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
