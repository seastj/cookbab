import React from "react";
import { medalList, medalIconMap } from "../data/medalList";

function MedalDummy() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {medalList.map(medal => {
        const Icon = medalIconMap[medal.id];
        return (
          <div
            key={medal.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100px",
            }}
          >
            {Icon && <Icon />}
            <span style={{ marginTop: "8px", textAlign: "center" }}>
              {medal.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default MedalDummy;
