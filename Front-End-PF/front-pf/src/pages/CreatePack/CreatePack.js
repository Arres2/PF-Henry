import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import s from "./CreatePack.module.css";
import Footer from "../../components/Footer/Footer";
import PackCreate from "../../components/PackCreate/PackCreate";

export default function CreatePack() {
  return (
    <div className={s.container}>
      <NavBar />
        <PackCreate />
      <Footer />
    </div>
  );
}
