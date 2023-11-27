import "./DolarBox.css";
import React, { useState, useEffect } from "react";
import getDolarPrice from "./../../services/DolarAPI";

function DolarBox() {
  const [dolarPrices, setDolarPrices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const precios = await getDolarPrice();
        setDolarPrices([
          ...precios,
          ...precios,
          ...precios,
          ...precios,
          ...precios,
          ...precios,
        ]);
        console.log(precios);
      } catch (error) {
        console.error("Error opteniendo los precios del dolar:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dolar-box-container">
      <div className="banner">
        {dolarPrices.map((a, index) => {
          if (a.nombre !== "Solidario") {
            return (
              <div className="dolar-item" key={`${a.nombre}-${index}`}>
                <h2 className="dolar-name">Dolar {a.nombre}</h2>
                <h2 className="dolar-price">Compra: ${a.compra}</h2>
                <h2 className="dolar-price">Venta: ${a.venta}</h2>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default DolarBox;
