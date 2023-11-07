import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../css/generalStyles.css";

function DataTable() {
  const [data, setData] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hp-api.onrender.com/api/characters"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
const filteredData = data.filter((item) =>
item.name.toLowerCase().includes(SearchTerm.toLowerCase())
);
  return (   
    <div className="div">
      <h1 className="h2">Elige a tú mago favorito</h1>
      <input
        type="text"
        placeholder="Buscar"
        value={SearchTerm}
        onChange={handleSearch}
      ></input>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Nombre</th>
            <th className="th">Alternativo</th>
            <th className="th">Genero</th>
            <th className="th">Especie</th>
            <th className="th">Casa</th>
            <th className="th">cumpleaños</th>
            <th className="th">Color de ojos</th>
            <th className="th">Patronus</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.alternate_names}</td>
              <td>{item.gender}</td>
              <td>{item.species}</td>
              <td>{item.house}</td>
              <td>{item.dateOfBirth}</td>
              <td>{item.eyeColour}</td>
              <td>{item.patronus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;
