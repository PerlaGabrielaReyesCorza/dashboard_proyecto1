import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Mapa = ({ data }) => {
  const [tooltipContent, setTooltipContent] = useState("");

  // Escala de colores
  const colorScale = scaleLinear()
    .domain([3, 5.5, 7.5])
    .range(["#A2D2FF", "#3597c5ff", "#083272ff"]);

  // Diccionario de Alias
  const aliasDict = {
    "United States of America": "United States",
    "Dem. Rep. Congo": "Congo (Kinshasa)",
    "Congo": "Congo (Brazzaville)",
    "Dominican Rep.": "Dominican Republic",
    "Palestinian Ter.": "Palestinian Territories",
    "Central African Rep.": "Central African Republic",
    "Eq. Guinea": "Equatorial Guinea",
    "Bosnia and Herz.": "Bosnia and Herzegovina",
    "Cote d'Ivoire": "Ivory Coast",
    "S. Sudan": "South Sudan",
    "eSwatini": "Swaziland",
    "Türkiye": "Turkey",
    "Turkiye": "Turkey"
  };

  const findCountryData = (geoName) => {
    let found = data.find(d => d.country === geoName);
    if (found) return found;
    const aliasName = aliasDict[geoName];
    if (aliasName) {
        found = data.find(d => d.country === aliasName);
        if (found) return found;
    }
    const cleanGeo = geoName.toLowerCase().trim();
    found = data.find(d => d.country.toLowerCase().trim() === cleanGeo);
    return found || null;
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      
      {tooltipContent && (
        <div style={{
          position: "absolute", top: "10px", right: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "8px 12px", border: "1px solid #ddd",
          borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          zIndex: 10, pointerEvents: "none", fontSize: "0.85rem", color: "#333"
        }}>
          {tooltipContent}
        </div>
      )}

      <ComposableMap
        projectionConfig={{ 
            scale: 200,      // [CAMBIO] Aumentado para que se vea más grande
            center: [0, 15]  
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const geoName = geo.properties.name;
              const countryData = findCountryData(geoName);
              const fillColor = countryData ? colorScale(countryData.value) : "#F5F5F5";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fillColor}
                  stroke="#D6D6DA"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#ffb866ff", outline: "none", cursor: "pointer", transition: "all 0.2s" },
                    pressed: { outline: "none" },
                  }}
                  onMouseEnter={() => {
                    const score = countryData ? countryData.value : "N/A";
                    const displayName = countryData ? countryData.country : geoName;
                    setTooltipContent(
                      <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
                        <strong>{displayName}</strong>
                        <span style={{
                            background: countryData ? colorScale(countryData.value) : "#ccc",
                            color: "#fff", padding: "2px 6px", borderRadius: "4px", fontWeight:"bold"
                        }}>
                          {score}
                        </span>
                      </div>
                    );
                  }}
                  onMouseLeave={() => setTooltipContent("")}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default Mapa;