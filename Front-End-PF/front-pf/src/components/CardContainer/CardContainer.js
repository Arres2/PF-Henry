import React from "react";
import s from "./CardContainer.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function CardContainer() {
  return (
    <div className={s.container}>
      <h2 className="text-zinc-100">Vive experiencias inolvidables.</h2>
      <h2 className="text-zinc-100 text-xl">
        No pienses más! tomate esas vacaciones
      </h2>
      <SearchBar />
    </div>
  );
}
