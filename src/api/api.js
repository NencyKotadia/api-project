import React, { useState, useEffect } from "react";
import "./api.css";


const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
    // .catch(error => console.error(error));
  }, []);

  return (
    <div className="first">
      {characters.map((item) => (
        <div className="sub_main">
          <div className="sub_1">
            <img src={item.image} className="img" />
          </div>
          <div className="sub_2">
            <div className="name">{item.name}</div>
            <div className="status">
              <div className={item.status === "Alive"? "active" : "notActive"}></div>
              {item.status} - {item.species}
            </div>
            <div className="location">
              <span style={{ color: "#818184" }}>Last known location:</span>
              <br /> {item.location.name}
            </div>
            <div className="species">
              <span style={{ color: "#818184" }}>species:</span> <br />
              {item.species}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
