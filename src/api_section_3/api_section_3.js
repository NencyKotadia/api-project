import React from "react";
import "./api_section_3.css";
function Api_section_3() {
  return (
    <div className="api_section_3">
      <div className="sec_3_1">
        <div className="sec_3_1_1">
          <a href="https://rickandmortyapi.com/api/character">
            CHARACTERS: 826
          </a>
        </div>
        <div className="sec_3_1_1">
          <a href="https://rickandmortyapi.com/api/location">LOCATIONS: 126</a>
        </div>
        <div className="sec_3_1_1">
          <a href="https://rickandmortyapi.com/api/episode">EPISODES: 51</a>
        </div>
      </div>
      <div className="sec_3_2">
        <div className="sec_3_2_1"> <a href="https://status.rickandmortyapi.com/">SERVER STATUS</a>  </div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
export default Api_section_3;
