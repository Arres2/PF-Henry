import SearchBar from "../SearchBar/SearchBar";
import "./BodyExc.css";

export default function BodyExcursiones() {
  return (
    <div className="container-search-exc">
      <div className="searchExc">
        <h1>¿A donde vas a viajar?</h1>
        <SearchBar />
      </div>
    </div>
  );
}
