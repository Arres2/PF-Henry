import React from "react";
import CardContainer from "../CardContainer/CardContainer";
// import Comments from "../Comments/Comments";
import { Link } from "react-router-dom";
import s from "./Container.module.css";

export default function Container() {
  return (
    <div className={s.container}>
        <div className={s.btn}>
          <Link to="/destinations">
            <button>See All Destinations</button>
          </Link>
        </div>
    </div>
  );
}
